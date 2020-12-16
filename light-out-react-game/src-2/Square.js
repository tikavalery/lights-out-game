import React, { Component } from "react"
import "./Square.css"

class Square extends Component{
    constructor(props) {
        super(props)
        this.smallHandleLight = this.smallHandleLight.bind(this)
        // this.smallHandleWin = this.smallHandleWin.bind(this)
   }

   smallHandleLight(evt) {
        this.props.handleLight()
    }

    // smallHandleWin(evt) {
    //     this.props.handleWin()
    // }onClick={this.smallHandleWin}
  
    render() {
       
            return (
            
                <div className={`${this.props.islightOn ? "light-on" : "light-off"} `} value={this.props.id} onClick={this.smallHandleLight} >
                    {this.props.id}
                    
                </div>
                   
              
            )
       }

}

export default Square;