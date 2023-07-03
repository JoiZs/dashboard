import React, { useState } from "react";
import CreateDetailPopUp from "./createDetailPopUp";

type Props = {};

const CreateDetailSec = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueMech, setSelectedValueMech] = useState("");

  const handleRadioChange = (event: any) => {
    setSelectedValue(event.target.value);

    // @ts-ignore
    // window.my_modal_2.showModal();
  };

  const handleRadioChangeMech = (event: any) => {
    setSelectedValueMech(event.target.value);

    // @ts-ignore
    // window.my_modal_2.showModal();
  };

  return (
    <div className="flex flex-col p-4 gap-4">
      <CreateDetailPopUp
        closeFn={() => {
          setSelectedValue("");
        }}
        title={selectedValue}
      />
      <CreateDetailPopUp
        closeFn={() => {
          setSelectedValueMech("");
        }}
        title={selectedValueMech}
      />
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
                value={"auto"}
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
                checked={selectedValue === "auto"}
                onChange={handleRadioChange}
              />
              <span className="mt-1">Auto Entry</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                value={"mma"}
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
                checked={selectedValue === "mma"}
                onChange={handleRadioChange}
              />
              <span className="mt-1">MMA Reward</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                value={"knect"}
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
                checked={selectedValue === "knect"}
                onChange={handleRadioChange}
              />
              <span className="mt-1">Knect</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                value={"ussd"}
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
                checked={selectedValue === "ussd"}
                onChange={handleRadioChange}
              />
              <span className="mt-1">USSD</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                value={"whatsapp"}
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
                checked={selectedValue === "whatsapp"}
                onChange={handleRadioChange}
              />
              <span className="mt-1">WhatsApp</span>
            </label>
            <label className="label-text p-2 flex flex-row gap-2">
              <input
                value={"sms"}
                type="radio"
                className="radio input-bordered"
                name="shortcodeapi"
                checked={selectedValue === "sms"}
                onChange={handleRadioChange}
              />
              <span className="mt-1">SMS</span>
            </label>
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
              value={"random"}
              checked={selectedValueMech === "random"}
              onChange={handleRadioChangeMech}
            />
            <span className="mt-1">Randomized Real Time</span>
          </label>
          <label className="label-text p-2 flex flex-row gap-2">
            <input
              type="radio"
              className="radio input-bordered"
              name="mechanic"
              value={"fast"}
              checked={selectedValueMech === "fast"}
              onChange={handleRadioChangeMech}
            />
            <span className="mt-1">Fastest Fingers First</span>
          </label>
          <label className="label-text p-2 flex flex-row gap-2">
            <input
              type="radio"
              className="radio input-bordered"
              name="mechanic"
              value={"post"}
              checked={selectedValueMech === "post"}
              onChange={handleRadioChangeMech}
            />
            <span className="mt-1">Post Campaign</span>
          </label>
          <label className="label-text p-2 flex flex-row gap-2">
            <input
              type="radio"
              className="radio input-bordered"
              name="mechanic"
              value={"week"}
              checked={selectedValueMech === "week"}
              onChange={handleRadioChangeMech}
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
