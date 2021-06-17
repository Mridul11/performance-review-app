import React, {useContext} from "react"
import { ContextStore } from "../../../context/ContextStore";
import UserComponent from "../User/user.component";
import LoaderComponent from "../../CustomElements/Loader/loader.component";
import './usersList.component.css'

const UserList = () => {
    const store = useContext(ContextStore);
    const [responseObj] = store.ResponseObj;
    // console.log(responseObj);
    return (<div className="box-item ui grid three column row">
        { 
        responseObj.data 
            ? 
            responseObj.data.reverse().map((user, index) => 
                <UserComponent key={index} user={user} />
            )
        :
        <LoaderComponent />
    }
    </div>
    )}

export default UserList;