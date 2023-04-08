import { memo } from "react";

const TestMemo = memo(({ style, title }) => {
  return <h2 style={style}>{title}</h2>;
});

export default TestMemo;
