import React from "react";
import firebase from "firebase";
import { Link,Redirect } from "react-router-dom";
// import { Redirect } from 'react-router-dom' 
import "../Styling/LoginForm.css";
import NavBar from "../Navbar";
import Footer from "../Footer"


class LoginForm extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: ""

        }
    }


    handleEmail = (val) => {
        this.setState({
            email: val
        }, console.log(val))
    }

    handlePassword = (val) => {
        this.setState({
            password: val
        }, console.log(val))

    }

    handleSubmit = () => {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {

            alert("You are successfully Login.")
        }).catch((err) => {
            alert(err)
        })
    }

   
    render() {
        const {email,password} =this.state;
        return (
      
          <div >
              <NavBar/>
               <div className="Form" >
        <p className="sign" align="center">Sign in</p>
      
          <input className="inputfields" type="Email"  placeholder="Email" onChange={(e) => this.handleEmail(e.target.value)}/>
          <input className="inputfields" type="password" placeholder="Password" onChange={(e) => this.handlePassword(e.target.value)}/>
          <a className="submit submit1" align="center" onClick={() => this.handleSubmit()} > Sign in</a> <br/> <br/>
         <p align = "center"> <Link to="/signUp" >Create Account?</Link></p>
       
                    
        </div>
        <Footer/>
        </div>
      
    
       
    

        

     
   
        )
    }

}
export default LoginForm;
