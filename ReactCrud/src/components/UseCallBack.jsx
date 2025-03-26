import React, { useCallback, useState } from "react";
import ChildCForUseCallBack from "./ChildCForUseCallBack";

function UseCallBack() {
  const [add, setAdd] = useState(0);
  const [Minus, setMinus] = useState(100);

  const callback = useCallback(() => {
    // this func make memo not to work
    // so we need to use Callback here
  }, [add]);
  //   const doSum = () => {
  //     // this func make memo not to work
  //     // so we need to use Callback here
  //   };

  return (
    <>
      <ChildCForUseCallBack func={callback} />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      {add} <br />
      <button onClick={() => setMinus(Minus - 1)}>Minus</button>
      {Minus}
    </>
  );
}

export default UseCallBack;
