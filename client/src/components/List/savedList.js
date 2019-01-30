import React,  { Component } from "react";
import "./style.css";


class SavedItem extends Component {

    savebook = () => {

    }
	render(){
		return(
		 
          <div className="card" saved={this.props.saved}>
		  <div className="card-header" key={this.props.id}>
		    {this.props.title}
		  </div>
		  <div className="card-body">
		    <h5 className="card-title">Special title treatment</h5>
		    <p className="card-text"><span className="description"> Short description: </span>{this.props.description}</p>
		    <a href="#" className="btn btn-primary" onClick={()=>this.savebook(this.props.id)}>Save</a>
		  </div>
		 </div>

			)

	}
}

export default SavedItem;
