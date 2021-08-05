import {Redirect,Link} from "react-router-dom";
import { auth, firestore } from "./firebase";


import "./style.css";
let Post = (props)=>{
    console.log(props.user?"true":"false");
   


    return(
        <div>
            {props.user?(
                <div className="post">
                <h1>Hello {props.user.displayName}</h1>
                <p>Email: {props.user.email}</p>
                <input type="text" 
                onKeyDown={(e)=>{
                  if(e.key=="Enter")
                  {
                    let post = e.currentTarget.value;
                    firestore.collection("posts").add({
                        body:post,
                        uid:props.user.uid
                    });
                    e.currentTarget.value="";
              }
                }}
                className="input"/>
                <br/>
                <Link to="/allpost"><button className="btn btn-success"
                >View All Blogs</button></Link>
                <button onClick={()=>{
                    auth.signOut();
                }}
                className="btn btn-info m-4"
                >Logout</button>
                </div>

             )
            
            :(<Redirect to="/Login"/>)
            }
        </div>
    )
}
export default Post;