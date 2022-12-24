import { useState } from "react"

export default function Input() {

    const [query, setquery] = useState('')
    const handleChange = (e) => {
        setquery(e.target.value)
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} placeholder="Bir şeyler yaz.." />
        </div>
    )
}