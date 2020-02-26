import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';


class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
		let header = Object.keys(this.props.data[0]);
        return (
            <div>
                <table  id="students">
                    <tbody>
					
                        <TableHeader header={header} />
                        {this.props.data.map(function (d, i) {
                            return <TableRow key={'person-' + i}
							    id={d.id}
                                name={d.name}
                                email={d.username}
                                phone={d.email}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table;