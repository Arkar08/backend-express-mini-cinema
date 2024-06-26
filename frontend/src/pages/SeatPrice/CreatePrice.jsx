/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { PriceContext } from "../../context/PriceContext";
import { dataRow, dataSeatNo } from "../../Data/data";
import { RoomContext } from "../../context/RoomContext";

const CreatePrice = () => {
  const {
    active,
    handleActive,
    postRoom,
    postPrice,
    handleSeatNo,
    handleSeatRow,
    savePrice,
  } = useContext(PriceContext);
  const { rooms } = useContext(RoomContext);
  return (
    <Dialog
      size="xs"
      open={active}
      handler={handleActive}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardBody className="flex flex-col gap-4 relative">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-red-400 text-center"
          >
            New Price
          </Typography>
          <RxCross2
            size={26}
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleActive}
          />
          <div className="flex w-[100%] flex-col gap-6 mt-6">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Room
            </Typography>
            <Select size="md" label="Select RoomName" onChange={postRoom}>
              {rooms
                ?.sort((a, b) => {
                  return a.roomName.localeCompare(b.roomName);
                })
                .map((c) => {
                  return (
                    <Option key={c._id} value={c._id}>
                      {c.roomName}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="flex w-[100%] flex-col gap-6">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Row Name
            </Typography>
            <Select size="md" label="Select RowName" onChange={handleSeatRow}>
              {dataRow.map((d, index) => {
                return (
                  <Option key={index} value={d}>
                    {d}
                  </Option>
                );
              })}
            </Select>
          </div>
          <div className="flex w-[100%] flex-col gap-6">
            <Typography className="-mb-2 text-red-400" variant="h6">
              Seat No
            </Typography>
            <Select size="md" label="Select SeatNo" onChange={handleSeatNo}>
              {dataSeatNo.map((d, index) => {
                return (
                  <Option key={index} value={d.toString()}>
                    {d}
                  </Option>
                );
              })}
            </Select>
          </div>
          <Typography className="-mb-2 text-red-400" variant="h6">
            Price
          </Typography>
          <Input
            label="Price"
            size="lg"
            defaultValue={0}
            type="number"
            onChange={postPrice}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={savePrice} fullWidth>
            Save
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default CreatePrice;
