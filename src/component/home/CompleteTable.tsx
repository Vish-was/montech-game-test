import { useRouter } from "next/router";
import { useMemo } from "react";
import { DUMP_COMPLETE_DATA, COMPLETEHEADER } from "../../utils";
import ButtonWidget from "../../widget/button";
import TableWidget from "../../widget/table";

const CompleteTable = () => {
  const route = useRouter();
  const row = useMemo(() => {
    return DUMP_COMPLETE_DATA.map((data, index) => (
      <tr key={index}>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.gameId}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.limit}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.winner}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.amout_won}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          {data.end_date}
        </td>
        <td className="border-b border-[#F2F2F2] py-4 px-5 text-left text-[#535353] text-[14px]">
          <ButtonWidget
            disabled
            className="w-[123px] !h-10 text-white text-[12px] font-medium bg-[#438FFE] rounded-lg mr-2 lg:mr-6 mb-2 lg:mb-0"
            text="Request to join"
            handleSubmit={() => {}}
          />
          <ButtonWidget
            className="w-[123px] !h-10 text-[#438FFE] text-[12px] font-medium bg-[transparent] rounded-lg border border-[#438FFE] border-solid"
            text="Spectate"
            handleSubmit={() => route.push("/spectated")}
          />
        </td>
      </tr>
    ));
  }, []);
  return (
    <div className="mb-10">
      <TableWidget header={COMPLETEHEADER} row={row} />
    </div>
  );
};

export default CompleteTable;
