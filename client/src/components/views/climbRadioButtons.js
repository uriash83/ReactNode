import React from 'react'


const climbRadioButton = (props) => {


        return(
            <div className="p-4 ">
                <div className="container fluid-center">
                    <div className="custom-control custom-radio custom-control-inline">
                        <input 
                            type="radio" 
                            id="customRadioInline1" 
                            name="customRadioInline1" 
                            className="custom-control-input"
                            checked={props.radio} 
                            onChange={
                                props.handleRadioButton
                        }/>
                        <label className="custom-control-label" htmlFor="customRadioInline1">
                                <span className="text-light">Climb Indoor</span>
                        </label>
                    </div>


                    <div className="custom-control custom-radio custom-control-inline">
                        <input 
                            type="radio" 
                            id="customRadioInline2" 
                            name="customRadioInline1" 
                            className="custom-control-input"
                            checked={!props.radio} 
                            onChange={
                            props.handleRadioButton
                            }
                            />
                        <label className="custom-control-label" htmlFor="customRadioInline2">
                            <span className="text-light">Climb Outdoor</span>
                        </label>
                    </div>
                </div>     

                


            </div>
        );
    }




export default climbRadioButton;