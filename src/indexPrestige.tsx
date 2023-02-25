import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from "notistack";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";

const theme = createTheme();

console.log(`process.env: `, process.env);
if (process.env.REACT_APP_MODE === "electron") {
  console.log(`Running in Electron: Filesystem access is enabled.`);
} else {
  console.log("Running on the Web, Filesystem access disabled.");
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  // <React.StrictMode>
   <Provider store={store}>
    <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3} autoHideDuration={1000}>
      <App />
    </SnackbarProvider>
    </ThemeProvider>
   </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
