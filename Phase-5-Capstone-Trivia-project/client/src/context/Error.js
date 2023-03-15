import { useContext } from "react";
import { ErrorContext } from "./ErrorContext";

export function Error() {
  const { errors, removeError } = useContext(ErrorContext);

  if (!Object.values(errors).length) return <div />;

  return (
    <>
      {Object.values(errors).map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px dotted red"
          }}
        >
          <ul>
            <li>{item.id}</li>
            <li>{item.message}</li>
            <li>{item.status}</li>
          </ul>
          <button onClick={() => removeError(item.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}