import React, { Component }  from "react";
import { Link } from "react-router-dom"

class InnerPage extends Component {
    
  constructor() {
    super();
    this.state = {
      people: [],
      isLoading : false
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=500")
      .then(results => results.json())
      .then(data => this.setState({ people: data.results }));
  }

  render() {
    console.log(this.state);
    return (
        
      <div className="App" >
    <Link to="/">
        <button className="LogOut">Logout</button>
    </Link>
   <div className="body">
            {this.state.people.map(person => (
              <><div className="divname">{person.name.first + " " + person.name.last}
              <div className="divimg"><img  className ="img" src={person.picture.thumbnail} /></div></div></>
            ))}

            </div>
      </div>
    );
  }
}

export default InnerPage;