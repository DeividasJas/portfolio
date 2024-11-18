import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
  // Type-safe error handling
  const errorMessage = error instanceof Error 
    ? error.message 
    : (error as { statusText?: string, message?: string }).statusText || 'An unexpected error occurred';

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}