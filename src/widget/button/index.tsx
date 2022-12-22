import React, { FunctionComponent } from "react";
import { IButtonProps } from "../../../interface/button.props";

const ButtonWidget: FunctionComponent<IButtonProps> = (props) => {
  const { text, className, icon, handleSubmit, disabled } = props;
  return (
    <button
      disabled={disabled ?? false}
      className={`w-full cursor-pointer disabled:bg-[#BFBFBF] disabled:cursor-not-allowed h-full ${
        className ?? ""
      }`}
      onClick={handleSubmit}
    >
      {icon ?? ""}
      {text}
    </button>
  );
};

export default ButtonWidget;
