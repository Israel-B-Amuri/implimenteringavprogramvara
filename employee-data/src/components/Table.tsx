
import React from 'react'
import employees from '../../employees .json'
import { styled } from '@mui/material/styles';
import {Table ,TableBody,TableCell,tableCellClasses,TableContainer ,TableHead,TableRow ,Paper} from '@mui/material'

export default function TableElement(){
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    
return(
  <TableContainer sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
  <Table sx={{ width: '90%' ,marginTop:'2rem',}} aria-label="customized table"  stickyHeader>
    <TableHead>
      <TableRow>
        <StyledTableCell align='center'>Id</StyledTableCell>
        <StyledTableCell align="center">Firstname</StyledTableCell>
        <StyledTableCell align="center">Lastname</StyledTableCell>
        <StyledTableCell align="center">Position</StyledTableCell>
        <StyledTableCell align="center">Department</StyledTableCell>
        <StyledTableCell align="center">Email</StyledTableCell>
        <StyledTableCell align="center">Phone Number</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {employees.map((employee) => (
        <StyledTableRow key={employee.id + employee.firstName}> 
          <StyledTableCell align="center">{employee.id}</StyledTableCell>
          <StyledTableCell component="th" scope="row">
            {employee.firstName}
          </StyledTableCell>
          <StyledTableCell align="center">{employee.lastName}</StyledTableCell>
          <StyledTableCell align="center">{employee.position}</StyledTableCell>
          <StyledTableCell align="center">{employee.department}</StyledTableCell>
          <StyledTableCell align="center">{employee.email}</StyledTableCell>
          <StyledTableCell align="center">{employee.phoneNumber}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
)
}