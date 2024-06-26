import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  const handleAddUser = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = {name, email}
  console.log(user);
  fetch('http://localhost:5000/users', {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    console.log("insite post response", data);
    const newUsers = [...users, data]
    setUsers(newUsers);
    form.reset();
  })
}

  return (
    <>
      <h1>Users Managment System</h1>
      <h3>Numbers of Users: {users.length}</h3>
      <div>
        <form onSubmit={handleAddUser}>
      <input type="text" name='name' />
      <br />
      <input type="text" name='email' />
      <br />
      <input type="submit" value='Add user' />
      </form>
      </div>
      {
        users.map(user => <p key={user.id}>{user.id}: {user.name}: {user.email} </p>)
      }
    </>
  )
}

export default App
