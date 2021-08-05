import {Redirect} from "react-router-dom";
import { auth } from "./firebase";
let Post = (props)=>{
    console.log(props.user?"true":"false");
    return(
        <div>
            {props.user?(
                <>
                <h1>Hello {props.user.displayName}</h1>
                <p>Email: {props.user.email}</p>
                
                <button onClick={()=>{
                    auth.signOut();
                }}
                className="btn btn-info m-4"
                >Logout</button>
                </>

             )
            
            :(<Redirect to="/Login"/>)
            }
        </div>
    )
}
export default Post;