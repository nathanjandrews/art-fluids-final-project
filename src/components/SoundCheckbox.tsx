import { FC } from "react";
import useSound from "use-sound";

interface SoundCheckboxProps {
  label: string;
  filePath: string;
}

export const SoundCheckbox: FC<SoundCheckboxProps> = ({ label, filePath }) => {
  const [play, { pause, sound }] = useSound(filePath, { loop: true });
  sound;
  return (
    <>
      <label>{label}</label>
      <input
        type="checkbox"
        onChange={(e) => {
          e.target.checked ? play() : pause();
        }}
      />
    </>
  );
};
