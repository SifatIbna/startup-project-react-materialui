import Header from "../components/ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        Hello
      </ThemeProvider>
    </div>
  );
}

export default App;
