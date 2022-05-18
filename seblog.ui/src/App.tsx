import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingContainer from "./containers/LandingContainer/LandingContainer";
import BlogContainer from "./containers/BlogContainer/BlogContainer";
import Sidebar from "./components/SidebarComponent/Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ColorModeContext } from "./context/colorModeContext";
import "./App.css";
import BlogCreation from "./components/BlogCreationComponent/BlogCreation";
require("dotenv").config();

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Sidebar />
          <Routes>
            <Route path="/" element={<LandingContainer />} />
            <Route path="/blog" element={<BlogContainer />} />
            <Route path="/create" element={<BlogCreation />} />
            <Route path="*" element={<LandingContainer />} />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
