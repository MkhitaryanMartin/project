import { Link } from "react-router-dom";
import Button from "../../components/UI/button";
import "./style.scss";

const NotFound = () => {
    return (
        <div className="not-found">
          <Link to="/">
                    GO HOME
                </Link>
        </div>
    )
}

export default NotFound;