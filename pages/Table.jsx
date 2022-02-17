import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ModalTop from "./ModalTop";

function MainTable() {
  const [personName, setPersonName] = React.useState('reboot');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const handleChange = (event) => {
    setPersonName(event.target.value)
   
  };
  const names = [
    "reboot",
    " execute command",
    "  reconnecting modem",
    " view modem configuration",
    "open interactive shell",
    "view ip hi story",
  ];
  const rows = [
    createData("poad1", "2h", "x.x.x.x.x", "view"),
    createData("poad2", "2h", "x.x.x.x.x", "view"),
    createData("poad3", "2h", "x.x.x.x.x", "view"),
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div className="container">
        <h1>Devices</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>name</StyledTableCell>
                <StyledTableCell align="center">upb Times</StyledTableCell>

                <StyledTableCell align="right">current ip</StyledTableCell>
                <StyledTableCell align="center">CPU status</StyledTableCell>
                <StyledTableCell align="center">actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="center"  style={{cursor:"pointer"}} onClick={handleOpen}>{row.carbs}</StyledTableCell>

                  <StyledTableCell align="center">
                    {" "}
                    <FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-name-label">
                        actions
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ModalTop open={open} Close={handleClose}/>
      </div>
    </div>
  );
}

export default MainTable;
