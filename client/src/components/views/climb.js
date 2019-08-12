import './climb.css';
import React from 'react';




class ViewClimb extends React.Component {


state = {value1: '1',value2: '2'};
    
//handleChange = this.handleChange.bind(this);
handleSubmit = this.handleSubmit.bind(this);
    
//handleChange(event) {
//    this.setState({value: event.target.value});
//    console.log("State: "+ this.state.value)
//}

handleSubmit(event) {
    console.log('Your favorite flavor is: ' + this.state.value1, " and "+ this.state.value2);
    event.preventDefault();
}
             
  render(){
    return(
      <div className="label">
      <form onSubmit={this.handleSubmit}>
        <div className="form-row rowLabel">
          <div className="form-group col-sm-2">
            <select 
              id="inputState" 
              class="form-control"
              value={this.state.value1} 
              onChange={e => {this.setState({value1: e.target.value}); console.log('State: '+this.state.value1)}}>
              <option selected>Difficulty</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary"  >Szukaj</button>
      </form>
    </div>
    );
  }
}

export default ViewClimb;