import "./styles.css";
import Template from "./components/Template";
import Gallery from "./components/Gallery";
import DataSource from "./components/DataSource";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Template> </Template>
      <div id="flower">
        <Gallery></Gallery>
        <Gallery></Gallery>
        <Gallery></Gallery>
      </div>
      <DataSource> </DataSource>
    </div>
  );
}
