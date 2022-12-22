import React, { FunctionComponent } from "react";
import { Coinbase, MeatMask } from "../../../assests/images";
import ButtonWidget from "../../widget/button";
import ModalWidget from "../../widget/modal";

const IndexAuth: FunctionComponent = (props: any) => {
  const {
    metaMaskAlert,
    setMetaMaskAlert,
    requestMetaMaskConnection,
    installMetaMaskOnboarding,
  } = props;

  return (
    <>
      <div className="text-center mt-16 px-4">
        <h1 className="font-bold text-[32px] sm:text-[46px] leading-[40px] sm:leading-[63px]">
          Welcome to Chess Games
        </h1>
        <p className="font-normal text-[14px] sm:text-[16px] text-[#717171] leading-[21.98px]">
          Sign in with your wallet to be able to authenticate and play games
        </p>

        <div className="mt-16">
          <ButtonWidget
            handleSubmit={() => requestMetaMaskConnection()}
            text="Sign in with metamask"
            className="bg-[#438FFE] w-[300px] sm:w-[401px] text-white rounded-full !h-12 text-left pl-[30px] sm:pl-[50px] text-base sm:text-[18px] font-semibold"
            icon={
              <picture className="pr-[25px] sm:pr-[60px]">
                <img
                  src={MeatMask.src}
                  alt=""
                  className="w-[26px] h-[23px] inline"
                />
              </picture>
            }
          />
        </div>
        <div className="mt-5">
          <ButtonWidget
            handleSubmit={() => {}}
            disabled
            text="Sign in with Coinbase Wallet"
            className="bg-[transparent] border border-solid border-black w-[300px] sm:w-[401px] text-black rounded-full !h-12 text-left pl-[30px] sm:pl-[50px] text-base sm:text-[18px] font-semibold"
            icon={
              <picture className="pr-[15px] sm:pr-[40px]">
                <img
                  src={Coinbase.src}
                  alt=""
                  className="w-[26px] h-[23px] inline"
                />
              </picture>
            }
          />
        </div>
        <p className="font-semibold text-[18px] leading-[30px] hover:underline cursor-pointer mt-10">
          Show more options
        </p>
      </div>
      <ModalWidget
        show={metaMaskAlert}
        onClose={() => {
          setMetaMaskAlert(false);
        }}
      >
        <div className="p-10">
          <h1 className="font-bold text-2xl text-[#ff6b00]">
            Meta Mask not Detected
          </h1>
          <div className="flex align-center justify-center mt-7">
            <ButtonWidget
              className="border-2 border-solid border-[#929292] text-[#929292] w-[100px] !h-10 rounded-md font-medium mr-6"
              text="Close"
              handleSubmit={() => {
                setMetaMaskAlert(false);
              }}
            />
            <ButtonWidget
              className="bg-[#438FFE] text-white w-[100px] !h-10 rounded-md font-medium"
              text="Install"
              handleSubmit={() => installMetaMaskOnboarding()}
            />
          </div>
        </div>
      </ModalWidget>
    </>
  );
};

export default IndexAuth;
