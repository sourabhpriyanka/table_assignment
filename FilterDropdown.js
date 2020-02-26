import React, { Component } from 'react';

// UserInput component
class FilterDropdown extends React.Component {
    constructor(props) {
        super(props)
    }

	render() {
		let seloption= this.props.data.map((emp, index) => {
		  const { id, name, username} = emp //destructuring
          return (
		    <option value={name} key={name}>{name}</option>
          )
        });
		
        return (<div>
            <select className="searchbox"  onChange={(e) => this.props.update(e)} >
			 <option value="">Select Name</option>
			{seloption}
			</select>
        </div>)
    }
}

export default FilterDropdown;
