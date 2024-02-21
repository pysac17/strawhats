import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import SmallShelf from "../components/SmallShelf";
import {GET} from "../utils/API-calls"
import { updateStore } from "../redux/storeReducers";
import { useDispatch } from "react-redux";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Divider,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const CategoryDetails = () => {
  const location = useLocation();
  const category = location?.state?.category;
  const store = useSelector((state) => state?.store) ?? [];
  const categories = store.map((category) => category.name);
  const [isChecked, setChecked] = useState(categories.map(() => false));
  const dispatch =  useDispatch();
  useEffect(() => {
    if (category !== undefined) check(category);
  }, [category]);

  useEffect(()=>{
    GET("/data",function(err,res){
        if(!err){
            console.log(res)
            const temp = {};
            temp.index=0;
            temp.data={
                shelves:Object.values(res.dict1),
                remainingSpace:res.dict2
            }
            dispatch(updateStore(temp))
        }else{
            console.log(err)
        }
    })
  },[])

  const check = (index) => updateCheckedState(index, true);

  const updateCheckedState = (index, value) => {
    setChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  const handleCheckboxChange = (index) => {
    setChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const filteredData = store.filter((_, index) => isChecked[index]);
//   const allShelves = filteredData.flatMap((item) => item.shelves);

  var data  = [];

  filteredData.map((item)=>{
    var count = 1;
    item.shelves.map((item2)=>{
        var temp = {};
        temp['name']=item.name;
        temp['shelf']=item2;
        temp['index']=count++;
        data.push(temp);
    })
  })

  return (
    <Grid container sx={{marginTop:'65px'}}>
      <Grid item xs={3}>
        <List>
          {categories.map((cat, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => handleCheckboxChange(index)}>
                <Checkbox checked={isChecked[index]} />
                <ListItemText primary={cat} />
              </ListItem>
              {index !== categories.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Grid>
      <Grid item xs={9}>
        <Typography
          sx={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "5px",
          }}
        >
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={6} md={4}>
                  <SmallShelf dataItem={item} />
                </Grid>
                {(index + 1) % 3 === 0 && index !== data.length - 1 && (
                  <Grid item xs={12} key={`divider-${index}`}>
                    <Divider />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CategoryDetails;
