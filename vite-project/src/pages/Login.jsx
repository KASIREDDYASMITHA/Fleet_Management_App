import { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login=({ setIsAuth}) => { 
    const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const emailRef=useRef(null);
    const navigate=useNavigate();

    useEffect(() =>{
        emailRef.current.focus();
    }, []);

    const handleLogin =() =>{
        if(email=== "admin@gmail.com" && password==="admin1234"){
            alert("Login success");
            setIsAuth(true);
            navigate("/admin");
        }
        else{
            alert("wrong email or password");
        }
    };
    return(
        <> 
        <h2>Login</h2>
        <input ref={emailRef} 
        placeholder="Email" onChange={e =>
            setEmail(e.target.value)}/>
        <input type="password"
        placeholder="password" onChange={e =>
            setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>

        </>
    );
};
export default Login;