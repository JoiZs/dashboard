import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold">Welcome</h1>
      <p>Use the menu on the left to navigate through the portal.</p>
    </div>
  );
};

export default Landing;
