import { Link } from "react-router-dom";

const ShowSuccess = ({title=""}) => <div className="ui positive message">
  <i className="close icon"></i>
  <div className="header">
    {title}
  </div>
  <hr />
  <div className="description">
    <Link to="/admin">Home</Link>
  </div>
  
</div>


export default ShowSuccess;