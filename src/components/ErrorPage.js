import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const nav =  useNavigate()
//  const err = useRouteError() ;  //this  is a hook provided by react-router-dom
   const err =  useRouteError()
    console.log(err) ;

    function goBack(){
        nav(-1);
    }

  return (
    <div className="error-container w-full h-full">
        <div className="error-inner">
        <h1 className="err-num text-9xl">{err.status}</h1>
        <p className="err-text font-semibold text-lg text-center">{err.statusText}</p>
        <button className="text-xl border px-4 ml-2 mt-4 py-1 rounded-lg bg-[#ea5858] text-[#3c3835] hover:text-[#fff0e9] hover:scale-105 transform transition-transform ease-in-out" onClick={goBack}>🏃‍♂️ Take Me Back!</button>
        </div>
    </div>
  );
}

export default ErrorPage;
