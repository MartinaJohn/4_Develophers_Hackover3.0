// import React from 'react';
// import { BrowserRouter, Routes,Route } from "react-router-dom"
// // import Login from "./Pages/Login";
// import SignInOutContainer from './Containers/container';

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="container">
//     {/* <Navbar /> */}
//       <br />
//       <Routes>
//         <Route path = "/login" exact element = {<SignInOutContainer />} /> 
//       </Routes>
//     </div>
      
//     </BrowserRouter>
      
//   );
// }

// export default App;
import React, { Component } from 'react';
import Login from './Pages/Login' ;

class App extends Component {
	render() {
		return (
			<div className="App">
				<Login />
			</div>
		);
	}
}

export default App;