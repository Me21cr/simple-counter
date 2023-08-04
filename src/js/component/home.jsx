import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className='container contador'>
                 <div className='row contador xl '>
                 <div className='col rounded text-white text-center display-5 border-start border-end digito'><i class="fa-solid fa-clock" style="color: #ffffff;"></i></div>
				 <div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digitosix}</div>
				 <div className='col rounded text-white text-center display-5 border-start border-end digito'>{props.digitofive}</div>
				 <div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digitofour}</div>
				 <div className='col rounded text-white text-center display-5 border-start border-end digito'>{props.digitothree}</div>
				 <div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digitotwo}</div>
				 <div className='col rounded text-white text-center display-5 border-start border-end digito'> {props.digitoone}</div>
			
		</div>
		</div>
	);
};

export default Home;