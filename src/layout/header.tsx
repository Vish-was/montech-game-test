import React, { FunctionComponent, useMemo } from "react";
import { IHeaderProps } from "../../interface/header.props";
import { FaChessPawn } from "react-icons/fa";
import { useRouter } from "next/router";
import { HEADER_BG_COLOR } from "../utils";

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const { children, metaMaskWallet, metaMaskAccount } = props;
  console.log(props);
  const route = useRouter();
  const isPlay = useMemo(() => {
    return HEADER_BG_COLOR.includes(route.pathname) ? true : false;
  }, [route]);

  return (
    <>
      <div className={`w-full ${isPlay ? "bg-[#202020]" : "bg-[#ebebeb]"}`}>
        <div
          className={`flex py-6 items-center justify-between mx-2 sm:mx-11 ${
            isPlay ? "border-b border-solid border-[#E5E5E5]" : ""
          }`}
        >
          <p
            className={`flex font-bold text-[15px] sm:text-[18px] items-center text-${
              isPlay ? "white" : "black"
            }`}
          >
            CHESS
            <span className="px-1 sm:px-2">
              <FaChessPawn className="text-[#5E6367] w-8 h-8" />
            </span>
            GAMES
          </p>
          {!!metaMaskWallet?.length && !!metaMaskAccount?.length && (
            <div className="">
              <span className="border-0 border-solid bg-[#438FFE] p-2 sm:p-4 rounded-l-lg">
                {metaMaskWallet} ETH
              </span>
              <span
                className={`border-0 border-solid bg-${
                  isPlay ? "[#383531]" : "white"
                } p-2 sm:p-4 rounded-r-lg`}
              >
                {metaMaskAccount.slice(0, 3)}...{" "}
                {metaMaskAccount.split("").reverse().join("").slice(0, 3)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div>{children}</div>
    </>
  );
};

export default Header;
