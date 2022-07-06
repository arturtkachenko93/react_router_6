import { useEffect, useState } from "react";

export default function About() {
  // const [count, setCount] = useState(0);
  // const [counts, setCounts] = useState(0);
  //
  // console.log('1');
  //
  // const handler = () => {
  //   setCount((count) => count += 1 );
  // }
  //
  // useEffect(() => {
  //   console.log('2');
  //
  //   return () => {
  //     console.log('3');
  //   };
  // }, [counts]);
  const f = () => {
    const res = [];
    let i = 0;
    while (i < 5) {
      res.push(() => i);
      i++;
    }
    return res;;
  };

  console.log(f()[4]());
  return  (
    <button type='button' onClick={() => {}}>Click</button>
  )
}



