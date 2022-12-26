import { useState } from "react"

export default function Input() {
    const [search, setSearch] = useState("")
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" value={search} onChange={handleChange} placeholder="filter with name.." />
        </div>
    )
}