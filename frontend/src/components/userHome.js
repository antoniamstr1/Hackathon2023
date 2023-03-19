import React, { Component, useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "../scenes/dashboard";
import Users from "../scenes/users";
import Bar from "../scenes/bar";
import Form from "../scenes/form";
import Profile from "../scenes/profile";
import Line from "../scenes/line";
import Pie from "../scenes/pie";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";

export default function UserHome({ userData }) {
  // const logOut = () => {
  //   window.localStorage.clear();
  //   window.location.href = "./sign-in";
  // };
  const [isSidebar, setIsSidebar] = useState(true);
  const [theme, colorMode] = useMode();
  return (
    <>
      {/* Name<h1>{userData.fname}</h1>
      Email <h1>{userData.email}</h1>
      <br />
      <button onClick={logOut} className="btn btn-primary">
        Log Out
      </button> */}

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className="App">
          <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
              </Routes>

            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
