import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      setJokes(response.data)
      console.log(jokes)
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <div>
      <h1>FullStack Basic</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App
