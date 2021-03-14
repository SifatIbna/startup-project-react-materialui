import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScanPage from "../components/pages/ScanPage";
import Home from "../components/pages/Home";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>

          <Route
            exact
            path="/lectures"
            component={() => <div>Lectures</div>}
          ></Route>

          <Route
            exact
            path="/favourites"
            component={() => <div>Favourites</div>}
          ></Route>

          <Route
            exact
            path="/profile"
            component={() => <div>Profile</div>}
          ></Route>

          <Route
            exact
            path="/about"
            component={() => <div>About Us</div>}
          ></Route>
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          ></Route>

          <Route exact path="/scan" component={ScanPage}></Route>
          <Route exact path="/upload" component={UploadPage}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
