import React from "react";
import { Grid } from "@mui/material";
import shelfImage from '../assets/shelf.jpg';

const Shelf = ({ shelf }) => {
    const rowSizes = [1, 2, 3, 4, 5]; // Possible values for paddingBottom
    var paddingBottom;

    if(shelf.length==1){
        paddingBottom=500
    }else if(shelf.length==2){
        paddingBottom=400
    }else if(shelf.length==3){
        paddingBottom=300
    }else if(shelf.length==4){
        paddingBottom=200
    }else{
        paddingBottom=90
    }
    
    return (
        <div style={{ position: "relative", backgroundImage: `url(${shelfImage})`, backgroundSize: "cover", backgroundPosition: "center", width: "600px", height: "600px" }}>
            <Grid container sx={{ paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: `${paddingBottom}px`, display: 'flex', flexDirection: 'column', justifyContent: "space-between", alignContent: "space-between", height: "100%" }}>
                {shelf.map((row, rowIndex) => (
                    <Grid container item key={rowIndex} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {row.map((item, colIndex) => (
                            <Grid item key={colIndex}>
                                {item !== undefined && <div onClick={() => { console.log("+==") }} style={{ backgroundColor: "white", padding: 5, border: "1px solid black", borderRadius: 5 }}>{item}</div>}
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Shelf;
