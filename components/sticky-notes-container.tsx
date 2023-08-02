import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type StickyNotesContainerType = {
  dimensionCode?: string;
  dimensionCodeText?: string;
  dimensionCodeImageUrl?: string;

  /** Style props */
  terminologyColor?: Property.Color;
  stickyNotesColor?: Property.Color;
};

const StickyNotesContainer: NextPage<StickyNotesContainerType> = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeImageUrl,
  terminologyColor,
  stickyNotesColor,
}) => {
  const articleListStyle: CSS.Properties = useMemo(() => {
    return {
      color: terminologyColor,
    };
  }, [terminologyColor]);

  const terminologyStyle: CSS.Properties = useMemo(() => {
    return {
      color: stickyNotesColor,
    };
  }, [stickyNotesColor]);

  return (
    <div className="relative w-[100px] h-[132px] overflow-hidden shrink-0 text-left text-xs text-black font-inter">
      <div className="absolute top-[0px] left-[0px] w-[55px] h-6 overflow-hidden flex flex-row pt-px pb-0 pr-[31px] pl-0 box-border items-center justify-start text-center text-snow font-iowan-old-style">
        <img className="relative w-6 h-6" alt="" src="/database1.svg" />
        <div className="bg-mediumblue-100 w-[53px] h-[23px] overflow-hidden shrink-0 flex flex-col items-end justify-center ml-[-22px]">
          <b className="relative inline-block w-[37px] h-[15px] shrink-0">
            Scott
          </b>
        </div>
      </div>
      <div className="absolute top-[40px] left-[1px] w-[93px] h-6 overflow-hidden flex flex-row items-center justify-start">
        <img className="relative w-6 h-6" alt="" src={dimensionCode} />
        <div className="relative inline-block w-[70px] h-3 shrink-0 ml-[-1px]">
          Home
        </div>
      </div>
      <div className="absolute top-[65px] left-[1px] w-[99px] h-[67px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-6 h-[21px]"
          alt=""
          src={dimensionCodeText}
        />
        <div
          className="absolute top-[4px] left-[24px] text-mediumblue-100 inline-block w-[70px] h-3"
          style={articleListStyle}
        >
          Article List
        </div>
        <div
          className="absolute top-[26px] left-[24px] inline-block w-[70px] h-3"
          style={terminologyStyle}
        >
          Terminology
        </div>
        <div className="absolute top-[48px] left-[24px] inline-block w-[75px] h-3">
          Sticky Notes
        </div>
        <img
          className="absolute top-[21px] left-[1px] w-6 h-6"
          alt=""
          src={dimensionCodeImageUrl}
        />
        <img
          className="absolute top-[43px] left-[1px] w-6 h-6"
          alt=""
          src="/notebook.svg"
        />
      </div>
    </div>
  );
};

export default StickyNotesContainer;
