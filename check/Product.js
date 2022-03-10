import React from "react";
import { Input, Button } from "reactstrap";
import "./Product.css";
import {toast,ToastContainer } from 'react-toastify';

const Product = () => {

    const addbtn=()=>{
        toast.success("PRODUCT ADDED")
    }
    const updatebtn=()=>{
      toast.success("PRODUCT UPDATED")
  }
  const delbtn=()=>{
    toast.success("PRODUCT DELETED")
}

    
  return (
    <div>
      <form className="form">
      <h1 id="head">ADD PRODUCT</h1>
        <div>
          
          <Input
            type="text"
            id="data"
            placeholder="ENTER PRODUCT NAME"
            name="pname"
            required
          ></Input>
          <Input
            type="number"
            id="data"
            placeholder="ENTER PRODUCT PRIZE"
            name="pprice"
            required
          ></Input>
          <Input
            type="url"
            id="data"
            placeholder="ENTER PRODUCT IMAG-URL"
            name="purl"
            required
          ></Input>
          <Input
            type="number"
            id="data"
            placeholder="ENTER PRODUCT QUANTITY"
            name="pquantity"
            required
          ></Input>
          <ToastContainer/>
          <Button color="success" size="sm" onClick={addbtn}>ADD</Button>{' '}
          <Button color="info " size="sm" onClick={updatebtn}>UPDATE</Button>{' '}
          <Button color="danger" size="sm" onClick={delbtn}>DELETE</Button>
        </div>
      </form>
    </div>
  );
};

export default Product;
