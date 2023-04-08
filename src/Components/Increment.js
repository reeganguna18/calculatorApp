import React, { memo, useMemo, useState } from "react";
import TestMemo from "./MemoTest";

const Heading = memo(({ style, title }) => {
  //   console.log("render", title);
  return <h1 style={style}>{title}</h1>;
});

// const Footer = (check, tit) => {
//   const rock = check.style;
//   console.log(check.style, rock);

//   return (
//     <div style={{ rock }}>
//       <h2>reegan {tit}</h2>
//     </div>
//   );
// };
const arr = [
  3, 4, 65, 2, 4, 4, 3, 2, 1, 5, 45, 6, 7, 7, 6, 5, 4, 3, 2, 1, 11, 1, 1, 1,
];

// const duplicate = arr.filter((a, b) => {
//   console.log("dup", arr.indexOf(a), b);
//   return arr.indexOf(a) === b;
// });

// let ab = [1,2,3,4,5]

// let cd = ab.push(6);

// console.log(cd);

let str = "Reegan";
// console.log(str.length);

// console.log("duplicate", duplicate);

function Increment() {
  const [count, setCount] = useState(0);

  const normalStyle = {
    backgroundColor: "green",
    color: "white",
  };

  const memorizedStyle = useMemo(() => {
    return {
      backgroundColor: "red",
      color: "white",
    };
  }, []);

  const normalStyleTest = {
    backgroundColor: "yellow",
    color: "white",
  };

  return (
    <div>
      <div style={normalStyle}>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <Heading style={normalStyle} title="Normal" />
      {/* <Heading style={memorizedStyle} title="Memorized" /> */}
      <Heading style={normalStyleTest} title="Normal" />
      <TestMemo style={normalStyle} title="KaviShree" />
    </div>
  );
}

export default Increment;
