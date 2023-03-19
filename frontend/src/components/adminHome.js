import React, { Component, useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { useRef } from "react";
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

export default function AdminHome({ userData }) {
  const [isSidebar, setIsSidebar] = useState(true);
  const [theme, colorMode] = useMode();
  //setting state
  const [data, setData] = useState([]);
  const [limit,setLimit]=useState(5);
  const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();



  useEffect(() => {
    currentPage.current=1;
    // getAllUser();
    getPaginatedUsers();
  }, []);


  //fetching all user
  const getAllUser = () => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };



//logout
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };


  //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  //pagination
  function handlePageClick(e) {
    console.log(e);
   currentPage.current=e.selected+1;
    getPaginatedUsers();
   

  }

  function getPaginatedUsers(){
    fetch(`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);
        setData(data.result)
        
       
      });

  }

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className="App">
          <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/form" element={<Form />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
              </Routes>

            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          forcePage={currentPage.current-1}
        />
        <button onClick={logOut} className="btn btn-primary">
          Log Out
        </button>
    </>
  );
}
