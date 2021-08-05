import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";

let Login = (props) => {
    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
            // if login -> user info
            // if not logout -> user=null

            if(user)
            {
                // destructuring
              let {displayName, email, uid}= user;
              console.log(user); 
              props.handleUser({displayName, email, uid});

            }else{
            props.handleUser(user);
            }
        
    })
},[])

    return(
        <div>
            {props.user?<Redirect to="/Post"/> : ""}

            <button type="button" 
            onClick={ signInWithGoogle }
      
            className="btn btn-info m-4">Login With Google</button> 
        </div>
    )

}
export default Login;