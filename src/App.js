import React from "react";
import SnackbarProvider from "react-simple-snackbar";
import Admin from "./routes/Admin";
import User from "./routes/User";

function App() {
 return (
    <SnackbarProvider>
      <Admin />
      <User />
    </SnackbarProvider>
      
  );
} 

export default App;
