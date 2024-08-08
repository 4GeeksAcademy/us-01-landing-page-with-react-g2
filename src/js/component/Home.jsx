import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";
import {Navbar} from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
    	<Navbar/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
		  <Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	);
};

export default Home;
