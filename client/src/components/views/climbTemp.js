import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ClimbTemp extends React.Component {


    render() {



        return(
            <div>
                <DatePicker
                    selected={this.props.IndoorDateTemp}       
                    onChange={this.props.handleOnChangeDate}                      
                />
            </div>
        );
    }
}

export default ClimbTemp;