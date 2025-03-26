import React, { useMemo, useState } from "react";

function UseMemo() {
  const [add, setAdd] = useState(0);
  const [Minus, setMinus] = useState(100);
  const multUseByMemo = useMemo(
    function mult() {
      console.log("@@@@@@@@@@@@@@@@@");
      return add * 10;
    },
    [add]
  );
  //   function mult() {
  //     console.log("@@@@@@@@@@@@@@@@@");
  //     return add * 10;
  //   }
  return (
    <>
      {multUseByMemo} <br />
      <button onClick={() => setAdd(add + 1)}>Add</button>
      {add} <br />
      <button onClick={() => setMinus(Minus - 1)}>Minus</button>
      {Minus}
    </>
  );
}
export default UseMemo;
