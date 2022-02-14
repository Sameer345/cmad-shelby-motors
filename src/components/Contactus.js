import React , {Component }from 'react';
import "../components/Styling/FormStyling.css";
import NavBar  from "./Navbar";
import Footer from "./Footer"

class ContactUs extends Component{
  
    state = {
        val1:""
    }
    state = {
        val2:""
    }
    state = {
        val3:""
    }
    

          inputvalue1 = (e) => {
              this.setState({
                  val1:e.target.value
                })
            } 
            inputvalue2 = (e) => {
                this.setState({
                    val2:e.target.value
                  })
              }
              inputvalue3 = (e) => {
                this.setState({
                    val3:e.target.value
                  })
              }
            
            
            submitbtn = () => {
            

            
            if(this.state.val1 == "" || this.state.val2 == "" || this.state.val3 == "")
            {
                alert("Please fill all the fields.")
            } else
            alert("Thanks for comment.")
        }

    render(){
        return(
            
          
              <div>
<div style={{position:"fixed",width:'100%',zIndex:2}}>

        <NavBar />
</div>
            
         <div style = {{color:"white"}}>
         <br/><br/><br/>
  <h1 style = {{textAlign : "center" , color:"black" , marginTop:"2%"}}>Contact Us</h1> 
  <br/>
  <h5 style = {{textAlign : "center" , color:"black"  }}> <i>Feel Free to Contact Us Any Time: 0315-2646017</i></h5>
  <hr style = {{width:"50%" , border: "1px solid black"}} />
  <div className="form-style-8">
   <h2>Say Hello</h2>
      <form  onSubmit = {this.submitbtn}  >
             <input type="text" name="field1" placeholder="Full Name" autoComplete = "off" onChange = {this.inputvalue1}/>
             <input type="email" name="field2" placeholder="Email" autoComplete = "off" onChange = {this.inputvalue2} />
           <textarea placeholder="Comment" autoComplete = "off"onChange = {this.inputvalue3} ></textarea>
           <input type="submit" value="Send Message" />
      </form>
      
    </div>
    
 
  <br/>  

  <h5 className = "ShopAddress" > Shop No. 3 & 4 Jinnah Market Khayaban-e-Jami, Phase II Exist, Near DHA Suffa
   <br/>University, DHA, Karachi, Pakistan</h5>
   

  <div style={{textAlign:"center",height:"50px"}}><h5 className = "Email">Shelbymotors@gmail.com</h5></div> 
   <h5 className = "Number"> <strong>International:</strong>  0092 333 4343675</h5>
   <h5 className = "Number"> <strong>National: </strong>0315-2646017</h5>
   <br/>
 
</div>

<Footer/>
</div>
        )
            
        
    }
    }


   

  
    
export default ContactUs