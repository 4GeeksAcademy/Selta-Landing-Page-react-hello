import React from "react";
import Button from "../component/button";
import PropTypes from 'prop-types';

const  Jumbotron = (props) => {

 return (
		<div className="jumbotron bg-secondary flex-column justify-content-start px-5">
			<h1 className="display-4 ">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<Button buttonLabel="Call to Action" />
		</div>
	);
};
Jumbotron.propTypes = {

	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,

};




export default Jumbotron;