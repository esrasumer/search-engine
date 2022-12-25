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

  const [search, setSearch] = useState("")
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  // console.log(search)

  return (
    <div className="App">
      {/* <ul>
        {data.map(repo =>
          <div key={repo.id}>
            <div> name : {repo.name}</div>
            <div>  username : {repo.username}</div>
          </div>
        )}
      </ul> */}
      <div>
        <input type="text" value={search} onChange={handleChange} placeholder="Bir şeyler yaz.." />
      </div>
      <div>
        {data
          .filter((item) => {
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
          })
          .map((item) => (
            <div key={item.id}>
              <div> Name: {item.name}</div>
              {/* <div>  Username: {item.username}</div>
              <div> e-mail: {item.email}</div>
              <div>Address: {item.address}</div> */}

              {/* bu üçünü yazınca kod hata veriyor */}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

