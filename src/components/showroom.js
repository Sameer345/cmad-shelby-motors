import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import karachi from "./images/karachi.jpg";
import islamabad from "./images/islamabad.jpg";
import lahore from "./images/lahore.jpg";
import "../components/Styling/Showroomstyle.css"
import NavBar from "./Navbar";
import Footer from "./Footer";


const Showroom = () => {

    
    return(
        
              <div>
<div style={{position:"fixed",width:'100%',zIndex:2}}>

        <NavBar />
</div>
            
        <div style = {{width: "100%" , color:"white"}}>
            <br/><br/><br/>
            <h1 style = {{textAlign:"center" , marginTop:"2%"}}>Our Showrooms</h1> 
            <hr style = {{width:"50%" , border:"1px solid black"}}/>
            <br/> <br/> 
            <Container >
                <Row>
                    <Col  sm = "12" md = "4" lg = "4">
                        <div  style = {{textAlign:"center" }}>
                        <img src = {karachi}  className = "imgZoom" /> <br/> <br/>
                        <h3 style = {{textAlign:"center"}}>Karachi</h3>
                        <p className = "ShopAddress">Shop No. 3 & 4 Jinnah Market Khayaban-e-Jami, Phase II Exist, Near DHA Suffa
                       University, DHA, Karachi, Pakistan</p>
                       </div>
 
                    </Col>
                    <Col  sm = "12" md = "4" lg = "4">
                    <div  style = {{textAlign:"center"  }}>
                        <img src = {lahore} className = "imgZoom" /> <br/> <br/>
                        <h3 style = {{textAlign:"center"}}>Lahore</h3>
                        <p className = "ShopAddress" >Shop No. 16 & 17 Jinnah Market Khayaban e Jinnah Road Near
                             Wapda Town Phase 2 Lahore, Pakistan</p>
                             </div>
                    </Col>
                    <Col  sm = "12" md = "4" lg = "4">
                    <div  style = {{textAlign:"center"}}>
                        <img src = {islamabad} className = "imgZoom" /> <br/> <br/>
                        <h3 style = {{textAlign:"center"}}>Islamabad</h3>
                        <p  className = "ShopAddress">Shop No. 19 Jinnah Market Khayaban e Jinnah Road Near
                             Faisal Masjid Islamabad, Pakistan</p>
                             </div>
                    </Col>

                </Row>
            </Container>
            
            <Footer/>
            
            
        </div>
        </div>

    )
}
export default Showroom;