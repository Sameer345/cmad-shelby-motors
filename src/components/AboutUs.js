import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import aboutuspic from "./images/aboutuspic.jpg";
import Header from "./Navbar";
import Footer from "./Footer"
import "../components/Styling/AboutUsStyle.css"

const AboutUs = () => {
   

        
    return (
       
             <div>
<div style={{position:"fixed",width:'100%',zIndex:2}}>

        <Header /> 
</div> <br/><br/>
        <div style = {{backgroundColor:"#ffd700" , color:"white"}}>
        <br/><br/><br/><br/>
        <h1 className = "About" >About Us</h1>
        <hr style = {{width:"50%" , border: "1px solid black"}}/>
        <br/>
        <Container  width = "100%"> 
            <Row>
                <Col sm = "12" md = "6" lg = "6">
                    <img src = {aboutuspic} className = "MainImg" />
                </Col>
                <Col sm = "12" md = "6" lg = "6">
                  <h2 >Welcome to the <span style = {{color:"black"}}>Shelby Motors Sports</span></h2>
                  <p><strong>Shelby Motors</strong> an exclusive motorbike portal, which aims
                   to focus on bikes. It’s a complete online 
                      portal not only providing the latest news
                       and updates about bike industry but also
                       providing an opportunity for used motorbike
                        buyer and seller to finalize their deal easily. <br/>

                     Similarly, the new bike user can easily get the latest 
                     prices of various motorcycle brands.
                     It is worth mentioning here that the verified dealers and mechanic
                      details are also available at this platform.
                      Ebike.pk youtube channel not only educating the motorcyclists about the
                       traffic rules but also giving them motorcycle reviews. <br/>

                     Ebike.pk tag line “Yahan Sirf Bike Hai” also suggests that it’s
                     an exclusive motorcycle portal. As they not only claim Yahan Sirf 
                     Bike Hai but they actually mean it. Any individual who is looking for
                      a new motorbike or sell a used motorbike, it's possible on ebike. 
                      Similarly, spare parts, accessories even any motorbike related part can get from ebike.pk.</p>
                      <br/>  
                      <p style = {{color:"grey"}}>-CEO, Shelby Motors Sports</p>
                </Col>
            </Row>
            <br/><br/><br/>
        </Container>
        </div>
        <Footer/>
        
        </div>
    )
}
export default AboutUs