import axios from "axios";
export default function Button(props) {
  const handleClick = async () => {
    let data = await axios.get("https://pokeapi.co/api/v2/pokemon/geodude");
  };
  return <button onClick={handleClick}>Click me</button>;
}
