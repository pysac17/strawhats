import React from "react";
import { Grid, Typography } from "@mui/material";
import shelfImage from "../assets/shelf.jpg";
import DisplayItem from "./DisplayItem";

const Shelf = ({ shelf,name }) => {
  const rowSizes = [1, 2, 3, 4, 5]; // Possible values for paddingBottom
  var paddingBottom;

  const rows = shelf.filter(subarray => subarray.length !== 0).length;

  if (rows == 1) {
    paddingBottom = 500;
  } else if (rows == 2) {
    paddingBottom = 400;
  } else if (rows == 3) {
    paddingBottom = 300;
  } else if (rows == 4) {
    paddingBottom = 150;
  } else {
    paddingBottom = 80;
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${shelfImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "600px",
        height: "600px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}
    >
    <Typography>{name}</Typography>
      <Grid
        container
        sx={{
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 2,
          paddingBottom: `${paddingBottom}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
          height: "100%",
        }}
      >
        {shelf.map((row, rowIndex) => (
          <Grid
            container
            item
            key={rowIndex}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {row.map((item, colIndex) => (
              <Grid item key={colIndex}>
                <DisplayItem data={item} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Shelf;
