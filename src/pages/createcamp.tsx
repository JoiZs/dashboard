import CreateDetailSec from "../component/createDetailSec";
import CreateLimitSec from "../component/createLimitSec";
import CreatePrizeSec from "../component/createPrizeSec";

type Props = {};

const Createcamp = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div>
        <CreateDetailSec />
      </div>
      <div className="border-y py-4">
        <CreatePrizeSec />
      </div>
      <div>
        <CreateLimitSec />
      </div>
      <div className="flex justify-center">
        <button className="btn btn-lg btn-neutral">Submit</button>
      </div>
    </div>
  );
};

export default Createcamp;
