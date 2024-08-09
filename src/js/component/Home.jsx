import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card.jsx";
import {Navbar} from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	const languages = [
		{
			image: "html.png",
			name: "HTML",
			description: "HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web."
		},
		{
			image: "css.png",
			name: "CSS",
			description: "CSS (Cascading Style Sheets) es un lenguaje de estilos utilizado para describir la presentación de un documento HTML."
		},
		{
			image: "javascript.png",
			name: "JavaScript",
			description: "JavaScript es un lenguaje de programación que permite implementar funciones complejas en páginas web."
		},
		{
			image: "react.png",
			name: "React",
			description: "React es una biblioteca de JavaScript para construir interfaces de usuario, mantenida por Facebook y una comunidad de desarrolladores."
		}
	];
	
	
	return (
		<div className="">
    	<Navbar/>
		<div className="container">

			<Jumbotron/> 
			<div className="navbar">
		    {languages.map(item=><Card language={item}/>)}
			
			</div>

		</div>
		</div>
	);
};

export default Home;
