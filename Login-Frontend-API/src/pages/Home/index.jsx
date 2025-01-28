
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import api from "../../services/api";

function App() {


  let users = []

  async function getUsers() {

    const usersFromApi = await api.get("/users")

    users = usersFromApi.data

  }

  useEffect(() => {
    getUsers()
  }, [])

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
        <div key={user.id} className="flex justify-between bg-[#2e2d4e] m-[10px] p-3 pl-4 rounded-xl w-[400px]">
          <div >  
            <p className="font-bold text-white">Nome:  <span className="font-normal">{user.name}</span> </p>
            <p className="font-bold text-white">Idade: <span className="font-normal">{user.age}</span></p>
            <p className="font-bold text-white">Email: <span className="font-normal">{user.email}</span> </p>
           
          </div>
          <button className="cursor-pointer m-3 hover:opacity-70" >
              <FaRegTrashAlt className="text-red-600"/>
          </button>
        </div>
      ))}
    </div>
  )
}

export default App
