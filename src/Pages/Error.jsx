import { Link, Navigate, useNavigate, useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    let title = "Unknown Error.."
    
    if(error.status == 500){
      title = error.data.message;
    }

    const navigate = useNavigate();
    const navigateHandler = () =>{
        navigate("/");
    }
    

  return (
    <>
        <h1> {title} </h1>

        <div className='error-btn-ctr'>
            <button className='error-btn' onClick={navigateHandler} >Go Back Where You're Belong</button>
        </div>
    </>
  )
}

export default Error