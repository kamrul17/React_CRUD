import React, { memo } from "react";

function ChildCForUseCallBack({ doSum }) {
  console.log("$$$$$$$$$$$$$$$$");

  return <div>ChildCForUseCallBack</div>;
}

export default memo(ChildCForUseCallBack);
