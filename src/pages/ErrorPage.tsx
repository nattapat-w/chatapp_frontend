import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Root/Navbar";

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error(error);
  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center dark:bg-dark-primary dark:text-dark-text">
        <h1 className="text-3xl font-bold pb-3">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            Error : {error.status + " " + error.statusText || error.message}
          </i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
