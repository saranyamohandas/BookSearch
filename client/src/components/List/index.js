import React,  { Component } from "react";
import "./style.css";


class CardItem extends Component {

   
	render(){
		return(
		 
          <div className="card" saved={this.props.saved} key={this.props.id}>
		  <div className="card-header" >
		    {this.props.title}
		  </div>
		  <div className="card-body">
		    <h5 className="card-title">Special title treatment</h5>
		    <p className="card-text"><span className="description"> Short description: </span>{this.props.description}</p>
		    <button className="btn btn-primary"  onClick={()=>this.props.onClick(this.props.id)}>Save</button>
		  </div>
		 </div>

			)

	}
}

export default CardItem;
