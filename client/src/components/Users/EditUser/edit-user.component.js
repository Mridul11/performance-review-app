import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShowError, ShowSuccess } from '../../CustomElements/FallBackComponent';

const EditUser = (props) => {
  const obj = props.location.userData;

  const [firstName, firstNameSet] = useState(obj?.firstName);
  const [lastName, lastNameSet] = useState(obj?.lastName);
  const [email, emailSet] = useState(obj?.email);
  const [userReview, userReviewSet] = useState(obj?.userReview);
  const [rating, ratingSet] = useState(parseInt(obj?.rating));
  const [admin, setAdmin] = useState(obj?.admin ? 1 : 0 );
  const [showError, showErrorSet] = useState(false);
  const [showSuccess, showSuccessSet] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { id: obj.id, firstName, lastName, email, rating, admin, userReview };
    try {
      const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/updateUser/${obj.id}`, userData);
      console.log("resp: ", response.data);
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

  return (
    obj ? <div className="column ui container segment">
      <p>
      <Link 
        to="/admin"
      >Go back</Link>
      </p>
      <h2 className="ui teal image header">
        <div className="content">
          Edit User
        </div>
      </h2>
      {showError ? <ShowError /> : null}
      {showSuccess ? <ShowSuccess 
        title={"User updated successfully!"}
      />: null}
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
                placeholder="Review"
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
                max="5"
                min="1"
                value={rating}
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
          >Update</button>
        </div>
        <br />
        <div className="ui error message"></div>
      </form>
    </div>
    :
    <ShowError 
    />
  )
}

export default EditUser;