export default function Item(props) {
    const {id,name,username,email,address} = props
    return (
        <div key={id}>
            <div> Name: {name}</div>
            <div>  Username: {username}</div>
            <div> e-mail: {email}</div>
            <div>Address: {address.city}</div>
        </div>
    )
}