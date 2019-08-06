import React from 'react';




class ViewClimb extends React.Component {

             
  render(){
    return(
      <div className="label">
      <form >
        <div className="form-row">
          <div className="form-group col-sm-6">
            <select 
              id="inputState" 
              class="form-control" 
              >
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