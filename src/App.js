import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./componenet/Posts";
import Profil from "./componenet/Profil";

function App() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    let result = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));

    let result2 = axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setPosts(res.data.slice(0, 100), setshow(true)))
      .catch((err) => console.log(err));
  }, []);
  return show ? (
    <div className="App">
      <Profil user={user} />
      <Posts posts={posts} />
    </div>
  ) : (
    <img className="loader" src="https://i.stack.imgur.com/ATB3o.gif" alt="" />
  );
}

export default App;
