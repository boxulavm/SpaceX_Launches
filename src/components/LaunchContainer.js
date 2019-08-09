import React from 'react'
import LaunchFilter from './LaunchFilter'
import LaunchList from './LaunchList'
import { Consumer } from '../context'

const LaunchesContainer = () => {
    return (
        <Consumer>
            { value => {
                const { loading } = value;
                if (loading) {
                    return (
                        <div className="text-center my-5">
                        <h1 className='text-warning'>Loading...</h1>
                        </div>
                        )
                }
                return(
                    <>
                    <LaunchFilter />
                    <LaunchList />
                    </>
                );
            }}
        </Consumer>
    )
}

export default LaunchesContainer
