import './climb.css';
import React from 'react';
import axios from 'axios';
import ClimbsOutdoor from './climbsOutdoor'
import ClimbsIndoor from './climbsIndoor'
import ClimbRadioButton from './climbRadioButtons'
import ClimbNewItemModal from './climbNewItemModal'





class ViewClimb extends React.Component {


state = {
  value1: '1',
  value2: '2',
  data: [],
  dataIndoor: [],
  dataOutdoor: [],
  radioCheckedTypeClimb: true,
  switchButtonNewItem: true,
  dataNewItem: {
    input1: 4,
    input2: 5
  }
};



componentDidMount(){

  this.handleClimbTypeTable(this.state.radioCheckedTypeClimb);
  console.log('NEW ' + this.state.dataNewItem.input1)
  
}
/*
<form onSubmit={this.handleSubmit}>
            <div className="form-row rowLabel">
              <div className="form-group col-sm-2">
                <select 
                  defaultValue="1"
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
*/
//handleChange = this.handleChange.bind(this);
handleSubmit = this.handleSubmit.bind(this);
handleOptionChange = this.handleOptionChange.bind(this);
handleSwitchButtonType = this.handleSwitchButtonType.bind(this);
//handleClimbTypeTable = this.handleClimbTypeTable.bind(this);
// bez tego wyżej nie działa console.log() w funcji handleChange    
//handleChange(event) {
//    this.setState({value: event.target.value});
//    console.log("State: "+ this.state.value)
//}
handleClimbTypeTable = (radio) => {
  console.log("From hndle" + radio)
  if(!radio){
    axios.get('http://localhost:36531/climbIndoor/get',{})
      //.then((data) => data.json())
      .then((res) => {
        this.setState({ dataIndoor: res.data.data })
        console.log(res.data.data)
      }
      );
      console.log('Checked: ' +this.state.radioCheckedTypeClimb);
  }
  else{
    axios.get('http://localhost:36531/climbOutdoor/get',{})
      //.then((data) => data.json())
      .then((res) => {
        this.setState({ dataOutdoor: res.data.data })
        console.log(res.data.data)
      }
      );
      console.log('Checked: ' +this.state.radioCheckedTypeClimb);
  }
}

handleSubmit(event) {

    axios.get('http://localhost:36531/climbIndoor/get',{})
      //.then((data) => data.json())
      .then((res) => {
        this.setState({ data: res.data.data })
        //console.log(res.data.data)
      }
      );
    
    
    console.log('Your favorite flavor is: ' + this.state.value1, " and "+ this.state.value2);
    event.preventDefault();
}
handleOptionChange (event) {
  this.setState({radioCheckedTypeClimb: !this.state.radioCheckedTypeClimb})
  this.handleClimbTypeTable(this.state.radioCheckedTypeClimb);  
  console.log('RADIO ' + this.state.radioCheckedTypeClimb)
 // event.preventDefault();
}

handleSwitchButtonType (event) {
  this.setState({switchButtonNewItem: !this.state.switchButtonNewItem})
  console.log('Swtich  ' + this.state.switchButtonNewItem)
}


             
  render(){
    
    return(
      <div className="container-fluid float-left">
        <ClimbRadioButton 
          radio={this.state.radioCheckedTypeClimb}
          text={"Text"}
          handleRadioButton={this.handleOptionChange.bind(this)} // pass call function do child
        />
     
        <div className="container-fluid float-left">

          {this.state.radioCheckedTypeClimb ? 
            <ClimbsIndoor data={this.state.dataIndoor}/> : 
            <ClimbsOutdoor data={this.state.dataOutdoor}/> }
         
         <ClimbNewItemModal 
            switchState={this.state.switchButtonNewItem}
            handleSwitchButton={this.handleSwitchButtonType.bind(this)}/>
        
         
            
        
          
          
        </div>
      </div>
    );
  }
}

export default ViewClimb;