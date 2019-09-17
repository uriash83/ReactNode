import React from 'react'
/*
const ClimbsIndoor = (props) => {
    console.log(props.data.length)

    return (
        <div>
            
            
                dsaf {props.data.length} ffdsa
        </div>
    )
}



<table class="table table-bordered table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
                </table>


                ************************************



<table class="table table-bordered table-hover table-secondary table-sm table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Climb</th>
                        <th scope="col">Route</th>
                        <th scope="col">Loc</th>
                        <th scope="col">Diff</th>
                        <th scope="col">Style</th>
                        <th scope="col">Comment</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((route) => (
                        <tr>
                        <th scope="row">1</th>
                            <td>{route.dateLog}</td>
                            <td>{route.typeClimbing}</td>
                            <td>{route.typeRoute}</td>
                            <td>{route.locationRoute}</td>
                            <td>{route.difficulty}</td>
                            <td>{route.styleClimbing}</td>
                            <td>{route.comment}</td>
                        </tr>
                    ))}                      
                        
                    </tbody>
                </table>
                <h1>climb{this.props.data.length}</h1>                
*/
const ClimbsIndoor =(props) => {

    
    

    
        return (
            <div>
               Climb Indoor  
               <table class="table table-bordered table-hover table-secondary table-sm table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Climb</th>
                        <th scope="col">Route</th>
                        <th scope="col">Loc</th>
                        <th scope="col">Diff</th>
                        <th scope="col">Style</th>
                        <th scope="col">Comment</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.map((route) => (
                        <tr>
                        <th scope="row">1</th>
                            <td>{route.dateLog}</td>
                            <td>{route.typeClimbing}</td>
                            <td>{route.typeRoute}</td>
                            <td>{route.locationRoute}</td>
                            <td>{route.difficulty}</td>
                            <td>{route.styleClimbing}</td>
                            <td>{route.comment}</td>
                        </tr>
                    ))}                      
                        
                    </tbody>
                </table>
                <h1>climb{props.data.length}</h1>
            </div>
        )        
    
};

export default ClimbsIndoor;