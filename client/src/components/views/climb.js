import './climb.css';
import React from 'react';
import axios from 'axios';
import ClimbsOutdoor from './climbsOutdoor'
import ClimbsIndoor from './climbsIndoor'
import ClimbRadioButton from './climbRadioButtons'
import ClimbNewItemModal from './climbNewItemModal'
//import ClimbTemp from './climbTemp'
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





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
  },
  
  IndoorDate: new Date(),
  IndoorClimb: '',
  IndoorRoute: '',
  IndoorLocation: '',
  IndoorDifficulty: '',
  IndoorStyle: '',
  IndoorComment: ''
  
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

handleSubmitPost(event) {
  
  console.log('Post=> Date: ' + this.state.IndoorDate 
      + 'Climb: ' + this.state.IndoorClimb
    )
   axios.post('http://localhost:36531/climbIndoor/post',{
      date: this.state.IndoorDate,
      climb: this.state.IndoorClimb,
      route: this.state.IndoorRoute,
      locationRoute: this.state.IndoorLocation,
      difficulty: this.state.IndoorDifficulty,
      styleClimbing: this.state.IndoorStyle,
      comment: this.state.IndoorComment
   }).then((res)=>{
    console.log(res)
   })
   this.setState({
     IndoorDate: new Date(),
     IndoorClimb: '',
     IndoorRoute: '',
     IndoorLocation: '',
     IndoorDifficulty: '',
     IndoorStyle: '',
     IndoorComment: ''

   })
   event.preventDefault();
}
handleOnChangeNewPostIndoorDate = date => {
  this.setState({
    IndoorDate: date
  });
  console.log("Date: " + date)
};

handleOnChangeNewPostIndoor(event) {

  console.log("eventNanme: " +event.target.name +" eventValue: " + event.target.value + ' state: ' +this.state.IndoorClimb)
  const targetState= event.target.name;
  const valueState = event.target.value;
  //switch (event.target.name) {
    //case ('IndoorClimb'):
      //var dataSendToServerIndoor = {...this.state.dataSendToServerIndoor};
      //dataSendToServerIndoor.climb = event.target.value;
      //this.setState({dataSendToServerIndoor});
      this.setState({[targetState]: valueState});
      
    
  //}
  //console.log("eventNanme: " +event.target.name +" eventValue: " + event.target.value + ' state: ' +this.state.dataSendToServerIndoor.climb) 
}


handleOptionChange (event) {
  this.setState({radioCheckedTypeClimb: !this.state.radioCheckedTypeClimb})
  this.handleClimbTypeTable(this.state.radioCheckedTypeClimb);  
  //console.log('RADIO ' + this.state.radioCheckedTypeClimb)
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
         
          {/*<ClimbTemp 
            IndoorDateTemp={this.state.IndoorDate}
            handleOnChangeDate={this.handleOnChangeNewPostIndoorDate.bind(this)}
          />*/}
         <ClimbNewItemModal 
            handleOnChangeDate={this.handleOnChangeNewPostIndoorDate.bind(this)}
            handleOnChangeItem={this.handleOnChangeNewPostIndoor.bind(this)}
            handleSwitchButton={this.handleSwitchButtonType.bind(this)}
            handleSubmitNewPost={this.handleSubmitPost.bind(this)}            
            IndoorDateItem={this.state.IndoorDate}
            IndoorRouteItem={this.state.IndoorRoute}
            IndoorLocationItem={this.state.IndoorLocation}
            IndoorDifficultyItem={this.state.IndoorDifficulty} 
            IndoorStyleItem={this.state.IndoorStyle}          
            IndoorCommentItem={this.state.IndoorComment}
            switchState={this.state.switchButtonNewItem}
          />
            
         
            
        
          
          
        </div>
      </div>
    );
  }
}

export default ViewClimb;