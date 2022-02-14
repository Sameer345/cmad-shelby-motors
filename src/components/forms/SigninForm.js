import React from "react";
import firebase from "firebase";
import "../Styling/LoginForm.css";
import NavBar from "../Navbar";
import Footer from "../Footer"


class SigninForm extends React.Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password:""

    }
  }

handleEmail = (val) => {
    this.setState({
      email:val
    },console.log(val))
}

    handlePassword = (val) => {
      this.setState({
        password:val
      },console.log(val))
    
      }
    
       handleSubmit=()=>{
      
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(()=>{

        alert("You are successfully signed up")
    }).catch((err)=>{
        alert(err)
    })
       }

  render() {
    
    return (
      
      <div>
        <NavBar/>
  
  <div className="Form">
        <p className="sign" align="center">Create Your Account</p>
        <form className="form1">
          <input className= "inputfields" type="text" align="center" placeholder="Name" />
          <input className="inputfields" type="email" align="center" placeholder="Email" onChange={(e) => this.handleEmail(e.target.value)}/>
          <input className="inputfields" type="password" align="center" placeholder="Password" onChange={(e)=>this.handlePassword(e.target.value)} />
          
          <a className="submit submit2" align = "center" onClick={()=>this.handleSubmit()}>Create Account</a> 
         
        </form>    
                    
        </div>
        <Footer/>
      
        </div>
    )
  }

}
export default SigninForm;

































