import React from 'react';
import logo from '../../users.png';
import { Rating } from 'semantic-ui-react';
import "./employee.page.css";
import { ShowError } from '../../components/CustomElements/FallBackComponent';

const EmployeePage = ({obj}) => {
    // console.log(props);
    // const obj = props.location.userData ;
    // console.log(obj);
    return (
        obj !== undefined ?  
          <div className="ui container user-margin">
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
              <div>
              <Rating 
                  maxRating={5} 
                  defaultRating={parseInt(obj.rating)} 
                  icon='star' 
                  size='huge' 
                  color={'#e3e319'}
              />
              </div>
            </div>
          </div>
        </div>
        </div>
        :
        <ShowError />
      )
  }

  export default EmployeePage;