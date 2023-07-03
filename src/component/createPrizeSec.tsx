import { Fragment } from "react";

type Props = {};

const CreatePrizeSec = (props: Props) => {
  return (
    <Fragment>
      <h1 className="capitalize text-2xl">Real Time Campaign</h1>
      <div className="flex flex-row">
        <label className="label cursor-pointer label-text max-w-4xl w-full gap-2 flex flex-col justify-start items-start p-10">
          <h2 className=" text-gray-500 text-xl font-normal">Select Prize</h2>
          <div className="max-w-xs w-full">
            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-prize" className="radio" />
              <span className="label-text mt-1">Voucher</span>
            </label>
            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-prize" className="radio" />
              <span className="label-text mt-1">Airtime</span>
            </label>

            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-prize" className="radio" />
              <span className="label-text mt-1">Data</span>
            </label>
            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-prize" className="radio" />
              <span className="label-text mt-1">Airtime/Data</span>
            </label>
          </div>
        </label>
        <label className="label cursor-pointer label-text max-w-4xl w-full gap-2 flex flex-col items-start">
          <div className="flex justify-start flex-col">
            <h2 className="text-gray-500 text-xl font-normal">
              Enter total amount for prizes:
            </h2>
            <input type="text" className="input input-md input-bordered" />
          </div>
          <div className="max-w-xs w-full">
            <h2 className="p-2 text-gray-500 text-xl font-normal">
              Real Time Campaign - Select denominations
            </h2>
            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-deno" className="radio" />
              <span className="label-text mt-1">
                R.xx airtime/.xxGB/R.xx voucher
              </span>
            </label>
            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-deno" className="radio" />
              <span className="label-text mt-1">
                {" "}
                R.xx airtime/.xxGB/R.xx voucher
              </span>
            </label>

            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-deno" className="radio" />
              <span className="label-text mt-1">
                {" "}
                R.xx airtime/.xxGB/R.xx voucher
              </span>
            </label>
            <label className="flex flex-row label label-text justify-start gap-2">
              <input type="radio" name="radio-limit-deno" className="radio" />
              <span className="label-text mt-1">
                {" "}
                R.xx airtime/.xxGB/R.xx voucher
              </span>
            </label>
          </div>
        </label>
      </div>
    </Fragment>
  );
};

export default CreatePrizeSec;
