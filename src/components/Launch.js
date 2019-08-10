import React from 'react'

const Launch = props => {
    const { launch } = props;
    // console.log(launch);
    return (
            <div className="card mb-3 m-2 text-light m-3">
                <div className="row">
                    <div className="col-sm-4">
                    <img src={launch.links.mission_patch_small} className="card-img img-fluid p-5" alt='mission_logo' />
                    </div>
                    <div className="col-sm-8">
                    <div className="card-body">
                        <h4 className="card-title font">{launch.mission_name}</h4>
                        <h4 className='text-warning'>{launch.launch_year}</h4>
                        <p className="lead">{launch.details}</p>
                        Successfully Launched:{' '}
                            {
                                launch.launch_success === true ? <i className="fas fa-check text-success fa-2x"></i> : <i className="fas fa-ban text-danger fa-2x"></i>
                            }
                        <div className="text-center">
                        <a href={launch.links.wikipedia} target='blank' className="btn btn-outline-warning mt-5 px-5">Wikipedia</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
     
    )
}

export default Launch
