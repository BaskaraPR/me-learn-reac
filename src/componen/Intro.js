import tew from '../tew-removebg-preview.png';
import necoarc from "../necoarc.png"
import '../App.css';
import { useState } from 'react';

function Intro(name) {
  const [getImage, setImage] = useState(tew);
  const firstimg = tew
  const secondimg = necoarc
  function changeimg(){
    setImage(getImage === firstimg ? secondimg: firstimg)
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav>nguwawor</nav>
        <img src={getImage} className="App-logo" alt="logo" />
        <button onClick={() => changeimg()}>anu</button>
        <p>
          Throne of ngawi : {name.name}
        </p>
        <a
          className="App-link"
          href="https://youtu.be/dv13gl0a-FA?si=tDQqL2f2A6yRkLNB"
          target="_blank"
          rel="noopener noreferrer"
        >
          APa cona 😂
        </a>
      </header>
      <section>
        <h1>mas tukam ngawi 😜</h1>
      </section>
    </div>
  );
}

export default Intro;
