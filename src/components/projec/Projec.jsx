import React from 'react';
import "./projec.css";
import Product from "../product/Product";
import { products } from "../../data";

const Projec = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">MY PROJECTS </h1>
        <p className="pl-desc">
           All the projects have been linked with the github links,
           just click on the image to take you to the github repository.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} name ={item.name} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default Projec