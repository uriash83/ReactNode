import './climb.css';
import React from 'react';
import axios from 'axios';





class ViewClimb extends React.Component {


state = {
  value1: '1',
  value2: '2',
  data: []
};

componentDidMount(){
  axios.get('http://localhost:36531/getdata',{})
      //.then((data) => data.json())
      .then((res) => {
        this.setState({ data: res.data.data })
        console.log(res.data.data)
      }
      );
}

//handleChange = this.handleChange.bind(this);
handleSubmit = this.handleSubmit.bind(this);
// bez tego wyżej nie działa console.log() w funcji handleChange    
//handleChange(event) {
//    this.setState({value: event.target.value});
//    console.log("State: "+ this.state.value)
//}

handleSubmit(event) {

    axios.get('http://localhost:36531/getdata',{})
      //.then((data) => data.json())
      .then((res) => {
        this.setState({ data: res.data.data })
        console.log(res.data.data)
      }
      );
    
    
    console.log('Your favorite flavor is: ' + this.state.value1, " and "+ this.state.value2);
    event.preventDefault();
}
             
  render(){
    const { data } = this.state;
    return(
      /* container-fluid - żeby zawartość była na całą szerokość w kontenerze , 
      float-lef - zawartość wyrównana do lewej


      
      
      */
      <div className="container-fluid float-left"> 
      
        <div>   
          <ul>
            {data.length <= 0
              ? 'NO DB ENTRIES YET'
              : data.map((dat) => (
                  <li style={{ padding: '10px' }} key={data._id}>
                    <span style={{ color: 'gray' }}> typeRoute: </span> {dat.typeRoute} <br />
                    <span style={{ color: 'gray' }}> locationRoute: </span>{dat.locationRoute} <br />
                    <span style={{ color: 'gray' }}> difficulty: </span>{dat.difficulty} <br />
                  </li>
                ))}
          </ul>
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