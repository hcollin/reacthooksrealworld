
function UserList(props) {

    const [users, reloadUsers] = useRest(`http://localhost:8080/api/users`, {}, []);

    return (
        <div>
            <ul>
                {users.map(usr => (
                    <li key={usr.id}>{usr.name}</li>
                ))}
            </ul>
            <button onClick={reloadUsers}>Reload</button>
        </div>
    );

}