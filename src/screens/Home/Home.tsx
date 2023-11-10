import { useNavigate } from "react-router-dom"

export function Home(){
  const navigate = useNavigate();

  function  handleNavigateToTeste(){
    navigate('/teste')
  }
  
  return(
    <div>
      <h1>Home</h1>
      <button onClick={handleNavigateToTeste}>Navegar para teste</button>
    </div>
  )
}