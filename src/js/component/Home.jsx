import React from "react";

//include images into your bundle
import { Card } from "./Card";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";
//create your first component
const Home = () => {

	return (
		<div className="text-center">
			<Navbar />
			<h1 className="text-center mt-5">Hello Rigo!</h1>

			<Card />
			<Card />
			<Card />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
