import React, { Component } from 'react';

class TableHeader extends React.Component {
    render() {
		
		let headercolum = this.props.header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      });
        return (
		
				<tr>
				 {headercolum}
				</tr>)
    }
}

export default TableHeader;