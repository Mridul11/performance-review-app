
import { Link } from 'react-router-dom';
import logo from '../../../users.png';
import axios from 'axios';
import {Rating} from 'semantic-ui-react';


export default function UserComponent({ user }) {
    
    const handleRefreshClick = () => {
        window.location.reload(false);
    }

    async function handleClick(e) {
        try {
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/deleteUser/${user.id}`);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="box-align column">
            < div className="ui card" >
                <div className="image">
                    <img src={logo} />
                </div>
                <div className="content">
                    <Link
                        to={{ pathname: '/admin/show/' + user.id, userData: user }}
                        className="header">
                        {user.firstName} {user.lastName}
                    </Link>
                    <hr />
                    <div className="meta">
                        <span className="date">{user.email}</span>
                    </div>
                    <div className="meta">
                        <span className="date">Joined in 2021</span>
                    </div>
                    <div className="description">
                        <strong>ADMIN  </strong> :: {user.admin ?  "YES" : "NO" }
                    </div>
                    <div className="description">
                        <strong>{user.firstName}</strong> is an art director living in New York.
                    </div>
                </div>
                <div className="extra content">
                    <span> if rating does not change,
                    <button 
                        className="circular ui icon button"
                        onClick={handleRefreshClick}
                    >
                        <i className="refresh icon"></i>
                    </button>
                    </span>
                    
                        <br />
                        <Rating 
                            maxRating={5} 
                            defaultRating={parseInt(user.rating)} 
                            icon='star' 
                            size='huge' 
                            color={'#e3e319'}
                            // edit={false}
                        />

                </div>
                <div className="extra content">
                    <div className="ui three buttons">
                        <Link
                            className="ui basic green button"
                            to={{ pathname: '/admin/show/' + user.id, userData: user }}
                        >
                            Show
                        </Link>
                        <Link
                            className="ui basic yellow button"
                            to={{ pathname: '/admin/edit/' + user.id, userData: user }}
                        >
                            Edit
                        </Link>
                        <div className="ui basic red button"
                            onClick={(e) => handleClick(e)}
                        >Delete</div>
                    </div>
                </div>
            </div >
        </div >
    )
}