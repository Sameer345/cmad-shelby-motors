
// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';
//   import logo from "../images/shelby3.png";
//   import {Link} from "react-router-dom";
//   import "../components/Styling/searchBarstyle.css";
//   import firebase from "firebase"



// const Header = (props) => {



//   const [isOpen, setIsOpen , Userlogin  ] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//  function HandleLogout()  
//   {
//     firebase.auth().signOut().then(alert("you are successfully Logout"))
//   }

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({
//           userTrue : false
//         })
//       }
//     })
//   }


//   return (

// <div style = {{backgroundColor: 'black' , color:"white"  }}>

//    <Navbar color="" light expand="md"  >
//     <NavbarBrand href="/"><img src = {logo} height = "44px"  width = "100px"  /></NavbarBrand>
//     <NavbarToggler onClick={toggle} style = {{backgroundColor:"#ffd700"}} />
//     <Collapse isOpen={isOpen} navbar >
//       <Nav className="ml-auto" navbar >


//         <NavItem>
//           <NavLink><Link to = "/"  className = "NavList">HOME</Link></NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink><Link to = "Showroom" className = "NavList">SHOWROOM</Link></NavLink>
//         </NavItem>
//         <NavItem >
//           <NavLink ><Link to = "About" className = "NavList">ABOUT</Link></NavLink>
//         </NavItem>
//         <NavItem>
//         <NavLink ><Link to = "Contact" className = "NavList">CONTACT</Link></NavLink>
//         </NavItem>
//         {Userlogin ? 
//            <NavItem>
//         <NavLink>    
//         <Link to = "login" className = "NavList">LOGIN</Link>
//         </NavLink>
//         </NavItem> : 
//           <NavItem>  
//            <NavLink>      
//             <Link to = "" className = "NavList" onClick = {HandleLogout} >LOGOUT</Link>
//               </NavLink>
//               </NavItem> }



//       </Nav>
//     </Collapse>
//   </Navbar>
// </div>
//   );

// }

// export default Header;


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import logo from "./images/shelby3.png";
import { Link } from "react-router-dom";
import "../components/Styling/searchBarstyle.css";
import firebase from "firebase"




class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      userTrue : true,
     

    }
    
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userTrue : false
        })
      }
    })
  }
 
 
  HandleLogout = () => {
   firebase.auth().signOut().then(()=>{
     this.setState({
         userTrue : false
     })
     alert("you are successfully Logout")
 })
 }

 toogle = () =>{
  this.setState({
    isOpen:!this.state.isOpen
    
  })
}
  render() {
    let {isOpen , userTrue} = this.state 
    return (
      <div style={{ backgroundColor: 'black', color: "white" }}>

        <Navbar color="" light expand="md"  >
          <NavbarBrand href="/"><img src={logo} height="44px" width="100px" /></NavbarBrand>
          <NavbarToggler onClick={this.toogle} style={{ backgroundColor: "#ffd700" }} />
          <Collapse isOpen={isOpen} navbar >
            <Nav className="ml-auto" navbar >


              <NavItem>
                <NavLink active ><Link to="/" className="NavList" active>HOME</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="Showroom" className="NavList">SHOWROOM</Link></NavLink>
              </NavItem>
              <NavItem >
                <NavLink ><Link to="About" className="NavList">ABOUT</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link to="Contact" className="NavList">CONTACT</Link></NavLink>
              </NavItem>
              {userTrue ?
                <NavItem>
                  <NavLink>
                  <Link to="login" className="NavList">LOGIN</Link>

                  </NavLink>
                </NavItem> :
                <NavItem>
                  <NavLink active>
                <Link to="" className="NavList" onClick={this.HandleLogout} >LOGOUT</Link>
                  </NavLink>
                </NavItem>}



            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )

  }
}



// const [isOpen, setIsOpen , isLogin ] = useState(false);


export default NavBar;



