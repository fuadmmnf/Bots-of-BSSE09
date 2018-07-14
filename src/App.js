import React,{Component} from 'react';

import RobotList from './RobotList';
import {robots} from './Robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';



const particleProperty=
{
	particles: {
		number:{
			value: 150,
			density:{
				enable: true,
				value_area: 800
			}

		}
    },
    "detect_on":"canvas",
    "interactivity":{
    	"events":
    	{
	    	"onhover":{
	    		"enable": true,
	    		"mode": 'repulse'
	    	}
	    }
    }
}



class App extends Component {


	constructor()
	{
		super()
		this.state={
			robots: robots,
			searchField : ''
		}
	}

	onSearchChange= (event) =>{
 		this.setState({searchField: event.target.value});
	
		//console.log(filteredRobots);
	}

/*
	componentDidMount()
	{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

*/

	render(){

		const filteredRobots = this.state.robots.filter(robots => 
			{return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())});

<<<<<<< HEAD
		if(this.state.robots.length === 0)
		{
			return <h1>Loading</h1>
		}
		else
		{
			return(
					<div className='tc'>
					<h1>RoboFriends</h1>
					 <Particles className='particles'
	             	 params={particleProperty} />
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<RobotList robots={filteredRobots}/>
					</Scroll>
					</div>
			);
		}
=======
		return(
			<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<RobotList robots={filteredRobots}/>
			</Scroll>
			</div>
		);
>>>>>>> 69695003870d204a1d366293d6e582bfb7956c5e
	}



}

export default App;