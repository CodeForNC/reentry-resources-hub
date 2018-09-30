import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import CountiesIndex from './CountiesIndex';

const client = new ApolloClient({
  // TODO: ACTUAL URL
  uri: "http://localhost:4000/graphql"
});



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router basename="/reentry-resources-hub">
          <div className="App">
            <header className="site-header">
              <div className="header-background-image">
                <div className="title-box">
                  NC Reentry Resources Hub
                </div>
              </div>
              <nav></nav>
            </header>
            <main className="content-body">
              <Switch>
                <Route path="/" component={CountiesIndex}/>
                <Route path="/:county" component={CountiesIndex} />
                <Route path="/contact" component={CountiesIndex} />
              </Switch>
            </main>
            <footer className="site-footer">
              <p>© 2016 All Rights Reserved.</p>
              <p>Legal Disclaimer: The site DOES NOT provide any legal advice, only information. Users of this web site should consult with their own lawyer for legal advice.</p>
              <p>Content provided by this web site and any linked sites is not necessarily an endorsement and the administrators of this site do not assume any responsibility for the interpretation or application of any information originating from such sites.</p>
            </footer>
          </div>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;