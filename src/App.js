import logo from './logo.svg';
import './App.css';

function App() {<br></br>
  return (
    <div className="App">
      <div className="Card">
        <div className="TitleRow Sentence">
          <h1 className="Title">Hello</h1>
          <h1 className="Title yellow">!</h1>
        </div>
        <h2 className="bio">
          I am <span className="yellow">Charlemagne Wong</span>,
          <br></br>
          and I am a <span id="category" className="yellow-box">Developer</span>.
        </h2>
        <p className="message">
          I'm still working on this site, so comeback in a little bit!
        </p>
        <div className="icons"></div>
      </div>
    </div>
  );
}

export default App;

var describer_idx = 0;
var describer = [
  'Developer',
  'Computer Engineer',
  'Pastry Chef',
  'Hobbyist',
  'Student'
]
setInterval(() => {
  let txt = document.getElementById('category')
  describer_idx = (describer_idx + 1) % describer.length;
  
  txt.innerText = describer[describer_idx];
  
  console.log("Hello!");
}, 4000);
