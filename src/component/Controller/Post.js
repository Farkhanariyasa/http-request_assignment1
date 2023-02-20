import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import AuthContext from "../Store/auth-context";
import { useContext } from "react";
import useFetch from "../Hook/use-fetch";

function Post(props) {
  const ctx = useContext(AuthContext);

  const {
    data: post,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

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
      {post &&
        post.slice(0, ctx.value).map((post) => (
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
            key={post.id}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Card>
        ))}
    </>
  );
}

export default Post;
