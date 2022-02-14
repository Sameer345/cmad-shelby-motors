import React, { Component, useState } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import Bikeinfo from "./forms/AddBikeInfo";
import "./Styling/searchBarstyle.css";
import "./Styling/addbikebtnstyle.css"
import {
  Container, Row, Col, Modal, Button, ModalHeader, ModalFooter, ModalBody, Card,
  CardImg, CardText, CardBody, CardTitle, CardSubtitle, Label, Input, Form, FormGroup
} from 'reactstrap';



class Home extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      itemToShow: "",
      isShow: false,
      search: ""



    }

  }

  showDetail = (item) => {
    this.setState({
      itemToShow: item,
      isShow: true
    })

  }

  toggleHandler = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }


  searchHandle = (e) => {
    this.setState({
      search: e.target.value

    })

  }

  AddBikeHandler = () => {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // return <Redirect to = "/addbike" />
        this.props.history.push("/addbike")
        //  alert("Login")
        // <Bikeinfo />
      }
      else {
        // return <Redirect to = "/login" />
        this.props.history.push("/login")

        // alert("not login")

      }
    }

    )
  }

  render() {
    const { search } = this.state;
    const filteredItem = this.props.listitems.filter(item => {


      return item.Model.toLowerCase().indexOf(search.toLowerCase()) !== -1

    })


    return (
      <div>
        <div style={{ position: "fixed", width: '100%', zIndex: 2 }}>

          <NavBar />
        </div>

        <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="Search Bike" onChange={this.searchHandle} />

          </div>
        </div>
        <br />
        <br />
        <br /><br />

        <Container  >
          <Row>

            {filteredItem.map((listitem) => (
              <Col sm="6" md="6" lg="4" key={listitem.id}>

                <div className="cardimg">
                  <Card className="Card" style={{ backgroundColor: "black" }} onClick={() => this.showDetail(listitem)}  >
                    <CardImg src={listitem.pic} alt="Card image cap" className="CardImg" />

                    <p className="ModelName">{listitem.Model}</p>
                    <p className="Price">{listitem.Price}</p>
                    <div className="overlay">
                      <div className="text">+</div>
                    </div>
                  </Card>
                </div>



                <br />

              </Col>
            ))}



          </Row>
        </Container>
        <br />
        <div style={{ textAlign: "center" }}>


          <br /><br />
          <div class="button_cont" align="center" onClick={this.AddBikeHandler}><a class="example_e" >Add Bike</a></div> <br />

          <br />
          <div>
            {/* Modal */}
            <Modal isOpen={this.state.isShow} toggle={this.toggleHandler}  >
              <ModalHeader style={{ textTransform: "uppercase" }}>{this.state.itemToShow.Model}</ModalHeader>
              <ModalBody >
                <span>  Engine Displacement:</span>{this.state.itemToShow.EngineDis}<br />
                <span>  Max Power:   </span>{this.state.itemToShow.MaxPower} <br />
                <span> Tyres Size:   </span> {this.state.itemToShow.TyresSize} <br />
                <span> Brakes:   </span> {this.state.itemToShow.Brakes} <br />
                <span> Fuel Syestem:   </span> {this.state.itemToShow.FuelSyestem} <br />
                <span> Max Speed:   </span> {this.state.itemToShow.MaxSpeed} <br />
                <span> Fuel Capacity:   </span> {this.state.itemToShow.FuelCapacity} <br />
                <span> Condition:   </span>{this.state.itemToShow.Condition} <br />
                <span> Price:    </span> {this.state.itemToShow.Price}  <br />
                <span> Contact:   </span>{this.state.itemToShow.SellerCellNo}
              </ModalBody>
              <ModalFooter >
                <Button color="secondary" onClick={this.toggleHandler}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>



        </div>

        <Footer />
      </div>


    )
  }
}



export default Home;











