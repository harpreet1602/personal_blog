
import { useEffect, useState } from "react";
import { auth, firestore } from "./firebase";
import {Redirect,Link} from "react-router-dom";
import "./Allpost.css";
let Allpost = (props)=>{
    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        let f=async ()=>{
            let querySnapshot = await firestore.collection("posts").get();

            let tempArr = [];
            querySnapshot.forEach((doc)=>{
                tempArr.push({
                    uid: doc.uid,
                    data:doc.data()
                })
            })
            setPosts(tempArr);
            console.log(posts);
        }
        f();
    },[]);

    return(
        
        <div>
            {props.user?
            <>
            <ul>
            {
                posts.map((el)=>{
                    if(el.data.uid==props.user.uid)
                    return <li key={el.id}>{el.data.body}</li>;
                })
            }
            </ul>
            <Link to="/post"><button className="btn btn-danger m-4"
            >Back to write a post</button></Link>
            <button onClick={()=>{
                auth.signOut();
            }}
            className="btn btn-info m-4"
            >Logout</button>
            </>
            :<Redirect to="/login"/>}

        </div>
    )
}
export default Allpost;