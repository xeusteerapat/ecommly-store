import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

const App = () => {
  return (
    <Container>
      <Box>
        <Navbar />
        <Store />
      </Box>
    </Container>
  );
};

export default App;
