import { FC } from "react";
import useSound from "use-sound";

interface SoundCheckboxProps {
  indoor: boolean;
  indoorPath: string;
  outdoorPath: string;
}

export const SoundCheckbox: FC<SoundCheckboxProps> = ({ indoor, indoorPath, outdoorPath }) => {
  const filePath = indoor ? indoorPath : outdoorPath;
  const [play, { pause }] = useSound(filePath, { loop: true,  });
  return (
    <td>
      <input
        type="checkbox"
        onChange={(e) => {
          e.target.checked ? play() : pause();
        }}
      />
    </td>
  );
};
