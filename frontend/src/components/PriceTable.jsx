const PriceTable = () => {
  return (
    <table className="border-collapse w-[95%] border mt-4 mx-auto">
      <thead>
        <tr className="text-center p-8 border bg-red-500 text-white">
          <th>Id</th>
          <th>RoomName</th>
          <th>RowName</th>
          <th>SeatType</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center  border text-red-500">
          <td className="p-2">100</td>
          <td className="p-2">I</td>
          <td className="p-2">A</td>
          <td className="p-2 text-green-500">Single</td>
          <td className="p-2 text-right">5000</td>
        </tr>
        <tr className="text-center  border text-red-500">
          <td className="p-2">100</td>
          <td className="p-2">I</td>
          <td className="p-2">A</td>
          <td className="p-2 text-green-500">Single</td>
          <td className="p-2 text-right">5000</td>
        </tr>
        <tr className="text-center border text-red-500">
          <td className="p-2">100</td>
          <td className="p-2">I</td>
          <td className="p-2">A</td>
          <td className="p-2 text-green-500">Single</td>
          <td className="p-2 text-right">5000</td>
        </tr>
        <tr className="text-center border text-red-500">
          <td className="p-2">100</td>
          <td className="p-2">II</td>
          <td className="p-2">A</td>
          <td className="p-2 text-green-500">Single</td>
          <td className="p-2 text-right">5000</td>
        </tr>
        <tr className="text-center border text-red-500">
          <td className="p-2">100</td>
          <td className="p-2">I</td>
          <td className="p-2">K</td>
          <td className="p-2 text-blue-500">Couple</td>
          <td className="p-2 text-right">10000</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;