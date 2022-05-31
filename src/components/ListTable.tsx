import React, {useEffect} from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Box,
  Stack,
  Tooltip,
  IconButton
} from "@mui/material";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const ListTable: React.FC = () => {
  const {operations, loading, error} = useTypedSelector(state => state.operation)
  const {fetchOperations, updateOperation, deleteOperation, resetError} = useActions()
  useEffect(() => {
    fetchOperations()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}<button onClick={() => resetError()}>Reset Error</button></h1>
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {operations.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="td">{row.date}</TableCell>
                <TableCell component="td" align="right">{row.value}</TableCell>
                <TableCell component="td" align="right">
                  {row.total}
                </TableCell>
                <TableCell align="right">
                  <Box>
                    <Stack direction="row" sx={{justifyContent: "flex-end"}} spacing={1}>
                      <Tooltip title="Refresh date-time edition">
                        <IconButton
                          color="primary"
                          onClick={() => updateOperation(row.id)}
                          disabled={row.editBtnLoading}
                        >
                          <EditIcon/>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          color="error"
                          onClick={() => deleteOperation(row.id)}
                          disabled={row.delBtnLoading}
                        >
                          <DeleteIcon/>
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListTable;