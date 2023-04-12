 import Users from "./components/users/Users";

let users = [
    {name: 'Vasia', age: 20, status: true},
    {name: 'Petro', age: 22, status: true},
    {name: 'Ivan', age: 26, status: false},
    {name: 'Masha', age: 24, status: true},
    {name: 'Vitia', age: 29, status: false},
]

function App() {

    let msg = 'hello guys';
  return (
    <div>
        <h2>{msg}</h2>
        <br/>
        <Users users={users}/>

    </div>
  );
}

export default App;
