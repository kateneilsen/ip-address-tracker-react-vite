import { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import IpInfo from "./components/IpInfo";
import Map from "./components/Map";
import { isIpAddress, isDomain } from "./helpers/helpers";

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
      <Map ipInfo={ipInfo} />
    </main>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
