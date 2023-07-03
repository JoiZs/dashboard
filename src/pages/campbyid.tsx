import React from "react";

type Props = {};

const Campbyid = (props: Props) => {
  return (
    <div className="grid grid-cols-5 h-full gap-10 max-w-6xl w-full m-auto">
      <ul className="flex flex-col gap-10 justify-center">
        <li className="h-12">Prizes</li>
        <li className="h-12">Start Date</li>
        <li className="h-12">End Date</li>
        <li className="h-12">Weekly Draw</li>
      </ul>
      <div className="col-span-2 flex flex-col gap-10 justify-center">
        <span className="h-12">Previews</span>
        <input
          type="date"
          className="input focus:outline-none input-md"
          title="startDate"
        />
        <input
          type="date"
          className="input focus:outline-none input-md"
          title="startDate"
        />
        <div className="h-12"></div>
      </div>
      <div className="flex flex-col gap-10 justify-center">
        <button className="btn btn-md">Disable</button>
        <button className="btn btn-md">Edit</button>
        <button className="btn btn-md">Extend</button>
        <button className="btn btn-md">View Winners</button>
      </div>
      <div className="flex flex-col gap-10 justify-center">
        <button className="btn btn-md">Delete</button>
        <div className="h-12"></div>
        <div className="h-12"></div>
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default Campbyid;
