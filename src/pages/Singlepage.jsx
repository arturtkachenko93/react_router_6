import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(true);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', {replace: true})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  },[id])

  return (
    <div>
      {/*{ post && (*/}
      {/*  <>*/}
      {/*    <h1>{post.title}</h1>*/}
      {/*    <p>{post.body}</p>*/}
      {/*    <Link to={`/posts/${id}/edit`}>Edit this post</Link>*/}
      {/*  </>*/}
      {/*) }*/}
      <button onClick={goBack}>go Back</button>

      {/*Bad approach, Лучше использовать <Link to={} />*/}
      <button onClick={goHome}>go Home</button>

      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={`/posts/${id}/edit`}>Edit this post</Link>

    </div>
  )
}

export { Singlepage }
