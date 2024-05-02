import "./App.css";

import { SoundCheckbox } from "./components/SoundCheckbox";
import rain from "/rain.mp3";
import thunderstorm from "/thunderstorm.mp3";

function App() {
  return (
    <>
      <SoundCheckbox label={"thunderstorm"} filePath={thunderstorm} />
      <SoundCheckbox label={"rain"} filePath={rain} />
    </>
  );
}

export default App;
