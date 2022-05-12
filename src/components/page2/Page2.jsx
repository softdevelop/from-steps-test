import React, { useState , useEffect,useRef, useContext} from "react";
import { Radio } from "../radio/Radio";
import { Link } from "react-router-dom";


import "./page2.css"
import { Context} from "../../context/context";

export default function Page2() {
    const [selected, setSelected] = useState("first");
    const [age, setAge] = useState(50);
    const [total,setTotal] =useState(500);
    const [currency,setCurrency] = useState("HKD");
    const [result,setResult] =useState(500);
    const [address,setAddress] = useState("Hong Kong");
    const [service,setService]= useState("Standard");
    const nameRef = useRef();
    const { dispatch} = useContext(Context);

    const handleChangeAge=  (e) => {
        setTotal(age*10);
    }
    const CalculateSum=  () => {
        switch (selected) {
            case "first":
                setService("Standard");
                setResult(total);
                break;
            case "second":
                setService("Safe");
                setResult(total*3/2);
                break;
            default:
                setService("Super Safe");
                setResult(total*7/4);
                break;
        }
        switch (currency) {
            case "HKD":
                setAddress("Hong Kong");
                break;
            case "USD":
                setAddress("USA");
                break;
            default:
                setAddress("Australia");
                break;
        }
    }
    
    const handleSubmit = ()=>{
        if (age>100) {
            window.location.replace("/err")
        }
        else {
            if(nameRef.current.value){
                const user = {
                    age : age,
                    name:nameRef.current.value,
                    total: result,
                    currency:currency,
                    package:service,
                    address:address
                }
                dispatch({ type: "SUCCESS", payload: user });
                window.location.replace("/bill")
            }
        }
    }
    useEffect(() => {
        CalculateSum();
      }, [selected,total]);
  return (
    <div className="main">
        <h1>Tell us about yourself</h1>
        <div className="form">
            <label for="name">Name</label><br/>
            <input type="text" id="name" name="name" placeholder="Add Text" ref={nameRef} className="input"/><br/>
            <label for="age">Age</label><br/>
            <input type="text" id="age" name="age" value={age} onChange={(e)=>setAge(e.target.value)} onBlur = {handleChangeAge} className="input"/><br/>
            <label for="age">Where do you live</label>
                <br/>
                <select value={currency}onChange={(e)=>{setCurrency(e.target.value)}} className="drop">            
                    <option value="HKD">Hong Kong</option>
                    <option value="USD">USA</option>
                    <option value="AUD">Australia </option>
                </select>
        </div>
        <div className="border" >
            <Radio
                value="first"
                selected={selected}
                text="Standard"
                onChange={setSelected}
            />
            <Radio
                value="second"
                selected={selected}
                text={`Safe (${total/2}${currency}, 50%)`}
                onChange={setSelected}
            />
            <Radio
                value="third"
                selected={selected}
                text={`Super Safe (${total*3/4}${currency}, 75%)`}
                onChange={setSelected}
            />
            <h2>{`Your prenium is: ${result} ${currency}`}</h2>
            <div className="end">
                <Link to={`/`} className="link">
                <button className="back">Back</button>
                </Link>
                <button className="next" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    </div>
  )
}
