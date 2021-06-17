import { useContext, useEffect } from "react";
import UsersListComponent from "../../components/Users/UsersList/usersList.component";
import { ContextStore } from "../../context/ContextStore";
import axios from 'axios';

const HomePage = () => {
    const store = useContext(ContextStore);
    const [responseObj, responseObjSet] = store.ResponseObj;
    console.log(process.env.REACT_APP_BASE_URL);
    useEffect(() => {
        axios.get(`http://localhost:4000/api-v1/getAllUsers`)
            .then(response => responseObjSet(response));
    }, []);

    // console.log(responseObj)
    return (
        <div className="ui container" style={{ margin: '50px' }}>
            <UsersListComponent />
        </div>
    )
}

export default HomePage;