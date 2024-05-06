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
          <SoundCheckbox indoor={indoor} outdoorPath={cream_metal} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={honey_metal} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={oil_metal} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={water_metal} indoorPath={""} />
        </tr>
        <tr>
          <td>Plastic</td>
          <SoundCheckbox indoor={indoor} outdoorPath={cream_plastic} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={honey_plastic} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={honey_plastic} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={honey_plastic} indoorPath={""} />
        </tr>
        <tr>
          <td>Water</td>
          <SoundCheckbox indoor={indoor} outdoorPath={cream_water} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={honey_water} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={oil_water} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={water_water} indoorPath={""} />
        </tr>
        <tr>
          <td>Stone</td>
          <SoundCheckbox indoor={indoor} outdoorPath={honey_stone} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={honey_stone} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={oil_stone} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={water_stone} indoorPath={""} />
        </tr>
        <tr>
          <td>Silicon</td>
          <SoundCheckbox indoor={indoor} outdoorPath={honey_silicon} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={honey_silicon} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={oil_silicon} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={water_silicon} indoorPath={""} />
        </tr>
        <tr>
          <td>Wood</td>
          <SoundCheckbox indoor={indoor} outdoorPath={cream_wood} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={cream_wood} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={cream_wood} indoorPath={""} />
          <SoundCheckbox indoor={indoor} outdoorPath={cream_wood} indoorPath={""} />
        </tr>
      </tbody>
    </table>
  );
};

export default SoundTable;
