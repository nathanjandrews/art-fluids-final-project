import { SoundCheckbox } from "./SoundCheckbox";
import cream_metal from "/sounds/cream-metal.mp3";
import cream_plastic from "/sounds/cream-plastic.mp3";
import cream_water from "/sounds/cream-water.mp3";
import cream_wood from "/sounds/cream-wood.mp3";
import honey_metal from "/sounds/honey-metal.mp3";
import honey_plastic from "/sounds/honey-plastic.mp3";
import honey_silicon from "/sounds/honey-silicon.mp3";
import honey_stone from "/sounds/honey-stone.mp3";
import honey_water from "/sounds/honey-water.mp3";
import oil_metal from "/sounds/oil-metal.mp3";
import oil_silicon from "/sounds/oil-silicon.mp3";
import oil_stone from "/sounds/oil-stone.mp3";
import oil_water from "/sounds/oil-water.mp3";
import water_metal from "/sounds/water-metal.mp3";
import water_silicon from "/sounds/water-silicon.mp3";
import water_stone from "/sounds/water-stone.mp3";
import water_water from "/sounds/water-water.mp3";

export const SoundTable = () => {
  return (
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
          <SoundCheckbox filePath={oil_metal} />
          <SoundCheckbox filePath={water_metal} />
        </tr>
        <tr>
          <td>Plastic</td>
          <SoundCheckbox filePath={cream_plastic} />
          <SoundCheckbox filePath={honey_plastic} />
          <SoundCheckbox filePath={honey_plastic} /> {/* oil_plastic placeholder */}
          <SoundCheckbox filePath={honey_plastic} /> {/* water_plastic placeholder */}
        </tr>
        <tr>
          <td>Water</td>
          <SoundCheckbox filePath={cream_water} />
          <SoundCheckbox filePath={honey_water} />
          <SoundCheckbox filePath={oil_water} />
          <SoundCheckbox filePath={water_water} />
        </tr>
        <tr>
          <td>Stone</td>
          <SoundCheckbox filePath={honey_stone} /> {/* cream_stone placeholder */}
          <SoundCheckbox filePath={honey_stone} />
          <SoundCheckbox filePath={oil_stone} />
          <SoundCheckbox filePath={water_stone} />
        </tr>
        <tr>
          <td>Silicon</td>
          <SoundCheckbox filePath={honey_silicon} /> {/* cream_silicon placeholder */}
          <SoundCheckbox filePath={honey_silicon} />
          <SoundCheckbox filePath={oil_silicon} />
          <SoundCheckbox filePath={water_silicon} />
        </tr>
        <tr>
          <td>Wood</td>
          <SoundCheckbox filePath={cream_wood} />
          <SoundCheckbox filePath={cream_wood} /> {/* honey_wood placeholder */}
          <SoundCheckbox filePath={cream_wood} /> {/* oil_wood placeholder */}
          <SoundCheckbox filePath={cream_wood} /> {/* water_wood placeholder */}
        </tr>
      </tbody>
    </table>
  );
};

export default SoundTable;
