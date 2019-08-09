import React from 'react'
import { Consumer } from '../context'

// get all unique values
const getUnique = (launches,value) => {
    return [...new Set(launches.map(item => item[value]))]
}

const LauchFilter = () => {
    return (
        <Consumer>
            { value => {
                const { launches_list, handleChange, year } = value;

                // get unique years
                let years = getUnique(launches_list, 'launch_year');
                years = ['all', ...years];
                // map to jsx
                years = years.map((item, index) => {
                    return <option value={item} key={index}>{item}</option>
                })

                return(
                    <div className='container my-5'>
                    <h2 className="text-center text-light">Search For Launches</h2>
                    {/* select year */}
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Select Year</label>
                            <select name='year' className="form-control" id='name' value={year} onChange={handleChange}>
                                {years}
                            </select>
                        </div>
                        </form>
                    {/* end of select year  */}
                </div>
                )
            }}

        </Consumer>
    )
}

export default LauchFilter
