import data from "./data/users.json";

function Tableau() {
    return (
        <div className="tableau">
            <h1>Tableau</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>
                                <a href={`mailto:${user.email}`}>
                                    {user.email}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tableau;
