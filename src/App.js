import { useState } from "react";

function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = (e) => {
    console.log('userQuery', userQuery);
    setUserQuery(e.target.value)
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      console.log(e.key);
      searchQuery();
    }
  }



  return (
    <div className="App">
      <h1>Hello Aytach</h1>
      <div className="form">
        <input onKeyDown={handleKeyPress} value={userQuery} onChange={updateUserQuery} />
        <button  onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
