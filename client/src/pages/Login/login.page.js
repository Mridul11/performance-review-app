import { useState, useContext } from "react";
import LoginComponent from '../../components/Login/login.component';

const LoginPage = () => {
    const [email, emailSet] = useState("");
    
    return (
        <LoginComponent 
            email={email} 
            emailSet={emailSet} 
        />
    )
}

export default LoginPage;