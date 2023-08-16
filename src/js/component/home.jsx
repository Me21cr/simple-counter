import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className='container contador'>
			<div className='row contador xl '>
				<div className='col rounded text-white text-center display-5 border-start border-end digito'><i className="far fa-clock"></i></div>
				<div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digito6}</div>
				<div className='col rounded text-white text-center display-5 border-start border-end digito'>{props.digito5}</div>
				<div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digito4}</div>
				<div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digito3}</div>
				<div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digito2}</div>
				<div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digito1}</div>

			</div>
		</div>
	);
};

export default Home;