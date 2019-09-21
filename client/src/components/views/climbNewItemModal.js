import React from 'react';
import DatePicker from "react-datepicker";
import './climbNewItemModal.css';
import "react-datepicker/dist/react-datepicker.css";

class climbNewItemModal extends React.Component {

   
    render(){
        
        const difficultyTable=['III','IV','V-','V','V+','VI-','VI','VI+','VI.1-','VI.1','VI.1+',
                                'VI.2-','VI.2','VI.2+','VI.3-','VI.3','VI.3+']
        const locationTable=['Makak','Murall','On-Sight','Stacja Grawitacja']
        return (
            <div>

                <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-modal-sm">NEW</button>

                <div className="modal fade bd-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content container-fluid">
                    <div class="modal-header justify-content-center">        
                        <button
                            //type="button" 
                            class="btn btn-dark" 
                            onClick={this.props.handleSwitchButton}>
                            {this.props.switchState ? "Swtich to Indoor":"Swich to Outdor" }
                        </button>
                    </div>
                    <div class="modal-body">
                    {this.props.switchState 
                    ? 
                    //OUTDOOR
                        <div className="container">
                            <h6>Outdoor</h6>
                            <form 
                                name="contact" 
                                action="/" 
                                method="post"
                                onSubmit={this.props.handleSubmitNewPost}>
                            <div className="form-row rowLabel myclassWidth">
                                <div className="form-group col-md-7">
                                {/* DATE */}
                                    <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    //value={this.state.value1} 
                                    //onChange={e => {this.setState({value1: e.target.value}); console.log('State: '+this.state.value1)}}
                                    >
                                    <option selected>Date</option>                                
                                    </select>
                                    {/* CLIMB */}
                                    <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    //value={this.state.value1} 
                                    //onChange={e => {this.setState({value1: e.target.value}); console.log('State: '+this.state.value1)}}
                                    >
                                    <option selected>Climb</option> 
                                    <option>Wspin</option>
                                    <option>Skały</option>
                                    <option>Baldy</option>                               
                                    </select>
                                    {/* Route */}
                                    <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    //value={this.state.value1} 
                                    //onChange={e => {this.setState({value1: e.target.value}); console.log('State: '+this.state.value1)}}
                                    >
                                    <option selected>Route</option> 
                                    <option>OS</option>
                                    <option>Wędka</option>
                                    <option>RP</option> 
                                    <option>Attempt</option> 
                                    <option>Klasycznie</option>                             
                                    </select>
                                    {/* LOCATION */}
                                    <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    //value={this.state.value1} 
                                    //onChange={e => {this.setState({value1: e.target.value}); console.log('State: '+this.state.value1)}}
                                    >
                                    <option selected>Location</option> 
                                    <option>Tatry</option>
                                    <option>MałaFatra</option>
                                    <option>Alpy</option> 
                                    <option>Jura</option> 
                                                                
                                    </select>
                                    {/* DIFFICULTY */}
                                    <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    //value={this.state.value1} 
                                    //onChange={e => {this.setState({value1: e.target.value}); console.log('State: '+this.state.value1)}}
                                    >
                                    <option selected>Difficulty</option> 
                                    {difficultyTable.map(
                                        diff=> <option>{diff}</option>
                                    )}
                                    
                                                                                                
                                    </select>
                                    {/* NAME */}
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        placeholder="name"/>
                                    {/* DURATION */}
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        placeholder="Duration"/>
                                    {/* CREW */}
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        placeholder="Crew"/>
                                    {/* COMMENT */}
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        placeholder="Comment"/>
                                </div>
                            </div>
                                <button type="submit" class="btn btn-success"  >Submit</button>
                
                            </form>
                        </div>
                    : 
                    //INDOOR
                        <div className="container">
                            Indoor

                            <form 
                                name="contact" 
                                action="/" 
                                method="post"
                                onSubmit={this.props.handleSubmitNewPost}>
                            <div className="form-row rowLabel myclassWidth">
                            <div className="form-group col-md-7">
                                {/* DATE 
                                <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    name="IndoorDate"
                                    value={props.date} 
                                    onChange={props.handleOnChangeItem}
                                    >
                                    <option selected>Date</option>                                
                                </select>
                                */}
                                <DatePicker
                                    placeholderText="Click to select a date"
                                    dateFormat="yyyy/MM/dd"
                                    selected={this.props.IndoorDateItem}       
                                    onChange={this.props.handleOnChangeDate}                      
                                />
                                {/* CLIMB */}
                                <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    name="IndoorClimb"
                                    class="form-control"
                                    value={this.props.IndoorClimbItem} 
                                    onChange={this.props.handleOnChangeItem}
                                    >
                                    <option selected>Climb</option> 
                                    <option>Ścianka</option>
                                    <option>Baldy</option>                               
                                </select>
                                {/* Route */}
                                <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    name="IndoorRoute"
                                    class="form-control"
                                    value={this.props.IndoorRouteItem} 
                                    onChange={this.props.handleOnChangeItem}
                                    >
                                    <option selected>Route</option>
                                    <option>Wędka</option>
                                    <option>Lead</option>                            
                                </select>
                                {/* LOCATION */}
                                <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    name="IndoorLocation"
                                    value={this.props.IndoorLocationItem} 
                                    onChange={this.props.handleOnChangeItem}
                                    >
                                    <option selected>Location</option> 
                                    {locationTable.map(
                                        loc=><option>{loc}</option>
                                    )}                               
                                </select>
                                {/* DIFFICULTY */}
                                <select  className="form-control"
                                    defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    name="IndoorDifficulty"
                                    value={this.props.IndoorDifficultyItem} 
                                    onChange={this.props.handleOnChangeItem}
                                    >
                                    <option selected>Difficulty</option> 
                                    {difficultyTable.map(
                                        diff=> <option>{diff}</option>
                                    )}
                                                                                                
                                </select>
                                {/* STYLE */}
                                <select  className="form-control"
                                    //defaultValue="1"
                                    id="inputState" 
                                    class="form-control"
                                    name="IndoorStyle"
                                    value={this.props.IndoorStyleItem} 
                                    onChange={this.props.handleOnChangeItem}
                                    >
                                    <option selected>Style</option> 
                                    <option>OS</option>
                                    <option>Attempt</option>
                                    <option>Repeat</option>
                                                                                                
                                </select>
                                {/*COMMENT */}
                                <input 
                                    class="form-control" 
                                    type="text" 
                                    placeholder="Comment"
                                    name="IndoorComment"
                                    value={this.props.IndoorCommentItem} 
                                    onChange={this.props.handleOnChangeItem}
                                />
                            </div>
                            </div>
                                <button type="submit" class="btn btn-success"  >Submit</button>
                
                            </form>
                        </div>
                    }
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-danger " data-dismiss="modal">Cancel</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }                   
}

export default climbNewItemModal;

