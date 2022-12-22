import React, { FunctionComponent } from "react";
import { ITableProps } from "../../../interface/table.props";

const TableWidget: FunctionComponent<ITableProps> = (props) => {
  const { header, row } = props;
  return (
    <div className="w-full overflow-auto">
      <table className="w-full bg-[#FBFBFB]">
        <thead className="my-6">
          <tr>
            {header.map((value, index) => (
              <th
                className="text-[#929292] text-[14px] font-semibold py-4 px-5 text-left"
                key={index}
              >
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    </div>
  );
};

export default TableWidget;
