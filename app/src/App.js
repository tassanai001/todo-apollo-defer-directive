import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import gql from "graphql-tag";
import Todo from "./container/Todo";


import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


client
  .query({
    query: gql`
      {
        books {
          title
          author
        }
      }
    `
  })
  .then(result => console.log('FUCK:-->', result))
  .catch(err => console.log('Error:--> ', err));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <Todo />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
