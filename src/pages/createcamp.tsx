import CreateDetailSec from "../component/createDetailSec";
import CreateLimitSec from "../component/createLimitSec";
import CreatePrizeSec from "../component/createPrizeSec";

type Props = {};

const Createcamp = (props: Props) => {
  return (
    <div className="grid grid-rows-4">
      <div className="row-span-2">
        <CreateDetailSec />
      </div>
      <div className="row-span-1 border-y py-4">
        <CreatePrizeSec />
      </div>
      <div className="row-span-1">
        <CreateLimitSec />
      </div>
      <div className="flex justify-center ">
        <button className="btn btn-lg btn-neutral">Submit</button>
      </div>
    </div>
  );
};

export default Createcamp;
