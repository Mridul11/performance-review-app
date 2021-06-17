import axios from 'axios';
import React, { useState } from 'react';
import { ShowError, ShowSuccess } from '../../CustomElements/FallBackComponent';


const CreateUser = () => {
  const [firstName, firstNameSet] = useState("");
  const [lastName, lastNameSet] = useState("");
  const [email, emailSet] = useState("");
  const [userReview, userReviewSet] = useState("");
  const [rating, ratingSet] = useState(1);
  const [admin, setAdmin] = useState(-1);
  const [showError, showErrorSet] = useState(false);
  const [showSuccess, showSuccessSet] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, rating, admin, userReview };
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/createUser`, userData);
      showSuccessSet(true);
      showErrorSet(false);
    } catch (error) {
      showSuccessSet(false);
      showErrorSet(true);
    }
    firstNameSet("");
    lastNameSet("");
    emailSet("");
    setAdmin(-1);
    ratingSet(1);
    
  }

  console.log(showError);
  return (
    <div className="column ui container segment">
      <h2 className="ui teal image header">
        <div className="content">
          Create a user
        </div>
      </h2>
      {showError ? <ShowError /> : null}
      {showSuccess ? <ShowSuccess title={"User has been creted successfully!"} />: null}
      <form className="ui large form">
        <div className="ui stacked segment">
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => firstNameSet(e.target.value)}
                placeholder="First-Name"
              />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                type="text"
                name="lastName"
                placeholder="Last-Name"
                value={lastName}
                onChange={e => lastNameSet(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                type="text"
                name="userReview"
                placeholder="Add a comment"
                value={userReview}
                onChange={e => userReviewSet(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => emailSet(e.target.value)}
                placeholder="E-mail address" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="star icon"></i>
              <input
                type="number"
                name="rating"
                value={rating}
                min="1"
                max="5"
                onChange={e => ratingSet(e.target.value)}
                placeholder="Rating between (1-5)" />
            </div>
          </div>
          <select
            className="ui dropdown"
            name="admin"
            value={admin}
            onChange={e => setAdmin(e.target.value)}
          >
            <option value="-1">Select Admin</option>
            <option value="1">YES</option>
            <option value="0">NO</option>
          </select>
          <br />
          <br />
          <button 
            className="ui fluid large teal submit button"
            onClick={e => handleSubmit(e)}
            disabled={firstName === "" || lastName === '' || email === ''}
          >Create</button>
        </div>
        <br />
        <div className="ui error message"></div>
      </form>

    </div>
  )
}

export default CreateUser;