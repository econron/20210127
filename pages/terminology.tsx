import type { NextPage } from "next";
import StickyNotesContainer from "../components/sticky-notes-container";
import ArticleCard from "../components/article-card";

const Terminology: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[299px] overflow-hidden flex flex-row pt-1 px-0 pb-0 box-border items-start justify-start gap-[5px]">
      <StickyNotesContainer
        dimensionCode="/home1.svg"
        dimensionCodeText="/file-dock1.svg"
        dimensionCodeImageUrl="/materials-light1.svg"
        terminologyColor="#000"
        stickyNotesColor="#4d0cd7"
      />
      <div className="bg-gainsboro-100 w-56 h-[299px] overflow-hidden shrink-0 flex flex-row py-[9px] px-1 box-border items-end justify-end gap-[16px]">
        <ArticleCard />
        <div className="rounded-10xs bg-white box-border w-1.5 h-[186px] overflow-hidden shrink-0 flex flex-col py-1.5 px-0 items-center justify-start border-[1px] border-solid border-gainsboro-200">
          <div className="relative rounded-10xs bg-lightgray-200 box-border w-1.5 h-[69px] overflow-hidden shrink-0 border-[1px] border-solid border-gainsboro-200" />
        </div>
      </div>
    </div>
  );
};

export default Terminology;
