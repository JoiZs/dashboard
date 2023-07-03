import { Fragment } from "react";

type Props = {};

const CreateLimitSec = (props: Props) => {
  return (
    <Fragment>
      <h1 className="capitalize text-2xl">Campaign limits</h1>
      <h2 className=" p-2 text-gray-500">Select entry limits below</h2>
      <div>
        <label className="label cursor-pointer group max-w-4xl w-full  gap-2">
          <input
            type="radio"
            name="radio-limit"
            className="radio group"
            checked
          />
          <span className="label-text w-full text-left mt-1">
            Limited Total Value
          </span>
          <input
            type="text"
            className="input input-bordered max-w-xs w-full text-black"
            placeholder="Enter Rand amt"
          />
        </label>
        <label className="label cursor-pointer label-text max-w-4xl w-full gap-2">
          <input type="radio" name="radio-limit" className="radio" />
          <span className="label-text w-full text-left mt-1">
            Limited Entries
          </span>
          <div className="max-w-xs w-full">
            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-ent" className="radio" />
              <span className="label-text mt-1">Per Day</span>
            </label>
            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-ent" className="radio" />
              <span className="label-text mt-1">Per Week</span>
            </label>

            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-ent" className="radio" />
              <span className="label-text mt-1">Per Month</span>
            </label>
          </div>
        </label>
      </div>
    </Fragment>
  );
};

export default CreateLimitSec;
