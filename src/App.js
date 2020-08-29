import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="hero">
        <h4 className="titles">
          UX &middot; Interaction &middot; Visual &middot; Illustration
        </h4>

        <img className="logo" src="/img/hou_logo.png" alt="HOU"/>
        <button>VIEW WORK</button>
      </section>

      <section className="my-work">
        <h2>MY WORK</h2>

        <ul>
          <li><a href="#">Disney</a></li>
          <li><a href="#">Best Buy</a></li>
          <li><a href="#">Dungeon Highway</a></li>
          <li><a href="#">Miscellaneous</a></li>
        </ul>

        <button>ABOUT ME</button>
      </section>
    </div>
  );
}

export default App;
