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
