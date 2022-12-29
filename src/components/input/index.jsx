import axios from 'axios';
import { useEffect, useState } from 'react'
import Item from '../Item';

export default function Input() {

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

    let filteredData = search ? data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) : data
    return (
        <div>
            <input type="text" value={search} onChange={handleChange} placeholder="filter with name.." />
           
            {filteredData.map((item) => (
                <Item
                 key={item.id}
                    id={item.id}
                    name={item.name}
                    username={item.username}
                    email={item.email}
                    address={item.address.city}
                />
            ))
            }
        </div>
    )
}