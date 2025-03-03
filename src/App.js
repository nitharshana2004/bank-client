import {Navbar, Container ,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom';
import Register from './register';
import Cashback from './cashback';
import Alldata from './alldata';
import Home from './home';
import Deposit from './deposit';
import UserContext from './context';

function App(){
   return(
    <>
  <Navbar bg="dark" data-bs-theme="dark" id='navigation' >
  <i class="fa-solid fa-building-columns" ></i>
        <Container id='container'>
          <Navbar.Brand href="#home" id='nav'>NithuzBank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="sub-nav" href="#home">Home</Nav.Link>
            <Nav.Link className="sub-nav" href="#register">Register</Nav.Link>
            <Nav.Link className="sub-nav" href="#deposit">Deposit</Nav.Link>
            <Nav.Link className="sub-nav" href="#cashback">Cashback</Nav.Link>
            <Nav.Link className="sub-nav" href="#alldata">Alldata</Nav.Link>
          </Nav>
        </Container>
      
      </Navbar>

<HashRouter>
  <UserContext.Provider value={{"users":[{
    name:"xyz",
    email:"xyz@gmail.com",
    password:"xyz",
    amount:1000}
  ]}}  >
  <Routes>
  <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/deposit' element={<Deposit></Deposit>}></Route>
    <Route path='/cashback' element={<Cashback></Cashback>}></Route>
    <Route path='/alldata' element={<Alldata></Alldata>}></Route>
  </Routes>
  </UserContext.Provider>
</HashRouter>

</>
   )
}
export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
