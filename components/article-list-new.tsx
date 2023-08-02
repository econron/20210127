import type { NextPage } from "next";
import StickyNotesContainer from "./sticky-notes-container";

const ArticleListNew: NextPage = () => {
  return (
    <div className="relative bg-white w-[334px] h-[299px] overflow-hidden flex flex-row pt-1 px-0 pb-0 box-border items-start justify-start gap-[5px] text-center text-xs text-white font-inter">
      <StickyNotesContainer
        dimensionCode="/home.svg"
        dimensionCodeText="/file-dock.svg"
        dimensionCodeImageUrl="/materials-light.svg"
      />
      <div className="bg-gainsboro-100 w-56 h-[299px] overflow-hidden shrink-0 flex flex-col py-20 px-[43px] box-border items-center justify-start">
        <div className="w-[138px] h-[117px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[24px]">
          <div className="rounded-8xs bg-gray w-[133px] h-6 overflow-hidden shrink-0 flex flex-col py-1 px-0 box-border items-center justify-start">
            <b className="relative inline-block w-[111px] h-[15px] shrink-0">
              UPLOAD
            </b>
          </div>
          <div className="rounded-8xs bg-white w-[138px] h-[21px] overflow-hidden shrink-0 flex flex-col items-center justify-center text-5xs text-black">
            <b className="relative inline-block w-[118px] h-[11px] shrink-0">
              Enter the PDF URL.…
            </b>
          </div>
          <div className="rounded-8xs bg-mediumblue-100 w-[133px] h-6 overflow-hidden shrink-0 flex flex-col py-1 px-0 box-border items-center justify-start">
            <b className="relative inline-block w-[111px] h-[15px] shrink-0">
              GENERATE
            </b>
          </div>
        </div>
        <b className="relative inline-block text-black w-[51px] h-[11px] shrink-0 mt-[-89px]">
          or
        </b>
      </div>
    </div>
  );
};

export default ArticleListNew;
