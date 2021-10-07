import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Store from "./components/Store";

const App = () => {
  return (
    <Router>
      <Container>
        <Box>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <Store />
            </Route>
            <Route
              exact
              path='/products/:productId'
              render={props => (
                <ProductPage productId={props.match.params.productId} />
              )}
            ></Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
