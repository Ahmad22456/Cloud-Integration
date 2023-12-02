import MapContainer from "./components/Map";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps React App</h1>
      </header>
      <main>
        <div style={{ height: "500px", width: "100%", position: "relative" }}>
          <MapContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
