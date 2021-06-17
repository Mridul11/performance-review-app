import { Link } from "react-router-dom";

const handleClick = () => {
  window.open(`mailto:mridulmishra2991@gmail.com?subject="Something went wrong!"`)
}

const ShowError = ({
  title="This usually does not happen, but i think i messed up!"}) => <div className="ui negative message container">
  <div className="header">
    {title}
  </div>
  <br />
  <div className="description ">
    <Link to="/admin"> Please move back to home </Link>
  </div>
  <hr/>
  <div className="description ">
    <button 
    className="ui button default"
    onClick={handleClick}
    >Report to me</button>
  </div>
</div>

export default ShowError;