import React, { Component } from 'react';
import Table from './Table';
import FilterDropdown from './FilterDropdown';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
     handleChange(event) {
        this.setState({ search: event.target.value });
    }
    render() {
       let employees = this.props.data,
        searchString = this.state.search.trim().toLowerCase();
	   if (searchString.length > 0) {
            employees = employees.filter((e) => e.name.toLowerCase().match(searchString));
        }

        return (
            <div>
			    <h1 id='title'>React Dynamic Table</h1>
			    <FilterDropdown update={(e) => this.handleChange(e)}  data={this.props.data}/>
                <Table data={employees} />
            </div>
        )
    }
}

export default App;
