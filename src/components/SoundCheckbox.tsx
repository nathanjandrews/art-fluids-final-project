import { FC } from "react";
import useSound from "use-sound";

interface SoundCheckboxProps {
  filePath: string;
}

export const SoundCheckbox: FC<SoundCheckboxProps> = ({ filePath }) => {
  const [play, { pause, sound }] = useSound(filePath, { loop: true });
  sound;
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
