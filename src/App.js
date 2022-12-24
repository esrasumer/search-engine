import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
// import Input from './Input'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    }
    fetchData();
  }, [])

  const [query, setquery] = useState('')
  const handleChange = (e) => {
      setquery(e.target.value)
  }


  return (
    <div className="App">
      <ul>
        {data.map(repo =>
          <div key={repo.id}>
            <div> name : {repo.name}</div>
            <div>  username : {repo.username}</div>
          </div>
        )}
      </ul>
      <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Bir şeyler yaz.." />
        </div>
    </div>
  );
}

export default App;

