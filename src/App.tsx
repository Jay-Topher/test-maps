import Map from "./components/Map";
import { LatLngTuple } from "leaflet";

type Marker = {
  id: number;
  position: LatLngTuple;
  name: string;
};

function App() {
  const markers: Marker[] = [
    { id: 1, position: [51.5074, -0.1278], name: "London" },
    { id: 2, position: [40.7128, -74.006], name: "New York" },
  ];
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Map markers={markers} />
    </div>
  );
}

export default App;
