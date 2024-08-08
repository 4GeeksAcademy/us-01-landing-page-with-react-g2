import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
