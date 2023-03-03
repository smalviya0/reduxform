// import React from "react";
// // import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
// // import {  Routes, Route } from "react-router-dom";
// // import PostDetails from "./Component/PostDetails";
// import SignUpForm from "./Components/SignUpForm";
// import  
// // import LogInForm from "./Components/LogInForm";


// function App() {
//   return (
//     <div className="App">

// {/*       
//         <Routes>
//           <Route path="/" element={ <CardComponent/>} />
//           <Route path="/post" element={<PostDetails/>} />
//         </Routes> */}
//         <SignUpForm/>
//         {/* <LogInForm/> */}
      
//     </div>
//   );
// }

// export default App;
import React from 'react';
import {Route, Link, Routes } from 'react-router-dom';
import SignUpForm from "./Components/SignUpForm";
import LogInForm from "./Components/LogInForm";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">SignUpForm</Link>
          </li>
          <li>
            <Link to="/login">LogInForm</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login">
          <SignUpForm />
        </Route>
        <Route path="/">
          <LogInForm />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
