import React, { Component } from 'react';
import axios from 'axios';


export class FirstComponent extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         persons: []
      }
    }
    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(response => {
            const persons = response.data;
            this.setState({ persons });
          })
    }
  
  
    render() {
        return (
            <ul>
                {
                this.state.persons
                    .map(person =>
                    <li key={person.id}>{person.name}</li>
                    )
                }
            </ul>
        ) 
        
    }
}

export default FirstComponent;
