import { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import IpInfo from "./components/IpInfo";
import Map from "./components/Map";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { isIpAddress, isDomain } from "./helperFunctions/helpers";

function App() {
  const baseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  const [ipInfo, setIpInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
    console.log(ipInfo);
  }, []);

  const getData = async () => {
    const response = await axios.get(baseUrl);
    setIpInfo(response.data);
    setLoaded(true);
  };

  const handleSearch = async () => {
    let response;
    if (isDomain(query)) {
      response = await axios.get(`${baseUrl}&domain=${query}`);
    } else if (isIpAddress(query)) {
      response = await axios.get(`${baseUrl}&ipAddress=${query}`);
    } else {
      console.log("error!");
      setError("Please enter a valid domain or ip address");
    }
    setIpInfo(response.data);
    setLoaded(true);
  };

  return loaded ? (
    <main>
      <Search
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        error={error}
      />
      <IpInfo ipInfo={ipInfo} />
      <MapContainer
        center={[ipInfo.location.lat, ipInfo.location.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[ipInfo.location.lat, ipInfo.location.lng]}></Marker>
      </MapContainer>
    </main>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
