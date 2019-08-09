import React, { Component } from 'react'
import Launch from './Launch'
import { Consumer } from '../context'


export default class LaunchList extends Component {
    render() {
        return (
            <>
            <div className="container text-center mt-5">
            <Consumer>
                {value => {
                    const { sorted_launches } = value;
                    if ( sorted_launches === undefined || sorted_launches.length === 0 ){
                        return (
                            <>
                            <h1 className='text-warning'>no mission matched your search parameters</h1>
                            </>
                        )
                    } else {
                        return (
                            (
                            <div className="row">
                                <div className="col">
                                { 
                                    sorted_launches.map(item => (
                                        <Launch key={item.flight_number} launch={item} />
                                    ))
                                 }
                                </div>
                                </div>
                        )
                        )
                }}}
            </Consumer>
            </div>
            </>
        )
    }
}
