import React from "react";

type Props = {};

const CreateDetailSec = (props: Props) => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div>
        <h1 className="underline">Brand</h1>
        <div className="p-2">
          <label className="label-text flex flex-row items-center gap-2">
            <input
              name="radio-brand"
              title="radio-brand"
              type="radio"
              className="radio"
            />
            <span className="mt-1">Shoprite</span>
          </label>
          <label className="label-text flex flex-row items-center gap-2">
            <input
              name="radio-brand"
              title="radio-brand"
              type="radio"
              className="radio"
            />
            <span className="mt-1">Checkers</span>
          </label>
        </div>
      </div>
      <div>
        <h1 className="underline">Dates</h1>
        <label className="label-text p-2">
          <span>From</span> <input type="date" className="input" />
        </label>
        <label className="label-text p-2">
          <span>To</span> <input type="date" className="input" />
        </label>
      </div>
      <div>
        <h1 className="underline">
          Type the Name of the participating product
        </h1>
        <label className="label-text p-2 flex flex-row gap-2">
          <button className="btn btn-square" title="btnInfo">
            <i className="glyphicon glyphicon-info-sign px-1" />
          </button>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Product Name"
          />
        </label>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <h1 className="underline">Select a campaign type</h1>
          <div>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
              />
              <span className="mt-1">Auto Entry</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
              />
              <span className="mt-1">MMA Reward</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
              />
              <span className="mt-1">Knect</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
              />
              <span className="mt-1">USSD</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
              />
              <span className="mt-1">WhatsApp</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
              />
              <span className="mt-1">SMS</span>
            </label>
          </div>
        </div>
        <div className="flex-1 flex  gap-2 flex-wrap border rounded-md border-gray-100">
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Enter Campaign ID</h1>
            <input
              type="text"
              className="input input-bordered"
              title="CampID"
            />
          </div>
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Enter Production Key</h1>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>Pool Name</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>Pool ID</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>API Key</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
          </div>
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Enter Details Below</h1>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>FREI Code</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>Prefix</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
          </div>
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Enter Prefix Below</h1>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>Prefix</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
          </div>
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Enter Keyword Below</h1>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>Keyword</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="underline">Select a campaign mechanic</h1>
        <div>
          <label className="label-text p-2 flex flex-row gap-2">
            <input
              type="radio"
              className="radio input-bordered"
              name="mechanic"
            />
            <span className="mt-1">Randomized Real Time</span>
          </label>
          <label className="label-text p-2 flex flex-row gap-2">
            <input
              type="radio"
              className="radio input-bordered"
              name="mechanic"
            />
            <span className="mt-1">Fastest Fingers First</span>
          </label>
          <label className="label-text p-2 flex flex-row gap-2">
            <input
              type="radio"
              className="radio input-bordered"
              name="mechanic"
            />
            <span className="mt-1">Post Campaign</span>
          </label>
          <label className="label-text p-2 flex flex-row gap-2">
            <input
              type="radio"
              className="radio input-bordered"
              name="mechanic"
            />
            <span className="mt-1">Weekly Automated Draws</span>
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <span>
          By using the service, you agree to be bound by our Terms and
          Conditions.
        </span>
      </div>
    </div>
  );
};

export default CreateDetailSec;
