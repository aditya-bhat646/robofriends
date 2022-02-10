import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLowerCase()
      .includes(searchfield.toLowerCase());
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((robots) => setRobots(robots))
      .catch((error) => console.log(error));
  }, []);

  return !robots.length ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <ErrorBoundry>
        <h1 className="f2">RoboFriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </ErrorBoundry>
    </div>
  );
}
