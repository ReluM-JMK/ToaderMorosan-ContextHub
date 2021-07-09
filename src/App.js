import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './Components/Home';
import {AddBrand} from './Components/AddBrand';
import {EditBrand} from './Components/EditBrand';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message,location,path}) =>{
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://lively-darkness.eu-central-1.aws.cloud.dgraph.io/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{maxWidth:"30rem", margin:"4rem auto"}}>
        <Router>
          <Switch>
            <Route exact  path="/" component={Home} />
            <Route path="/AddBrand" component={AddBrand} />
            <Route path="/edit/:id" component={EditBrand} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
