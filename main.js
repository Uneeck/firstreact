import React from "react";
import ReactDOM from "react-dom";
import Button from "./nav";

class Main extends React.Component {

	render(){
		return (
			<div>
			<h1>Hello</h1>
			<Button/>
			</div>
			)
	}
}

ReactDOM.render(<Main/>, document.getElementById("hello"));