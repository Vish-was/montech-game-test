import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { IModalProps } from "../../../interface/modal.props";

const ModalWidget: FunctionComponent<IModalProps> = (props) => {
  const { children, show, onClose } = props;
  const ref: any = useRef(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return show ? (
    <div className="flex justify-center items-center bg-[rgb(0,0,0,0.5)] overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl duration-500">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div
            className="duration-500 flex items-start justify-between p-5"
            ref={ref}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ModalWidget;
