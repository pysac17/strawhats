import React from "react";
import { Typography } from "@mui/material";

const DisplayItem = ({ data }) => {
    const name = Object.keys(data)[0];
    const quantity = data[name];
    const src = "../../public/assets/items/" + name + ".png";
    
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={src} alt={name} style={{ height: 70, width: 70 }} />
            <Typography
                variant="subtitle2"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    padding: '2px 5px',
                    borderRadius: '5px'
                }}
            >
                {'x'+quantity}
            </Typography>
        </div>
    );
};

export default DisplayItem;
