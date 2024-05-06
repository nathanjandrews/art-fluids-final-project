import { useState } from "react";
import { BrowserView } from "react-device-detect";
import SoundTable from "./components/SoundTable";
import Videos from "./components/Videos";

function App() {
  const [indoor, setIndoor] = useState(false);

  return (
    <>
      <BrowserView>
        <Videos />
      </BrowserView>
      <div id="content-wrapper">
        <h1>Select Sounds, Make it Rain!</h1>
        <div id="switch-content">
          <h3>Outdoor Sounds</h3>
          <label className="switch">
            <input type="checkbox" checked={indoor} onChange={() => setIndoor((v) => !v)} />
            <span className="slider round"></span>
          </label>
          <h3>Indoor Sounds</h3>
        </div>
        <SoundTable indoor={indoor} />
      </div>
    </>
  );
}

export default App;
