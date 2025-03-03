import { Button } from "react-bootstrap"
import axios from 'axios'
import './App.css';

// import UserContext from "./context"
import { useContext,useState } from "react"
export default function Register(){

  // let users=useContext(UserContext)
   let [name,setName]=useState('')
   let [email,setEmail]=useState('')
   let [pass,setPass]=useState('')
   let [amount,setAmount]=useState(0)

function handleSubmit(e){
    e.preventDefault()
    console.log(name,email,pass,amount)

    let item={name:name,email:email,password:pass,amount:1000}
        axios.post('http://localhost:8080/Create',item)
    // users.users.push({name:name,email:email,password:pass,amount:1000})
}

    return(<>
    <div id="register">
 <div id="box-shadow">
    <div className="head"><h1>Register</h1></div>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
<label>Name:</label><br></br>
<input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
  </div>
  <div class="mb-3">
    <label>Email address:</label><br></br>
    <input type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
  </div>
  <div class="mb-3">
    <label>Password:</label><br></br>
    <input type="text" onChange={(e)=>{setPass(e.target.value)}}></input>
   </div>

 <div id="button"> <Button type="submit" class="btn btn-primary" >Submit</Button></div>
</form>
</div>
</div>

    </>)
}