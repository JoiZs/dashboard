import React from "react";

type Props = {};

const Topnav = (props: Props) => {
  return (
    <div className="grid grid-cols-6 w-full ">
      <div className="text-3xl">Logo</div>
      <div className="grid col-span-5">
        <form className="flex flex-row col-span-3 gap-2">
          <input
            placeholder={`Search Campaign name, mobile number or Hybris ID`}
            type="text"
            className="input input-lg flex-1 focus:outline-none input-bordered"
          />
          <button className="btn btn-lg">Submit</button>
        </form>
        <div className="col-start-5 col-end-6 flex justify-end">
          <button className="btn btn-lg">
            <i className="glyphicon glyphicon-off px-1" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
