import { Button, Input } from "@nextui-org/react";
import JurnalBox from "../components/JurnalBox";

const Catatan = () => {
  return (
    <>
      {/* for Catatan Page */}
      <div className="p-6">
        <div className="flex justify-center">
          <div className="flex w-1/2">
            <Input className="" placeholder="Search for the Journal . . . " />
          </div>
        </div>
        <div className="flex justify-center">
          <Button color="primary" className="text-base py-5 px-5 font-semibold">
            Create Notes
          </Button>
        </div>
        <div className="flex justify-center">
          <JurnalBox />
        </div>
      </div>
    </>
  );
};

export default Catatan;
