import React from 'react';
import logo from '../../../users.png';
import {Rating} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { ShowError } from '../../CustomElements/FallBackComponent';
import "./usershow.component.css";

const ShowUser = (props) => {
    const obj = props.location.userData ;
    
    return (
       obj ? <div className="ui container user-margin">
            <Link 
                to="/admin"
            >Go back</Link>
        <div className="ui items" style={{ height:'100vh' }}>
        <div className="item">
          <a className="ui small three image">
            <img alt="image" src={logo} />
          </a>
          <div className="content">
            <a className="header">{obj.firstName} {obj.lastName}</a>
            <div className="description">
              <p>
              {obj.firstName}'s strengths include loyalty, 
              hard work ethic, humor, flexibility, ambition, excellent written communication, 
              excellent verbal communication, creativity, tech-savvy, 
              thinking outside of the box, strong interpersonal skills, persuasiveness and 
              industry-specific skills and knowledge.
              </p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </div>
            <div>
                <br />
                <strong>Email: </strong> <i>{obj.email}</i>
                <br />
                <strong>Admin: </strong> { obj.admin ? <i>YES</i> : <i>NO </i>}
            </div>
            <div className="content">
                You have been: <strong className="content">
                  {obj.userReview}</strong>
            </div>
            <hr />
            <h2>Rating:</h2>
            <div className="content">
              <Rating 
                    maxRating={5} 
                    defaultRating={parseInt(obj.rating)} 
                    icon='star' 
                    size='huge' 
                    color={'#e3e319'}
                    edit={false}
                />
            </div>
          </div>
        </div>
      </div>
      </div>
      :
      <ShowError 
        title={"This usually does not happen, but i think i messed up :("}
      />
    )
}

export default ShowUser;