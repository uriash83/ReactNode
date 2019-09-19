import React from 'react';
import './climbNewItemModal.css';

const climbNewItemModal = (props) => {

    
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
                        onClick={props.handleSwitchButton}>
                        {props.switchState ? "Swtich to Indoor":"Swich to Outdor" }
                    </button>
                </div>
                <div class="modal-body">
                {props.switchState 
                ? 
                //OUTDOOR
                    <div className="container">
                        <h6>Outdoor</h6>
                        <form>
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
                            </div>
                        </div>
                            <button type="submit" class="btn btn-success"  >Submit</button>
            
                        </form>
                    </div>
                : 
                //INDOOR
                    <div className="container">
                        Indoor

                        <form>
                        <div className="form-row rowLabel myclassWidth">
                        <div className="form-group col-md-7">
                            <select className="form-control"
                            defaultValue="1"
                            id="inputState" 
                            class="form-control"
                            //value={this.state.value1} 
                            //onChange={e => {this.setState({value1: e.target.value}); console.log('State: '+this.state.value1)}}
                            >
                            <option selected>Difficulty</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            </select>
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
    )
}

export default climbNewItemModal;

