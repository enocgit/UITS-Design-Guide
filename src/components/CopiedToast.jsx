/* eslint-disable react/prop-types */
import React from "react";

const CopiedToast = React.forwardRef((props, ref) => {
  return (
    <small
      className="bg-neutral-700 text-white p-1 rounded-sm absolute right-[-4rem] hidden"
      ref={ref}
    >
      copied!
    </small>
  );
});

CopiedToast.displayName = "CopiedToast";

export default CopiedToast;
