// first of all login can be done using google after that we will be redirected to posts page
// then we will be entering our current blog and enter then it will be stored into the database
// after that we can go to all blogs page by the button then we will be able to see the 
// uid matched document's body according to the user logged in 


import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Post from "./Post";
import Allpost from "./Allpost";


function App() {
let [user,setUser] = useState(null);
console.log(user);
  return (
   <Router>
     <Switch>
    <Route path="/login">
         <Login handleUser= {setUser} user ={user}/>
       </Route>
       <Route path="/post">
        <Post user={user}/>         
       </Route>
       <Route path="/allpost">
        <Allpost user={user}/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
