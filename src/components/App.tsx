import { useEffect, useState } from "react";

import TileGrid from "../components/TileGrid";
import getNewsData from "../api/getNewsData";

const App = () => {
  // have one state to handle each returned data instance
  const [tilesTitle, setTilesTitle] = useState<string>("");
  const [tilesArray, setTilesArray] = useState<[]>([]);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTilesTitle("");
    setTilesArray([]);
    setDataLoaded(false);
    getNewsData(setDataLoaded).then((data) => {
      // these can then be set here
      setTilesTitle(data.title);
      setTilesArray(data.items);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">ITV News</header>
      {!dataLoaded && <div>Loading...</div>}
      {dataLoaded && !tilesArray.length && <div>No data</div>}
      {tilesArray.length > 0 && (
        <TileGrid
          // and finally parsed through here
          items={tilesArray}
          heading={tilesTitle}
          // move boolean switches here
          showDate={true}
          showSummary={true}
        />
      )}
    </div>
  );
}

export default App;
