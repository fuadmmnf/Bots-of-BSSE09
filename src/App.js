import React,{Component} from 'react';

import RobotList from './RobotList';
import {robots} from './Robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import 'tachyons';



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

	render(){

		const filteredRobots = this.state.robots.filter(robots => 
			{return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())});

		return(
			<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<RobotList robots={filteredRobots}/>
			</Scroll>
			</div>
		);
	}
}

export default App;