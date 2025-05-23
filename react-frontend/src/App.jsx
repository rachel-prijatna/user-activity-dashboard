import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Box,
  TextField,
  MenuItem,
  Button,
  useTheme
} from "@mui/material";

function App({ toggleColorMode, mode }) {
  const theme = useTheme();

  const [users, setUsers] = useState([]);
  const [mfaFilter, setMfaFilter] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:8080/api/users")
      .then(res => {
        const today = new Date();
        const enriched = res.data.map(user => ({
          ...user,
          daysSincePasswordChange: Math.floor((today - new Date(user.passwordChangedDate)) / (1000 * 60 * 60 * 24)),
          daysSinceLastAccess: Math.floor((today - new Date(user.lastAccessDate)) / (1000 * 60 * 60 * 24)),
        }));
        setUsers(enriched);
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  const filteredUsers = users.filter(user => {
    if (mfaFilter === "All") return true;
    if (mfaFilter === "Yes") return user.mfaEnabled;
    if (mfaFilter === "No") return !user.mfaEnabled;
    return true;
  });

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        overflow: 'auto'
      }}
    >
      <Container maxWidth="lg">
        {/* Mode Toggle */}
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              letterSpacing: 1
            }}
          >
            User Activity
          </Typography>

          <Button onClick={toggleColorMode} variant="outlined">
            Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Box>

        {/* MFA Filter */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <TextField
            select
            label="Filter MFA"
            value={mfaFilter}
            onChange={(e) => setMfaFilter(e.target.value)}
            size="small"
            sx={{
              minWidth: 150,
              backgroundColor: mode === 'light' ? '#fff' : '#1e1e1e',
              borderRadius: 1,
              color: theme.palette.text.primary
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Box>

        {/* User Table */}
        <TableContainer
          component={Paper}
          elevation={2}
          sx={{
            maxHeight: "70vh",
            overflow: "auto",
            borderRadius: 3,
            backgroundColor: mode === 'light' ? '#ffffffee' : '#1e1e1e',
          }}
        >
          <Table sx={{ minWidth: 1000 }} aria-label="user table">
            <TableHead>
              <TableRow sx={{ backgroundColor: mode === 'light' ? "#f5f5f5" : "#333" }}>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Create Date</b></TableCell>
                <TableCell><b>Password Changed Date</b></TableCell>
                <TableCell><b>Days Since Password Change</b></TableCell>
                <TableCell><b>Last Access Date</b></TableCell>
                <TableCell><b>Days Since Last Access</b></TableCell>
                <TableCell><b>MFA Enabled</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredUsers.map((user, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{
                    backgroundColor:
                      (user.daysSincePasswordChange > 365 || user.daysSinceLastAccess > 90)
                        ? (mode === 'light' ? '#ffefdb' : '#5d4037') // orange vs dark red
                        : 'transparent'
                  }}
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.createDate}</TableCell>
                  <TableCell>{user.passwordChangedDate}</TableCell>
                  <TableCell>{user.daysSincePasswordChange}</TableCell>
                  <TableCell>{user.lastAccessDate}</TableCell>
                  <TableCell>{user.daysSinceLastAccess}</TableCell>
                  <TableCell>{user.mfaEnabled ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default App;