import Vieweachcamp from "../component/vieweachcamp";

type Props = {};

const Viewcamp = (props: Props) => {
  return (
    <div className="grid grid-rows-4 h-full">
      <div className="row-span-1 flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2">
          <button className="btn">Create Campaign</button>
          <button className="btn">Sort filter applied</button>
          <button className="btn">Filterable by date</button>
        </div>
        <div>
          <select
            title="Level"
            className="select border rounded-lg border-gray-100 select-md text-lg focus:outline-none"
          >
            <option>Live1</option>
            <option>Live2</option>
            <option>Live3</option>
          </select>
        </div>
        <div className="max-w-md w-full flex flex-row">
          <input
            type="text"
            placeholder="Search"
            className="input w-full focus:outline-none input-bordered border-dotted"
          />
          <button title="Info" className="btn btn-square btn-ghost">
            <i className="glyphicon glyphicon-info-sign text-2xl" />
          </button>
        </div>
      </div>
      <div className="row-span-3">
        <Vieweachcamp />
      </div>
    </div>
  );
};

export default Viewcamp;
