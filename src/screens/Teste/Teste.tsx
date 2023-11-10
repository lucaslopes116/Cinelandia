import { useNavigate } from "react-router-dom";

export function Teste(){
  const navigate = useNavigate();

  function  handleNavigateToHome(){
    navigate('/')
  }
  
  return(
    <div>
      <h1>Teste</h1>
      <button onClick={handleNavigateToHome}>Navegar para home</button>
    </div>
  )
}