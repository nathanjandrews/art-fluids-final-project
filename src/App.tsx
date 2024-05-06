import SoundTable from "./components/SoundTable";
import Videos from "./components/Videos";

function App() {
  return (
    <>
      <Videos />
      <div id="content-wrapper">
        <h1>Select Sounds, Make it Rain!</h1>
        <SoundTable />
      </div>
    </>
  );
}

export default App;
