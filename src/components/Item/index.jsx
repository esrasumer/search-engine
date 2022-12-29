import { useState } from 'react';

export default function Item(props) {


    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive((current) => !current);
    };


    const { id, name, username, email, address } = props
    return (
        <div>
            <button onClick={handleClick}>button</button>
            <div style={{
                backgroundColor: isActive ? "text-indent: 100%,white-space: nowrap,overflow: hidden" : "",
                color: isActive ? "white" : ""
            }}
                key={id}>
                <div> Name: {name}</div>
                <div>  Username: {username}</div>
                <div> e-mail: {email}</div>
                <div>Address: {address.city}</div>
            </div>
        </div>
    )
}