
import { useEffect, useState } from "react";
import { auth, firestore } from "./firebase";
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
            <ul>
            {
                posts.map((el)=>{
                    if(el.data.uid==props.user.uid)
                    return <li key={el.id}>{el.data.body}</li>;
                })
            }
            </ul>
        </div>
    )
}
export default Allpost;