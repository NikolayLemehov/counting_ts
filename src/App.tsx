import React from 'react';
import ListTable from "./components/ListTable";
import {Container} from "@mui/material";
import MyForm from "./components/MyForm/MyForm";

function App() {
  return (
    <Container>
      <h1>Counting (TypeScript)</h1>
      <MyForm/>
      <ListTable/>
    </Container>
  );
}

export default App;
