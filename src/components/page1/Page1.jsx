import "./page1.css"
import { Link } from "react-router-dom";


export default function page1() {
  return (
    <div className="border">
        <h1 className="header">Hello There!</h1>
        <p>Let's buy some insurance. It is going to take only few steps</p>
        <Link to={`/form`} className="link">

        <button className="button">Start</button>
        </Link>
    </div>
  )
}
