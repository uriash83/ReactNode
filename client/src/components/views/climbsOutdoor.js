import React from 'react';



const ClimbsOutdoor = (props) => {

  
  return(
    <div>
             <table class="table table-bordered table-hover table-secondary table-sm table-striped">
                <caption>Total: {props.data.length}</caption>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Climb</th>
                        <th scope="col">Route</th>
                        <th scope="col">LOC</th>
                        <th scope="col">Diff</th>
                        <th scope="col">Name</th>
                        <th scope="col">Dur</th>
                        <th scope="col">Crew</th>
                        <th scope="col">Comment</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.map((route) => (
                        <tr  key={route._id}>
                        <th scope="row">1</th>
                            <td>{route.dateLog}</td>
                            <td>{route.typeLogClimbs}</td>
                            <td>{route.styleRoute}</td>
                            <td>{route.locationRoute[0].moutains}</td>
                            <td>{route.difficulty}</td>
                            <td>{route.name}</td>
                            <td>{route.duration}</td>
                            <td>{route.crew}</td>
                            <td>{route.comment}</td>
                        </tr>
                    ))}                      
                        
                    </tbody>
                </table>
            </div>
)
};

export default ClimbsOutdoor;