import { useRouteError } from "react-router-dom";

export default function Error() {
  const { statusText, message } = useRouteError();

  return (
    <div>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <em>{statusText || message}</em>
      </p>
    </div>
  );
}
