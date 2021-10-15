import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { User } from "../interfaces/User";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

async function fetchUser(): Promise<User> {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/10");

  return res.data;
}

const UserPage = () => {
  const { status, isLoading, data } = useQuery<User>("user", fetchUser, {
    onError: error => {
      if (status === "error") {
        console.log("error");
      }
    },
  });

  if (isLoading) return <p>Loading...</p>;

  console.log(data);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant='h5' component='div'>
          {data?.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {data?.username}
        </Typography>
        <Typography variant='body2'>
          {data?.email}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default UserPage;
