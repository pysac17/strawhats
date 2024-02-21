import React from "react";
import "../styling/Store.css";
import { useNavigate } from "react-router-dom";

const Store = () => {
  let navigate = useNavigate(); 
  const routeChange = (category) =>{ 
    navigate('/details', { state: { category:category } });
  }

  return (
    <main style={{marginTop:"65px"}}> 
      <div id="left-column" style={{ width: "8vw" }}>
        <div id="left-top" style={{ height: "40vh", display: 'flex' }}>
          <div id="seasonal-section" className="vertical" onClick={()=>{routeChange(1)}}>
            SEASONAL
          </div>
        </div>
        <div id="left-center" style={{ height: "20vh", display: "flex" }}>
          {/* <img src="assets/customer.png" alt="customer" id="customer-img"> */}
        </div>
        <div id="left-bottom" style={{ height: "40vh", display: "flex" }}>
          <div
            id="cash-counter-section"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* <img src="assets/counter.png" alt="counter" class="counter-img">
                    <img src="assets/counter.png" alt="counter" class="counter-img">
                    <img src="assets/counter.png" alt="counter" class="counter-img"> */}
          </div>
        </div>
      </div>
      <div
  id="center-column"
  style={{ display: 'flex', flexDirection: 'column', width: '84vw' }}
>

<div id="top-center" style={{ display: 'flex' }}>
          <div id="clothing-section"  onClick={()=>{routeChange(3)}}>CLOTHING</div>
          <div id="beauty-section" onClick={()=>{routeChange(11)}}>BEAUTY</div>
          <div id="medical-section"  onClick={()=>{routeChange(5)}}>MEDICAL SUPPLIES</div>
          <div id="bathroom-supplies-section"  onClick={()=>{routeChange(4)}}>BATHROOM SUPPLIES</div>
        </div>
        <div id="center-center">
          <div id="product-of-month" onClick={()=>{routeChange(0)}}>PRODUCT OF THE MONTH</div>
          <div id="home-decor-section" onClick={()=>{routeChange(13)}} >HOME DECOR</div>
          <div id="electronics-section"  onClick={()=>{routeChange(12)}}>ELECTRONICS</div>
        </div>
        <div id="bottom-center" style={{ display: 'flex', alignSelf: 'flex-end' }}>
          <div id="stock-clearance"  onClick={()=>{routeChange(2)}}>STOCK CLEARANCE</div>
          <div id="sports-section"  onClick={()=>{routeChange(10)}}>SPORTING GOODS</div>
          <div id="stationary-section" style={{ alignSelf: 'flex-end' }}  onClick={()=>{routeChange(9)}}>
            STATIONARY
          </div>
          <div id="refrigerator-section"  onClick={()=>{routeChange(8)}}>REFRIGIRATOR</div>
        </div>
      </div>
      <div
        id="right-column" 
        style={{ display: 'flex', flexDirection: 'column', width: '8vw' }}
        >
        <div id="groccery-section" className="vertical"  onClick={()=>{routeChange(6)}}>
          GROCCERIES
        </div>
        <div id="bevrages-section" className="vertical"  onClick={()=>{routeChange(7)}}>
          BEVRAGES
        </div>
      </div>
    </main>
  );
};

export default Store;
