import React from 'react';
import './Card.css'
import 'tachyons';
//import random from 'Math';


// can also use const Cards = ({id,name,roll,email}) => {}
// or {id,name,roll,email} = props;
const Card = (props) =>{
	return(

		<div className='bg-light-blue  dib br3 pa3 ma2 grow bw2 shadow-5 h-60 w-20'>
			<img alt='Robot' src={`https://robohash.org/${props.id}?200x200`}/>
			<div className='tc' id='cards'>
				<h2>{props.name}</h2>
				<p>{props.roll}</p>
				<p>{props.email} </p>
			</div>
		</div>

	);
}

export default Card;