import { Link } from "react-router-dom"

const FooterComponent = () =>
  <div
    className="ui inverted vertical footer segment "
    style={{
      position: "sticky",
      left: 0,
      width: "100%",
      bottom: 0,
      // top:20,
    }}>
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        
        <div className="three wide column">
        
          <h4 className="ui inverted header">About</h4>
          <div className="ui inverted link list">
            <Link to="/" className="item">Contact Us</Link>
            <Link to="/" className="item">Gazebo Plans</Link>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Services</h4>
          <div className="ui inverted link list">
            <Link to="/" className="item">Banana Pre-Order</Link>
            <Link to="/" className="item">Favorite X-Men</Link>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header">@copyright reserved - MridulMishra!!!</h4>
          <p> Demo content.</p>
        </div>
      </div>
    </div>
  </div>

export default FooterComponent;