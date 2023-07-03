import React from "react";

type Props = {
  title: string;
  closeFn: () => void;
};

const CreateDetailPopUp = (props: Props) => {
  return (
    <dialog
      open={!!props.title}
      onClose={props.closeFn}
      id="my_modal_2"
      className="modal"
    >
      <form method="dialog" className="modal-box">
        {props.title === "sms" && (
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Enter Keyword Below</h1>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>Keyword</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
          </div>
        )}

        {props.title === "week" && <input type="date" className="input " />}

        {props.title === "whatsapp" && (
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Customize for whatsApp</h1>
          </div>
        )}

        {props.title === "auto" && (
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Enter Campaign ID</h1>
            <input
              type="text"
              className="input input-bordered"
              title="CampID"
            />
          </div>
        )}
        {props.title === "mma" && (
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
        )}
        {props.title === "ussd" && (
          <div className=" p-4 flex gap-2 flex-col">
            <h1 className="underline">Enter Prefix Below</h1>
            <div className="flex justify-end">
              <label className="label-text gap-2 flex items-center">
                <span>Prefix</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
          </div>
        )}
        {props.title === "knect" && (
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
        )}
      </form>

      <form
        method="dialog"
        className="modal-backdrop bg-transparent backdrop-blur-sm"
      >
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CreateDetailPopUp;
