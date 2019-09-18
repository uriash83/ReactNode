import React from 'react';
import './climbNewItemModal.css';

const climbNewItemModal = (props) => {

    return (
        <div>

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

            <div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
                <div className="modal-content myclassWidth">
                        <select  className='myclassPadding'
                            defaultValue="1"
                            id="inputState"
                            class="form-control-sm"
                            value={props.input1}
                        //onChange={e =>console.log('State: ')}
                        >

                            <option>1</option>
                            <option>2</option>
                        </select>

                        <select
                            defaultValue="12"
                            id="inputState"
                            class="form-control-sm"
                            value={props.input2}
                            onChange={e => console.log('State: ')}>

                            <option>4</option>
                            <option>5</option>
                        </select>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div>
                        
                </div>
            </div>
            </div>
        </div>
    )
}

export default climbNewItemModal;

