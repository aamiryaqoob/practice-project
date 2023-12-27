import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import TabButtons from "./components/TabButtons.jsx";

function App() {
  function onSelectHandler(){
    console.log("selected")
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => onSelectHandler("Components")}>Components</TabButtons>
            <TabButtons onSelect={() => onSelectHandler("JSX")}>JSX</TabButtons>
            <TabButtons onSelect={() => onSelectHandler("Props")}>props</TabButtons>
            <TabButtons onSelect={() => onSelectHandler("State")}>state</TabButtons>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
