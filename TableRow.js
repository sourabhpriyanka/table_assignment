import React, { Component } from 'react';

class TableRow extends React.Component {
    render() {
        return (
            <tr>
			    <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
            </tr>)
    }
}

export default TableRow;