import React from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const options = {
  style: {
    backgroundColor: "black",
    color: "f76565",
    textAlign: "center",
  },
  closeStyle: {
    color: "blue",
    fontSize: "16px",
  },
};

export default function Login() {

  const [openSnackbar] = useSnackbar(options);
  const users = useSelector((state) => state.userReducer);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const index = users.findIndex((user) => user.email === userData.email);
    if (index === -1) {
      openSnackbar("Email or Password Wrong");
    } else {
      if (users[index].password === userData.password) {
        localStorage.setItem("userData",JSON.stringify(users[index]))
        window.location.replace("/jobs")
      } else {
        openSnackbar("Enter correct password");
      }
    }
    console.log(index);

    console.log(userData);

  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="warning"
            className={classes.submit}
          >
            Log In
          </Button>
       
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Register"}
              </Link>
               <h3>Demo Crediantials</h3>
               <p> Email & PassWord :admin123@gmail.com</p>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
