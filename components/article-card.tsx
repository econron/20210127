import type { NextPage } from "next";

const ArticleCard: NextPage = () => {
  return (
    <div className="relative w-[173px] h-[276px] overflow-hidden shrink-0 text-left text-5xs text-fuchsia font-inter">
      <div className="absolute top-[68px] left-[49px] rounded-10xs bg-mediumblue-200 w-[59px] h-[15px] overflow-hidden flex flex-col py-[3px] px-0.5 box-border items-end justify-end text-center text-xs text-white font-arial">
        <div className="relative flex items-center justify-center w-[54px] h-2 shrink-0">
          GO
        </div>
      </div>
      <div className="absolute top-[92px] left-[7px] rounded-10xs bg-yellow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-8 overflow-hidden flex flex-col pt-[3px] px-[5px] pb-0 box-border items-start justify-start gap-[4px]">
        <div className="relative inline-block w-[118px] h-[9px] shrink-0">
          Distributed Systems
        </div>
        <div className="text-8xs text-black inline-block w-[143px] h-[13px] shrink-0 ml-2">
          This concept is created in xxxx. Originally, Dr.xxx wanted to
          distribute his information, and not to stop the system. …
        </div>
      </div>
      <div className="absolute top-[130px] left-[7px] rounded-10xs bg-yellow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-8 overflow-hidden flex flex-col pt-[3px] px-[5px] pb-0 box-border items-start justify-start gap-[4px]">
        <div className="relative inline-block w-[118px] h-[9px] shrink-0">
          Distributed Systems
        </div>
        <div className="text-8xs text-black inline-block w-[143px] h-[13px] shrink-0 ml-2">
          This concept is created in xxxx. Originally, Dr.xxx wanted to
          distribute his information, and not to stop the system. …
        </div>
      </div>
      <div className="absolute top-[168px] left-[7px] rounded-10xs bg-yellow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-8 overflow-hidden flex flex-col pt-[3px] px-[5px] pb-0 box-border items-start justify-start gap-[4px]">
        <div className="relative inline-block w-[118px] h-[9px] shrink-0">
          Distributed Systems
        </div>
        <div className="text-8xs text-black inline-block w-[143px] h-[13px] shrink-0 ml-2">
          This concept is created in xxxx. Originally, Dr.xxx wanted to
          distribute his information, and not to stop the system. …
        </div>
      </div>
      <div className="absolute top-[206px] left-[7px] rounded-10xs bg-yellow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-8 overflow-hidden flex flex-col pt-[3px] px-[5px] pb-0 box-border items-start justify-start gap-[4px]">
        <div className="relative inline-block w-[118px] h-[9px] shrink-0">
          Distributed Systems
        </div>
        <div className="text-8xs text-black inline-block w-[143px] h-[13px] shrink-0 ml-2">
          This concept is created in xxxx. Originally, Dr.xxx wanted to
          distribute his information, and not to stop the system. …
        </div>
      </div>
      <div className="absolute top-[244px] left-[7px] rounded-10xs bg-yellow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-8 overflow-hidden flex flex-col pt-[3px] px-[5px] pb-0 box-border items-start justify-start gap-[4px]">
        <div className="relative inline-block w-[118px] h-[9px] shrink-0">
          Distributed Systems
        </div>
        <div className="text-8xs text-black inline-block w-[143px] h-[13px] shrink-0 ml-2">
          This concept is created in xxxx. Originally, Dr.xxx wanted to
          distribute his information, and not to stop the system. …
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[148px] h-3.5 overflow-hidden flex flex-row pt-0 px-0 pb-0.5 box-border items-center justify-start text-xs text-black">
        <div className="relative inline-block w-[72px] h-3 shrink-0">
          Sentence
        </div>
        <div className="relative rounded-10xs bg-white box-border w-[79px] h-3 overflow-hidden shrink-0 ml-[-3px] border-[1px] border-solid border-lightgray-100" />
      </div>
      <div className="absolute top-[20px] left-[0px] w-[148px] h-[13px] overflow-hidden flex flex-row items-center justify-start gap-[20px] text-xs text-black">
        <div className="relative inline-block w-[49px] h-3 shrink-0">Date</div>
        <img
          className="relative rounded-10xs w-[79px] h-3 overflow-hidden shrink-0"
          alt=""
          src="/frame-5.svg"
        />
      </div>
      <div className="absolute top-[40px] left-[0px] w-[148px] h-[13px] overflow-hidden flex flex-row items-center justify-start text-xs text-black">
        <div className="relative inline-block w-[70px] h-3 shrink-0">
          Article Title
        </div>
        <div className="relative rounded-10xs bg-white box-border w-[79px] h-3 overflow-hidden shrink-0 ml-[-1px] border-[1px] border-solid border-lightgray-100" />
      </div>
    </div>
  );
};

export default ArticleCard;
