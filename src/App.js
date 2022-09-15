import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Pagination from "./Component/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [perpage, SetPerpage] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      SetPerpage(res.data.slice(0, 10));
    });
  }, []);
  const pageHandler = (pagenumber) => {
    SetPerpage(data.slice((pagenumber*10)-10, pagenumber*10));
  };
  return (
    <>
      {data.length >= 1 ? (
        <div>
          {perpage.map((page) => (
            <div className="post">{page.title}</div>
          ))}
        </div>
      ) : (
        <p>Data is not working...</p>
      )}
      <center>
        <Pagination pageHandler={pageHandler}data={data} />
      </center>
    </>
  );
}

export default App;
