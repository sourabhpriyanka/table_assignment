import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

import asc from './asc.png'

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
					   <tr>
							<th>Id</th>
							<th>Name<img src={asc} onClick={() => this.props.sortBy('name') } className='asc_img'/></th>
							<th>UserName<img src={asc} onClick={() => this.props.sortBy('username') } className='asc_img'/></th>
							<th>Email<img src={asc} onClick={() => this.props.sortBy('email') } className='asc_img'/></th>
						</tr>
                        
						
                        {this.props.data.map(function (d, i) {
                            return <TableRow key={'person-' + i}
							    id={i+1}
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