import "./err.css"
import { Link } from "react-router-dom";


export default function Err() {
  return (
    <div className="border">
        <h1 className="header">Ooops</h1>
        <p>Your age is over our accepted limit.</p>
        <p>We are sorry but we cannot insure you now.</p>

        <Link to={`/form`} className="link">

        <button className="button">Ok :(</button>
        </Link>
    </div>
  )
}
