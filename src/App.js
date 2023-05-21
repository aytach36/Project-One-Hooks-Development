import { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";
import Gallery from "./Gallery";

function App() {
  const [userQuery, setUserQuery] = useState("");
  const [showGallery, setShowGallery] = useState(true)

  const updateUserQuery = (e) => {
    console.log("userQuery", userQuery);
    setUserQuery(e.target.value);
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const toggleShowGallery = () => {
    setShowGallery(!showGallery)
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      searchQuery();
    }
  };

  return (
    <div className="App">
      <h1>Hello Aytach</h1>
      <div className="form">
        <input
          onKeyDown={handleKeyPress}
          value={userQuery}
          onChange={updateUserQuery}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      {showGallery && <Gallery />}
      <button onClick={toggleShowGallery}>{showGallery ? 'Hide' : 'Show'} Gallery</button>
      <hr />
      <Stories />
    </div>
  );
}

export default App;
