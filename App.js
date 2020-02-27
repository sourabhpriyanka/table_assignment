import React, { Component } from 'react';
import FilterDropdown from './FilterDropdown';
import Table from './Table';
import Paggination from './Paggination';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
			totalResult:0,
			currentPage:1,
			pageSize:5,
			sortType:'asc',
			sortData:[]
        };
		
    }
     handleChange(event) {
        this.setState({ search: event.target.value });
    }
	
	nextPage =(pageNumber)=>{
		this.setState({ currentPage: pageNumber });
	}
	

	
	sortBy =(key)=>{
		let comparison = 0;
		let sortarr = this.props.data.sort(function (a, b) {
           if( a[key] > b[key]){
			  comparison = 1;  
		   }else if (a[key] < b[key]) {
              comparison = -1;
           }
		   return comparison;
        });
	    this.setState({ sortData: sortarr });
	}
	
    render() {
	   
	   
	  
        let startIndex = (this.state.currentPage-1)*this.state.pageSize;
        let endIndex = startIndex + this.state.pageSize;
		
       let employees = this.props.data,
        searchString = this.state.search.trim().toLowerCase();

		
	   if (searchString.length > 0) {
            employees = employees.filter((e) => e.name.toLowerCase().match(searchString));
        }
		
       let totalResult =(employees.length);
	   const numberPages = Math.floor(totalResult/5);
		
        return (
            <div>
			    <h1 id='title'>React Dynamic Table</h1>
			    <FilterDropdown update={(e) => this.handleChange(e)}  data={this.props.data}/>
                <Table data={employees.slice(startIndex,endIndex)} sortBy={this.sortBy}/>
			    {totalResult >5 ?<Paggination pages={numberPages} nextPage={this.nextPage}  currentPage={this.state.currentPage}/>:''}
            </div>
        )
    }
}

export default App;
