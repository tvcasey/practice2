import React, { useState } from "react";
import Checkbox from "@abcd19/st-grid";
import "@abcd19/st-grid/dist/index.css";

function Ckbox() {
  let [value, setValue] = useState(false);

  const Choose = setValue => {
    setValue(true);
  };

  return (
    <div>
      <div>Checkbox</div>
      <Checkbox value={value} onChange={Choose} />
    </div>
  );
}
export default Ckbox;