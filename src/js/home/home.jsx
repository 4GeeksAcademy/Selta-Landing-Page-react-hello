import React from "react";
import NavBar from "../component/navBar";
import Jumbotron from "../component/jumbotron";
import Card from "../component/card";
import Button from "../component/button";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar />
		<Jumbotron title="A Warm Welcome" description="This text is using the proptypes so its easier to be moldable in the future"/>
		<div className="card-group">
			<Card title="Card Title" description="This text is using the proptypes so its easier to be moldable in the future" />
			<Card title="Card Title" description="This text is using the proptypes so its easier to be moldable in the future" />
			<Card title="Card Title" description="This text is using the proptypes so its easier to be moldable in the future" />
		</div>
		</>
	);
};

export default Home;
