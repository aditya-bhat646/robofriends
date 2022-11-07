import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    const filteredRobotName = robot.name.toLowerCase().includes(searchfield.toLowerCase());
    return filteredRobotName;
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((randomRobots) => setRobots(randomRobots))
      // eslint-disable-next-line no-console
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

export default App;
