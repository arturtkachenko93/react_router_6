import { useParams } from "react-router-dom";

const Editpost = () => {
  const { id } = useParams();

  return (
    <h1>Edit a post { id }</h1>
  )
}

export { Editpost }
