import React from "react";
import { render } from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';


const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#ffe9ec",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    paddingBottom: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.root}>
        <Grid container spacing={3}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item xs={4}>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MuiThemeProvider>
  );
}

render(<App />, document.getElementById("root"));
