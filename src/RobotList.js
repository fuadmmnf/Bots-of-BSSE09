import React from 'react';
import Card from './Card';




const RobotList = ({robots}) =>{
	const cardList = robots.map((robot,i)=>
		{
			return <Card 
					key={i} 
					id= {robots[i].id} 
					name= {robots[i].name} 
					roll = {robots[i].roll} email = {robots[i].email}/>
		})
	return(
		<div className='tc'>
			{cardList}
		</div>
	);
}

export default RobotList;