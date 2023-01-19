import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const clearAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3> My Family </h3>
        <List people={people} />
        <button className="btn btn-hero" onClick={clearAll}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
