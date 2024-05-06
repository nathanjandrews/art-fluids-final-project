import { SoundCheckbox } from "./SoundCheckbox";
import cream_metal_indoor from "/sounds/cream-metal-indoors.mp3";
import cream_metal from "/sounds/cream-metal.mp3";
import cream_plastic_indoor from "/sounds/cream-plastic-indoors.mp3";
import cream_plastic from "/sounds/cream-plastic.mp3";
import cream_water_indoor from "/sounds/cream-water-indoors.mp3";
import cream_water from "/sounds/cream-water.mp3";
import cream_wood_indoor from "/sounds/cream-wood-indoors.mp3";
import cream_wood from "/sounds/cream-wood.mp3";
import honey_metal_indoor from "/sounds/honey-metal-indoors.mp3";
import honey_metal from "/sounds/honey-metal.mp3";
import honey_plastic_indoor from "/sounds/honey-plastic-indoors.mp3";
import honey_plastic from "/sounds/honey-plastic.mp3";
import honey_silicon_indoor from "/sounds/honey-silicon-indoors.mp3";
import honey_silicon from "/sounds/honey-silicon.mp3";
import honey_stone_indoor from "/sounds/honey-stone-indoors.mp3";
import honey_stone from "/sounds/honey-stone.mp3";
import honey_water_indoor from "/sounds/honey-water-indoors.mp3";
import honey_water from "/sounds/honey-water.mp3";
import oil_metal_indoor from "/sounds/oil-metal-indoors.mp3";
import oil_metal from "/sounds/oil-metal.mp3";
import oil_silicon_indoor from "/sounds/oil-silicon-indoors.mp3";
import oil_silicon from "/sounds/oil-silicon.mp3";
import oil_stone_indoor from "/sounds/oil-stone-indoors.mp3";
import oil_stone from "/sounds/oil-stone.mp3";
import oil_water_indoor from "/sounds/oil-water-indoors.mp3";
import oil_water from "/sounds/oil-water.mp3";
import water_metal_indoor from "/sounds/water-metal-indoors.mp3";
import water_metal from "/sounds/water-metal.mp3";
import water_silicon_indoor from "/sounds/water-silicon-indoors.mp3";
import water_silicon from "/sounds/water-silicon.mp3";
import water_stone_indoor from "/sounds/water-stone-indoors.mp3";
import water_stone from "/sounds/water-stone.mp3";
import water_water_indoor from "/sounds/water-water-indoors.mp3";
import water_water from "/sounds/water-water.mp3";

interface SoundTableProps {
  indoor: boolean;
}

export const SoundTable = ({ indoor }: SoundTableProps) => {
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
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={cream_metal}
            indoorPath={cream_metal_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_metal}
            indoorPath={honey_metal_indoor}
          />
          <SoundCheckbox indoor={indoor} outdoorPath={oil_metal} indoorPath={oil_metal_indoor} />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={water_metal}
            indoorPath={water_metal_indoor}
          />
        </tr>
        <tr>
          <td>Plastic</td>
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={cream_plastic}
            indoorPath={cream_plastic_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_plastic}
            indoorPath={honey_plastic_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_plastic}
            indoorPath={honey_plastic_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_plastic}
            indoorPath={honey_plastic_indoor}
          />
        </tr>
        <tr>
          <td>Water</td>
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={cream_water}
            indoorPath={cream_water_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_water}
            indoorPath={honey_water_indoor}
          />
          <SoundCheckbox indoor={indoor} outdoorPath={oil_water} indoorPath={oil_water_indoor} />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={water_water}
            indoorPath={water_water_indoor}
          />
        </tr>
        <tr>
          <td>Stone</td>
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_stone}
            indoorPath={honey_stone_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_stone}
            indoorPath={honey_silicon_indoor}
          />
          <SoundCheckbox indoor={indoor} outdoorPath={oil_stone} indoorPath={oil_stone_indoor} />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={water_stone}
            indoorPath={water_stone_indoor}
          />
        </tr>
        <tr>
          <td>Silicon</td>
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_silicon}
            indoorPath={honey_silicon_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={honey_silicon}
            indoorPath={honey_silicon_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={oil_silicon}
            indoorPath={oil_silicon_indoor}
          />
          <SoundCheckbox
            indoor={indoor}
            outdoorPath={water_silicon}
            indoorPath={water_silicon_indoor}
          />
        </tr>
        <tr>
          <td>Wood</td>
          <SoundCheckbox indoor={indoor} outdoorPath={cream_wood} indoorPath={cream_wood_indoor} />
          <SoundCheckbox indoor={indoor} outdoorPath={cream_wood} indoorPath={cream_wood_indoor} />
          <SoundCheckbox indoor={indoor} outdoorPath={cream_wood} indoorPath={cream_wood_indoor} />
          <SoundCheckbox indoor={indoor} outdoorPath={cream_wood} indoorPath={cream_wood_indoor} />
        </tr>
      </tbody>
    </table>
  );
};

export default SoundTable;
