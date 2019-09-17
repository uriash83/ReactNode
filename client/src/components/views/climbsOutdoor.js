import React from 'react';

/*
<table class="table table-bordered table-hover table-secondary table-sm table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Climb</th>
                        <th scope="col">Route</th>
                        
                        <th scope="col">Diff</th>
                        <th scope="col">Name</th>
                        <th scope="col">Dur</th>
                        <th scope="col">Crew</th>
                        <th scope="col">Comment</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.map((route) => (
                        <tr>
                        <th scope="row">1</th>
                            <td>{route.dateLog}</td>
                            <td>{route.typeLogClimbs}</td>
                            <td>{route.styleRoute}</td>
                            
                            <td>{route.difficulty}</td>
                            <td>{route.name}</td>
                            <td>{route.duration}</td>
                            <td>{route.crew}</td>
                            <td>{route.comment}</td>
                        </tr>
                    ))}                      
                        
                    </tbody>
                </table>
                <h1>climb{props.data.length}</h1>
*/

const ClimbsOutdoor = (props) => {

  
  return(
    <div>
             Climb outdoor
             <table class="table table-bordered table-hover table-secondary table-sm table-striped">
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
                        <tr>
                        <th scope="row">1</th>
                            <td>{route.dateLog}</td>
                            <td>{route.typeLogClimbs}</td>
                            <td>{route.styleRoute}</td>
                            <td>"LOC"</td>
                            <td>{route.difficulty}</td>
                            <td>{route.name}</td>
                            <td>{route.duration}</td>
                            <td>{route.crew}</td>
                            <td>{route.comment}</td>
                        </tr>
                    ))}                      
                        
                    </tbody>
                </table>
                <h1>climb{props.data.length}</h1>
            </div>
)
};

export default ClimbsOutdoor;