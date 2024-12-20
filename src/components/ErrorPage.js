import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

//  const err = useRouteError() ;  //this  is a hook provided by react-router-dom
   const err =  useRouteError()
    console.log(err) ;

  return (
    <div className="error-container w-full h-full">
        <div className="error-inner">
        <h1 className="err-num text-9xl">{err.status}</h1>
        <p className="err-text font-semibold text-lg text-center">{err.statusText}</p>

        </div>
    </div>
  );
}

export default ErrorPage;
