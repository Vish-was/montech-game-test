import React, { FunctionComponent } from "react";
import Select from "react-select";
import { ISelectProps } from "../../../interface/select.props";

const SelectWidget: FunctionComponent<ISelectProps> = (props) => {
  const { handleselect, value, option } = props;
  return (
    <Select
      options={option}
      onChange={handleselect}
      value={value}
      className="react-select-container border border-solid border-[#E7E7E7]"
      classNamePrefix="react-select"
    />
  );
};

export default SelectWidget;
