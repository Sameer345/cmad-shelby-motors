import React , {Component} from  "react";

export default class Remove extends Component{
    constructor(props){
        super(props);
        this.state = {
            listitems:this.props.items,
            search : ""
        }
    }
   

    search = (e) => {
        this.setState({
            search:e.target.value
        
        })
    }
    

    //     if(this.search !== "" &&  this.state.listitems.Model.toLowerCase().indexOf(this.search.toLowerCase()) == -1){
    //         return null
    //     }
    // }
 
  

    render(){
        const {search , listitems} = this.state;
        const filterList = listitems.filter(item => {
          
            return item.Model.toLowerCase().indexOf(search.toLowerCase()) !== -1
    
        })

        // console.log(this.state.listitems);
        return(
            <div>
                <input type="text" onChange={this.search} />
                { filterList.map((item)=>{
                    return(
                        <div>{item.Model}</div>
                    );
                })}
            </div>
        )
    }
}