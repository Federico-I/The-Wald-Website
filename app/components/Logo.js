import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <img src="/icon.png" height="60" width="60" alt="The Wald" />
      <span className="text-xl font-semibold text-primary-100">
      The Wald
      </span>
    </a>
  )
};

export default Logo;