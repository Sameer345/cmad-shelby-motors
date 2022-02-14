import React from 'react';
import { storage } from "../../App";
import "../Styling/AddBikeFormStyle.css";
import NavBar from "../Navbar";
import Footer from "../Footer"

class Bikeinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Model: "",
            EngineDis: "",
            MaxPower: "",
            TyresSize: "",
            Brakes: "",
            FuelSystem: "",
            MaxSpeed: "",
            FuelCapacity: "",
            Price: "",
            Condition: "",
            Contact: "",
            image: "",
            pic: "",
            id: ""

        }

}
    HandlerEvent = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }
    changeHandle = (event) => {
        if (event.target.files[0]) {
            const image = event.target.files[0]
            this.setState({
                image: image
            }, console.log(image))
        }

    }

    uploadHandle = (funct) => {
        const { image } = this.state;

        const uploadImage = storage.ref(`images/${image.name}`).put(image);

        uploadImage.on("state_changed",
            (snapshot) => {
            },
            (error) => {
                console.log(error)
            },
            () => {
                storage.ref("images").child(image.name).getDownloadURL().then(url => {
                    this.setState({pic:url},()=>funct()) 
                  
                })

            })
    }

    Submitform = () => {
        const {Model , EngineDis , MaxPower , TyresSize , Brakes  , MaxSpeed , FuelCapacity , Price , Condition , Contact , FuelSystem  , image} = this.state
        if(Model == "" || EngineDis == ""  || MaxPower == ""  || TyresSize == "" || FuelSystem == "" || Brakes == ""   || MaxSpeed == "" || FuelCapacity == "" || Price == ""  || Condition == ""  || Contact === "" || image == "" ){
            alert("Please fill all the Fields.")
        }
    
    this.uploadHandle(()=>{
      
   

        this.props.setNewBike(this.state)
        
        alert("Your Bike Added Successfully.")
        {this.props.history.push("/")}
        

    })
    }

    
  
    
    render() {
        return (
            <div >
                <NavBar/>
            <div class="form-style-2">
                <div class="form-style-2-heading">Provide your Bike Information</div>
                <label><span>Bike Name:</span> <input type="text" class="input-field" name="Model" value={this.state.Model}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Engine Displacement: </span><input type="text" class="input-field" name="EngineDis" value={this.state.EngineDis}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Max Power:</span> <input type="text" class="input-field" name="MaxPower" value={this.state.MaxPower}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Tyres Size:</span> <input type="text" class="input-field" name="TyresSize" value={this.state.TyresSize}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Fuel Capacity:</span> <input type="text" class="input-field" name="FuelCapacity" value={this.state.FuelCapacity}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Brakes:</span> <input type="text" class="input-field" name="Brakes" value={this.state.Brakes}
                    onChange={this.HandlerEvent}
                /></label>

                <label> <span>Fuel Syestem:</span> <input type="text" class="input-field" name="FuelSystem" value={this.state.FuelSystem}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Max Speed:</span> <input type="text"class="input-field" name="MaxSpeed" value={this.state.MaxSpeed}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Condition: </span><input type="text" class="input-field" name="Condition" value={this.state.Condition}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Price:</span> <input type="text" class="input-field" name="Price" value={this.state.Price}
                    onChange={this.HandlerEvent}
                /></label>

                <label><span>Contact:</span> <input type="text" class="input-field" name="Contact" value={this.state.Contact}
                    onChange={this.HandlerEvent}
                /></label>
                <input type="file" onChange={this.changeHandle} /> <br/><br/>
                 
                <label><span><input type="Submit" onClick={this.Submitform} value="Add Bike" /></span></label>
            </div> <br/>
            <Footer/>
            </div>
                )
                }
                }

                export default Bikeinfo;


                
            //     import React from "react";
            //     import "../../components/search/style.css";
            //  import { storage } from "../../App"

                
            //     class Bikeinfo extends React.Component {
                
            //         constructor(props){
            //             super(props)
            //         this.state = {
            //                 Model: "",
            //                EngineDis: "",
            //                 MaxPower: "",
            //               TyresSize: "",
            //               Brakes: "",
            //              FuelSystem: "",
            //              MaxSpeed: "",
            //             FuelCapacity: "",
            //           Price: "",
            //           Condition: "",
            //         Contact: "",
            //         image: null,
            //      pic: "",
            //     id: ""
            //             }
            //           this.doneFirst = this.doneFirst.bind(this)

            //         }
            //         HandlerEvent = (e) => {
            //             this.setState({
            //                 [e.target.name]: e.target.value
                
            //             })
                
            //         }
                
            //         async doneFirst() {
            //             // await 
                        
                
                       
            //         }
                
            //         Submitform = () => {
            //         this.uploadHandle(()=>{
            //             alert()
            //             this.props.setNewBike(this.state)
            //         })
                
            //         }
            //         changeHandle = (event) => {
            //             if (event.target.files[0]) {
            //                 const image = event.target.files[0]
            //                 this.setState({
            //                     image: image
            //                 }, console.log(image))
            //             }
                
            //         }
            //         uploadHandle = (funct) => {
            //             const { image } = this.state;
                
            //             const uploadImage = storage.ref(`images/${image.name}`).put(image);
                
            //             uploadImage.on("state_changed",
            //                 (snapshot) => {
            //                 },
            //                 (error) => {
            //                 },
            //                 () => {
            //                     storage.ref("images").child(image.name).getDownloadURL().then(url => {
            //                         this.setState({pic:url},()=>funct()) 
                                  
            //                     })
                
            //                 })
            //         }
                
                                
                
            //     render(){
            //         return(
            //             <div>
            //                 <form >
            //             <div class="form-style-2">
            //             <div class="form-style-2-heading">Provide your Bike Information</div>
                        
            //             <label ><span>Bike Name: </span><input type="text" class="input-field" name="Model" value  ={this.state.Model} onChange={this.HandlerEvent} required/></label>
            //             <label ><span>Engine Displacement: </span><input type="text" class="input-field" name="EngineDis" value = {this.state.EngineDis} onChange={this.HandlerEvent} required/></label>
            //             <label ><span>Max Power: </span><input type="text" class="input-field" name="MaxPower" value = {this.state.MaxPower} onChange={this.HandlerEvent} required/></label>
            //             <label ><span>Tyres Size: </span><input type="text" class="input-field" name="TyresSize" value = {this.state.TyresSize} onChange={this.HandlerEvent} required/></label>
            //             <label ><span>Fuel Capacity: </span><input type="text" class="input-field" name="FuelCapacity" value = {this.state.FuelCapacity} onChange={this.HandlerEvent} required/></label>
            //             <label ><span>Brakes: </span><input type="text" class="input-field" name="Brakes" value = {this.state.Brakes} onChange={this.HandlerEvent} required/></label>
            //             <label ><span>Fuel Syestem: </span><input type="text" class="input-field" name="FuelSystem" value = {this.state.FuelSyestem} onChange={this.HandlerEvent} required /></label>
            //             <label ><span>Max Speed: </span><input type="text" class="input-field" name="MaxSpeed" value = {this.state.MaxSpeed} onChange={this.HandlerEvent} required /></label>
            //             <label ><span>Condition: </span><input type="text" class="input-field" name="Condition" value = {this.state.Condition} onChange={this.HandlerEvent} required/></label>
            //             <label ><span>Price: </span><input type="text" class="input-field" name="Price" value ={this.state.Price} onChange={this.HandlerEvent} required/></label>
            //             <label ><span>Contact: </span><input type="text" class="input-field" name="Contact" value ={this.state.Contact} onChange={this.HandlerEvent} required /></label>
                        
                        
            //             {/* <label for="field5"><span>Message </span><textarea name="field5" class="textarea-field"></textarea></label> */}
                        
            //             <input type="file" onChange={this.changeHandle} />
            //             <label><span> </span><input type="Submit" onClick={this.Submitform} value="Add Bike" /></label>
            //             </div>
            //             </form>
            //             </div>
            //         )
            //     }
                  
            //     }
            //     export default Bikeinfo
                
                
                