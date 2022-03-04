import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

import user from './data/user.json';
import statistics from './data/statistical-data.json';

const App = () => {
  return (
    <div className='container'>
        <Profile name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
        <Statistics title='UPLOAD STATS' stats={statistics.static} />
    </div>
  );
}

export default App;
