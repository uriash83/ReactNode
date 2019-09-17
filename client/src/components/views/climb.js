import './climb.css';
import React from 'react';
import axios from 'axios';
import ClimbsOutdoor from './climbsOutdoor'
import ClimbsIndoor from './climbsIndoor'




class ViewClimb extends React.Component {


state = {
  value1: '1',
  value2: '2',
  data: [],
  dataIndoor: [],
  dataOutdoor: [],
  radioCheckedTypeClimb: true
};



componentDidMount(){

  this.handleClimbTypeTable(this.state.radioCheckedTypeClimb);
  
  
}

//handleChange = this.handleChange.bind(this);
handleSubmit = this.handleSubmit.bind(this);
handleOptionChange = this.handleOptionChange.bind(this);
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


             
  render(){
    //const { data } = this.state;
    return(
      
       
      <div className="container-fluid float-left"> 
        <div className="container">
          <div class="custom-control custom-radio custom-control-inline">
            <input 
              type="radio" 
              id="customRadioInline1" 
              name="customRadioInline1" 
              class="custom-control-input"
              //value="Indoor"
              checked={this.state.radioCheckedTypeClimb} 
              onChange={
                this.handleOptionChange
                //console.log('RADIO'+this.state.radioCheckedTypeClimb)
              }/>
          <label class="custom-control-label" for="customRadioInline1">Climb Indoor</label>
          </div>


          <div class="custom-control custom-radio custom-control-inline">
            <input 
                type="radio" 
                id="customRadioInline2" 
                name="customRadioInline1" 
                class="custom-control-input"
                //value="Outdoor"
                checked={!this.state.radioCheckedTypeClimb} 
                onChange={
                  this.handleOptionChange
                  //console.log('RADIO'+this.state.radioCheckedTypeClimb)
                }
                />
            <label class="custom-control-label" for="customRadioInline2">Climb Outdoor</label>
          </div>
        </div>  
      <div>
        {this.state.radioCheckedTypeClimb ? <ClimbsIndoor data={this.state.dataIndoor}/> : <ClimbsOutdoor data={this.state.dataOutdoor}/> }
        Text: + {this.state.radioCheckedTypeClimb ? 'true' : "false"}
      </div>
     
      
        
         
        
        
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