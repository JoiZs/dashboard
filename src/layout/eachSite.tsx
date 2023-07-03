import React from "react";

type Props = {
  title: string;
  children: JSX.Element;
};

const EachSite = (props: Props) => {
  return (
    <div className="grid grid-rows-9 h-full">
      <div className="row-span-1 flex items-center justify-between  border-b-2 ">
        <h1 className="capitalize text-3xl ">{props.title}</h1>
        <span>ePOS Portal</span>
      </div>
      <div className="row-start-2 row-end-[10]">{props.children}</div>
    </div>
  );
};

export default EachSite;
