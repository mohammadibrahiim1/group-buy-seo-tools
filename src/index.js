import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataContext from "./Context/DataContext";
import { ThemeProvider } from "@material-tailwind/react";
import UserContext from "./Context/UserContext";
// import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS> */}
    <UserContext>
      <DataContext>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </DataContext>
    </UserContext>
    {/* </MantineProvider>
    </ColorSchemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
