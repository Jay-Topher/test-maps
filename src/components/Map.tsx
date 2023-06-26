import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import world from "../assets/world.json";
import physical from "../assets/physical.json";
import morocco from "../assets/morocco.json";

import "leaflet/dist/leaflet.css";

type Marker = {
  id: number;
  position: LatLngTuple;
  name: string;
};

type Props = {
  markers: Marker[];
};

const Map = ({ markers }: Props) => {
  // const mapRef = useRef(null);

  // useEffect(() => {
  //   if (mapRef.current && markers.length > 0) {
  //     const map = mapRef.current.leafletElement;
  //     const bounds = L.latLngBounds(markers.map((marker) => marker.position));
  //     map.fitBounds(bounds);
  //   }
  // }, [markers]);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "500px", width: "100%" }}
      // ref={mapRef.current}
      // whenCreated={(mapInstance) => {
      //   console.log("fere");
      //   mapRef.current = mapInstance;
      // }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
      <GeoJSON data={world} />
      {/* <GeoJSON data={physical} /> */}
      {/* <GeoJSON data={morocco} /> */}
    </MapContainer>
  );
};

export default Map;
