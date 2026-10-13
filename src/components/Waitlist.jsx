import { useState } from "react";

function Waitlist() {
  const [teams, setTeams] = useState(0);

  function handleJoin() {
    setTeams(teams + 1);
  }

  function handleClear() {
    setTeams(0);
  }

  return (
    <div className="mx-20 mt-8 flex items-center justify-between rounded-x1 border-2 boder-[#000000] bg-[#EEEEEE] p-6">
      <div>
        <h3 className="text-2x1 font-bold">
          Cloudline Enterprise is coming soon.
        </h3>
        <p className="mt-1 text-x1">
          {teams}teams joined the waitlist.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-1g bg-[#C82957] px-8 py-3 text-x1 font-bold text-[#EEEEEE]"
          onClick={handleJoin}
        >
          Join
        </button>
        <button
          className="cursor-pointer rounded-1g border-2 border border-[#000000] px-8 py-3 text-x1 font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Waitlist;