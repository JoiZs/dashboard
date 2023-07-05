import React from "react";

type Props = {
  setSideToggleHandler: () => void;
};

const Topnav = (props: Props) => {
  return (
    <div className="grid grid-cols-6 w-full px-7 font-display">
      <div className="text-3xl text-blue-shop flex items-center">
        <i className="bx bxs-smile" />
        <span>Shoprite</span>
      </div>
      <div className="grid col-span-5">
        <form className="flex flex-row col-span-3 items-center">
          <i
            onClick={props.setSideToggleHandler}
            className="glyphicon glyphicon-menu-hamburger p-2 btn btn-square btn-link no-underline hover:no-underline text-xl"
          />

          <input
            placeholder={`Search Campaign name, mobile number or Hybris ID`}
            type="text"
            className="input input-lg flex-1 focus:outline-none input-bordered rounded-r-none rounded-l-full"
          />
          <button
            title="Search"
            className="btn btn-lg rounded-l-none rounded-r-full btn-primary"
          >
            <i className="glyphicon glyphicon-search text-white" />
          </button>
        </form>
        <div className="col-start-5 col-end-6 flex justify-end">
          <button className="btn btn-lg rounded-full">
            <i className="glyphicon glyphicon-off px-1" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
