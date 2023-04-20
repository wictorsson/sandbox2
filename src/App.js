import logo from "./logo.svg";
import "./App.css";
import * as Tone from "tone";

const synth = new Tone.MembraneSynth().toDestination();

function playSynth() {
  synth.triggerAttackRelease("C2", "8n");
}
function App() {
  return (
    <div id="wrapper">
      <button id="button" onClick={playSynth}>
        click me
      </button>
    </div>
  );
}

export default App;
