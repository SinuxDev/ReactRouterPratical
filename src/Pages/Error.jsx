import { Navigate, useNavigate } from "react-router-dom"

const Error = () => {

    const navigate = useNavigate();
    const navigateHandler = () =>{
        navigate("/");
    }

  return (
    <>
        <h1>Hi I'm error</h1>

        <div className='error-btn-ctr'>
            <button className='error-btn' onClick={navigateHandler} >Go Back Where You're Belong</button>
        </div>
    </>
  )
}

export default Error