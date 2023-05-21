import theme from "./theme";
import { ThemeProvider } from "styled-components";
import Router from "./route/router";
import { MyContextProvider } from "./Components/UseContext";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MyContextProvider>
          <Router />
        </MyContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
