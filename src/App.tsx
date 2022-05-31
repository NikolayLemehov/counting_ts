import React from 'react';
import ListTable from "./components/ListTable";
import {Container, Stack, Typography} from "@mui/material";
import MyForm from "./components/MyForm/MyForm";

function App() {
  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h4" component="div">Counting (TypeScript)</Typography>
        <MyForm/>
        <ListTable/>
      </Stack>
    </Container>
  );
}

export default App;
