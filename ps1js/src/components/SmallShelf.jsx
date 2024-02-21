import React, { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Modal } from "@mui/material";
import Shelf from "./Shelf";
const SmallShelf = ({ dataItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer"
      }}
      onClick={togglePopup}
    >
      <AcUnitIcon />
      <div>{dataItem.name + " Shelf " + dataItem.index}</div>
      <Modal
        open={isOpen}
        onClose={togglePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <Shelf shelf={dataItem.shelf} name={dataItem.name + " Shelf " + dataItem.index}/>
        </div>
      </Modal>
    </div>
  );
};

export default SmallShelf;
