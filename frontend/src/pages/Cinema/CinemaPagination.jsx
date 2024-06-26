import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CinemaContext } from "../../context/CinemaContext";

const CinemaPagination = () => {
  const { activeCinema, handle, pages, nextClick, prevClick } =
    useContext(CinemaContext);
  return (
    <div className="flex items-center gap-4 absolute bottom-4 right-2">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prevClick}
        disabled={activeCinema === pages[0] ? true : false}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {pages?.map((p, index) => {
          return (
            <IconButton
              key={index}
              onClick={handle}
              id={p}
              className={activeCinema === p ? "bg-black" : "bg-gray-400"}
            >
              {p}
            </IconButton>
          );
        })}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={nextClick}
        disabled={activeCinema === pages[pages.length - 1] ? true : false}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CinemaPagination;
