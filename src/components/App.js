import React from 'react';
import SearchVideoLyric from './SearchVideoLyric';
import DisplayResults from './DisplayResults';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchVideoLyric />
        <DisplayResults />
      </div>
    );
  }
}

export default App;
