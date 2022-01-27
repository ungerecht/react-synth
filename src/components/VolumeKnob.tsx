import React from "react";
import Knob from "./Knob";
import "../styles/VolumeKnob.css";

interface VolumeProps {
  volume: number;
  setVolume: (volume: number) => void;
}

const VolumeKnob = ({ volume, setVolume }: VolumeProps) => {
  return (
    <div className="control-container">
      <label className="unselectable title-big">VOLUME</label>
      <div className="row">
        <div className="column">
          <Knob
            min={-60}
            max={0}
            value={volume}
            onValueChange={setVolume}
            width={50}
            height={50}
            step={1}
          />
          <p className="unselectable value">{`${volume}db`}</p>
        </div>
      </div>
    </div>
  );
};

export default VolumeKnob;
