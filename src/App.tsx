import { ThemeProvider } from "@mui/material";

import Support from "../src/views/Support";
import { Theme } from "./theme/DefaultTheme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Support />
      </div>
    </ThemeProvider>
  );
}

export default App;
