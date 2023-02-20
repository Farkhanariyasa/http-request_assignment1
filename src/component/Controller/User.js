import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import AuthContext from "../Store/auth-context";
import { useContext } from "react";
import useFetch from "../Hook/use-fetch";

function User(props) {
  const ctx = useContext(AuthContext);
  const {
    data: user,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {isLoading && (
        <Card
          sx={{
            width: "600px",
            margin: "auto",
            marginTop: "20px",
            padding: "10px",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div">
            Loading...
          </Typography>
        </Card>
      )}
      {error && <div>{error}</div>}
      {user && (
        <TableContainer
          sx={{
            width: "600px",
            margin: "auto",
            marginTop: "20px",
            padding: "10px",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={user.id}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Username</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.slice(0, ctx.value).map((user) => (
                <TableRow>
                  <>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.username}</TableCell>
                  </>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default User;
