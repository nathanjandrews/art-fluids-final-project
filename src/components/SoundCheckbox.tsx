import { FC, useEffect, useState } from "react";
import useSound from "use-sound";

interface SoundCheckboxProps {
  indoor: boolean;
  indoorPath: string;
  outdoorPath: string;
}

export const SoundCheckbox: FC<SoundCheckboxProps> = ({ indoor, indoorPath, outdoorPath }) => {
  const [checked, setChecked] = useState(false);
  const [filePath, setFilePath] = useState(outdoorPath);
  const [play, { pause, stop }] = useSound(filePath, { loop: true });

  useEffect(() => {
    stop();
    setChecked(false);
    setFilePath(indoor ? indoorPath : outdoorPath);
  }, [filePath, indoor, indoorPath, outdoorPath, stop]);

  return (
    <td>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          !checked ? play() : pause();
          setChecked((v) => !v);
        }}
      />
    </td>
  );
};
