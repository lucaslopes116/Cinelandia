import { useNavigate } from "react-router-dom";

export function Casa(){
  const navigate = useNavigate();

  function  handleNavigateToHome(){
    navigate('/teste')
  }
  return(
    <div>
      <h1>Casa</h1>
      <button onClick={handleNavigateToHome}>Navegar para teste</button>
    </div>
  )
}