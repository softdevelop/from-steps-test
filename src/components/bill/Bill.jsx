import "./bill.css"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";


export default function Bill() {
    const {user} =useContext(Context);
   
  return (
    <div className="border">
        <h1 className="header">Summary</h1>
        <h1 className="header">{user.name}</h1>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Where do you live: {user.address}</p>
        <p>Package: {user.package}</p>

        <p>Prenium: {user.total}{user.currency}</p>


        <div className="end">
                <Link to={`/form`} className="link">
                <button className="back">Back</button>
                </Link>
                <Link to={`/`} className="link">
                <button className="next">Buy</button>
                </Link>
            </div>
    </div>
  )
}
