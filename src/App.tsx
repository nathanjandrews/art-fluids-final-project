import { SoundCheckbox } from "./components/SoundCheckbox";
import cream_metal from "/sounds/cream-metal.mp3";
import cream_plastic from "/sounds/cream-plastic.mp3";
import cream_water from "/sounds/cream-water.mp3";
import cream_wood from "/sounds/cream-wood.mp3";
import honey_metal from "/sounds/honey-metal.mp3";
import honey_plastic from "/sounds/honey-plastic.mp3";
import honey_silicon from "/sounds/honey-silicon.mp3";
import honey_stone from "/sounds/honey-stone.mp3";
import honey_water from "/sounds/honey-water.mp3";

function App() {
  return (
    <>
      <table>
        <thead>
          <th></th>
          <th>Cream</th>
          <th>Honey</th>
          <th>Oil</th>
          <th>Water</th>
        </thead>
        <tbody>
          <tr>
            <td>Metal</td>
            <SoundCheckbox filePath={cream_metal} />
            <SoundCheckbox filePath={honey_metal} />
          </tr>
          <tr>
            <td>Plastic</td>
            <SoundCheckbox filePath={cream_plastic} />
            <SoundCheckbox filePath={honey_plastic} />
          </tr>
          <tr>
            <td>Water</td>
            <SoundCheckbox filePath={cream_water} />
            <SoundCheckbox filePath={honey_water} />
          </tr>
          <tr>
            <td>Stone</td>
            {/* <SoundCheckbox filePath={cream_stone} /> */}
            <SoundCheckbox filePath={honey_stone} />
          </tr>
          <tr>
            <td>Silicon</td>
            {/* <SoundCheckbox filePath={cream_silicon} /> */}
            <SoundCheckbox filePath={honey_silicon} />
          </tr>
          <tr>
            <td>Wood</td>
            <SoundCheckbox filePath={cream_wood} />
            {/* <SoundCheckbox filePath={honey_wood} /> */}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
