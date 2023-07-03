import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Vieweachcamp = (props: Props) => {
  return (
    <div className=" grid grid-cols-8 text-center gap-2">
      <div className="flex flex-col gap-4 flex-wrap rounded-md ">
        <h1 className="font-semibold min-h-16 p-1 py-2">Brand</h1>
        <div>1</div>
        <div>2</div>
      </div>
      <div className="flex flex-col gap-4 flex-wrap rounded-md bg-gray-50">
        <h1 className="font-semibold min-h-16 p-1">Campaign Name</h1>
        <div>1</div>
        <div>2</div>
      </div>
      <div className="flex flex-col gap-4 flex-wrap rounded-md ">
        <h1 className="font-semibold min-h-16 p-1">Campaign Dates</h1>
        <div>1</div>
        <div>2</div>
      </div>
      <div className="flex flex-col gap-4 flex-wrap rounded-md bg-gray-50">
        <h1 className="font-semibold min-h-16 p-1">Campaign Type</h1>
        <div>1</div>
        <div>2</div>
      </div>
      <div className="flex flex-col gap-4 flex-wrap rounded-md ">
        <h1 className="font-semibold min-h-16 p-1">Status</h1>
        <div>1</div>
        <div>2</div>
      </div>
      <div className="flex flex-col gap-4 flex-wrap rounded-md bg-gray-50">
        <h1 className="font-semibold min-h-16 p-1">Prefix/ Shortcode/ ID</h1>
        <div>1</div>
        <div>2</div>
      </div>
      <div className="flex flex-col gap-4 flex-wrap rounded-md ">
        <h1 className="font-semibold min-h-16 p-1">Campaign Manager</h1>
        <div>1</div>
        <div>2</div>
      </div>
      <div className="flex flex-col gap-4 flex-wrap rounded-md bg-gray-50">
        <h1 className="font-semibold min-h-16 p-1">View Campign Details</h1>
        <div>
          <input
            type="submit"
            className="input no-underline text-gray-500 input-ghost focus:outline-none btn btn-link"
            value={"View"}
          />
        </div>
        <div>
          {" "}
          <Link
            to={"fdsacds"}
            type="submit"
            className="input no-underline text-gray-500  input-ghost focus:outline-none btn btn-link"
          >
            View{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Vieweachcamp;
