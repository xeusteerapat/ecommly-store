import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Store from "./components/Store";
import UserPage from "./components/UserPage";
import Verify from "./components/Verify";

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
          <Switch>
            <Route path='/user' exact>
              <UserPage />
            </Route>
          </Switch>
          <Switch>
            <Route path='/signup' exact>
              <Signup />
            </Route>
          </Switch>
          <Switch>
            <Route path='/signin' exact>
              <Signin />
            </Route>
          </Switch>
          <Switch>
            <Route path='/verify' exact>
              <Verify />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
