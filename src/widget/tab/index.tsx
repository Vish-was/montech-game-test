import React, { FunctionComponent } from "react";
import { ITabProps } from "../../../interface/tab.props";

const TabWidget: FunctionComponent<ITabProps> = (props) => {
  const { tab, setSelectedTab, className, textClassName, selectTab } = props;
  return (
    <div className={`flex w-full cursor-pointer ${className ?? ""}`}>
      {tab.map((tab, index) => (
        <p
          key={index}
          className={`text-title mr-5 font-normal text-[14px] sm:text-[18px] ${
            textClassName ?? ""
          } ${
            selectTab === tab
              ? "border-4 border-solid border-black border-t-0 border-x-0 pb-2"
              : ""
          }
          
          
          `}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </p>
      ))}
    </div>
  );
};

export default TabWidget;
