import PriceTable from "./PriceTable";
import { Button, Spinner } from "@material-tailwind/react";
import CreatePrice from "./CreatePrice";
import { useContext } from "react";
import { PriceContext } from "../../context/PriceContext";
import PricePagination from "./PricePagination";

const SeatPrice = () => {
  const { handleActive, error, isError, isLoading } = useContext(PriceContext);
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search price..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <Button className="text-red-500" onClick={handleActive}>
          New{" "}
        </Button>
        <CreatePrice />
      </div>
      <hr />
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <PriceTable />
      )}
      {isError && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
      <PricePagination />
    </div>
  );
};

export default SeatPrice;
