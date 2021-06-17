import {useContext, useState, useEffect } from "react";
import axios from "axios";
import { ContextStore } from "../../context/ContextStore";
import { useHistory } from "react-router-dom";
import {ShowError} from '../CustomElements/FallBackComponent/';


function LoginComponent(props) {
    const history = useHistory();
    const store = useContext(ContextStore);
    const [userObj, userObjSet] = store.LoggedInUserInfo;
    const [test, settest] = useState(false);
    
    async function handleChange(e){
        [e.target.name] = e.target.value;
        props.emailSet(e.target.value);
    }

    async function handleSubmit(e) {
        if(JSON.stringify(props.userObj) === "{}"){
            settest(true);
        }
        e.preventDefault();
        try {
            const loggedinUser = await axios.post(`${process.env.REACT_APP_BASE_URL}/userLogin`, {email: props.email});
            console.log(loggedinUser);
            
            window.localStorage.setItem("user", JSON.stringify(loggedinUser.data));
            userObjSet(loggedinUser.data);
            history.push("/admin")
        } catch (error) {
            console.log(error);
        }
        props.emailSet("");
    }
    console.log(test, userObj);
    return (
        <div className="ui container segment">
        { test ? <ShowError title={"You are not in the system!!! "} /> : null }
        <form className="ui form " onSubmit={(e) => handleSubmit(e)}>
            <div className="column three ui">
                <h2 className="ui teal image header">
                    <div className="content">
                        Log-in to your account
                    </div>
                </h2>
                <div className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input
                                    type="email"
                                    name="email"
                                    value={props.email}
                                    placeholder="E-mail address"
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                        </div>
                        <button
                            disabled={props.email === ""}
                            className="ui fluid large teal submit button">
                            Login
                        </button>
                    </div>
                    <div className="ui error message"></div>
                </div>
            </div>
        </form>
        </div>
    )
}

export default LoginComponent;