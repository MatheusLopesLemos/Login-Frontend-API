
import { FaRegTrashAlt } from "react-icons/fa";

function App() {


  const users = [
    { id:1 ,nome: "John Doe", idade: 30, email: "john@example.com" },
    { id:2 ,nome: "Jane Doe", idade: 25, email: "jane@example.com" },
    { id:3 ,nome: "Alice Smith", idade: 28, email: "alice@example.com" },
    { id:4 ,nome: "Bob Johnson", idade: 35, email: "bob@example.com" }
  ]

  return (

    
    <div className="flex  items-center flex-col p-[100px] ">
      <div className="">
        <form className="flex items-center flex-col gap-8 p-8 rounded-xl bg-[#2e2d4e] w-[400px] mb-[20px]" action="">
          <h1 className="text-white text-3xl">Cadastro de Usuários</h1>
          <input className="w-80 border border-solid border-[#48456c] rounded-xl h-[40px] pl-3 outline-none" placeholder="Nome" name="nome" type="text" />
          <input className="w-80 border border-solid border-[#48456c] rounded-xl h-[40px] pl-3 outline-none" placeholder="idade" name="idade" type="number" />
          <input className="w-80 border border-solid border-[#48456c] rounded-xl h-[40px] pl-3 outline-none"  placeholder="Email"name="email" type="email" />
          <button className=" rounded-xl bg-[#8b8ae1] h-[40px] w-80 font-bold cursor-pointer hover:opacity-[0.8] text-white"type="button">Cadastrar</button>
        </form>
      </div>

      {users.map(( user ) => (
        <div key={user.id}>
          <div >  
            <p>Nome: {user.name} </p>
            <p>Idade: {user.idade}</p>
            <p>Email: {user.email} </p>
            <button>
              <FaRegTrashAlt className="text-red-600"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
