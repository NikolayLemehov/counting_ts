import React from 'react';
// import OperationList from "./components/OperationList";
import ListTable from "./components/ListTable";
import {Container} from "@mui/material";
import MyForm from "./components/MyForm/MyForm";
// import OperationList from "./components/OperationList";
// import {Paper, TextField} from "@mui/material";
// import UserList from "./components/UserList";

function App() {
  return (
    <Container>
      <MyForm/>
      {/*<TextField/>*/}
      {/*<Paper />*/}
      <ListTable/>
      {/*<OperationList/>*/}
    </Container>
  );
}

export default App;
