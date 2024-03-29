import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import ProtectedRoute from "./ProtectedRoute";
import useStyles from "../Styles";

import {
  styled,
  Box,
  Paper,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  
} from "@mui/material";
//-------------------date
// import isWeekend from "date-fns/isWeekend";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";

// import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
//-------------------------------grid
import { red } from "@mui/material/colors";
import { Share } from "@mui/icons-material";

const ExpandMoreStyle = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
//-----------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
//-----------------------------------------MAIN function

export default function UserProfile() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  // const {
  //   user: { _id, email, name, phone },
  // } = useContext(AuthContext);

  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(new Date()); //for Date

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <>
      <ProtectedRoute>
        <Navbar />
      </ProtectedRoute>

      <Box className={classes.box}>
        <Grid container spacing={2} rowSpacing={1}>
          <Grid item xs={0} sm={0} md={1}></Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{ boxShadow: 0 }}>
              <Card sx={{ maxWidth: "100%" }}>
                <Typography variant="h4" color="textPrimary" textAlign="center">
                  {user.name + " "}
                  {user.last_name}
                </Typography>
                <CardMedia
                  component="img"
                  image={user.image} //"https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_1280.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <CardActions
                    disableSpacing
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <IconButton aria-label="share">
                      <Share />
                    </IconButton>
                  </CardActions>
                  <Typography variant="h6" color="text.secondary">
                    {user.age}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {user.city}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {user.languages}
                  </Typography>
                </CardContent>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                      src="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729514_1280.jpg"
                    ></Avatar>
                  }
                  title="Name"
                  subheader="Anna Mustermann"
                />
              </Card>
            </Item>
          </Grid>
          <Grid item xs={12} sm={5} md={7}>
            <Item></Item>
            <br />
            <Item>
              {user.bio && (
                <>
                  <Typography variant="h4" color="textPrimary" textAlign="left">
                    Über mich
                  </Typography>
                  <Typography paragraph>{user.bio}</Typography>
                </>
              )}

              <Item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  flexWrap: "wrap",
                  boxShadow: 0,
                }}
              ></Item>
            </Item>
          </Grid>
          <Grid item xs={12} md={5}>
            <Item sx={{ boxShadow: 0 }}>
              {/* {posts && (
                <Post
                  title={posts[posts.length - 1].title}
                  content={posts[posts.length - 1].content}
                />
              )} */}
            </Item>
            <Item sx={{ boxShadow: 0 }}></Item>
          </Grid>
          <Grid item xs={12} md={7}>
            <Item sx={{ boxShadow: 0 }}></Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
