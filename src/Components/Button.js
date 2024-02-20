import { useState } from "react";

export default function Button() {
  const [clicked, setClicked] = useState(0);

  return (
    <div>
      <button onClick={() => setClicked(clicked + 1)}>Click me</button>;
      {clicked > 0 ? <p>Clicked = {clicked}</p> : <p>Please click</p>}
    </div>
  );
}
