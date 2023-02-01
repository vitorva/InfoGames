import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://46.101.222.19:3003/games");
      const json = await response.json();
      setData(json);
    }

    try {
      fetchData();
    } catch (error) {
      console.log("Request failed", error);
    }
  }, []);

  function ThumbnailLoading() {
    return (
      <>
        {Array.from(new Array(12)).map((index) => (
          <a key={index} class="element">
            <Skeleton variant="rectangular" width={180} height={240} />
          </a>
        ))}
      </>
    );
  }

  return (
    <>
      {data !== null && data !== undefined ? (
        data.map((x) => (
          <a class="element" href={x.igdb_url}>
            <div>
              <img src={x.cover_url} alt="na" />
            </div>
            <a class="text">
              <div class="name">
                <p>{x.name}</p>
              </div>
              <div class="genre">{x.genres[0].name}</div>
              <div class="rating">{x.rating + "%"}</div>
            </a>
          </a>
        ))
      ) : (
        <ThumbnailLoading />
      )}
    </>
  );
}

export default App;
