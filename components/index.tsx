import type { NextPage } from "next";

const ArticleList: NextPage = () => {
  return (
    <div className="relative bg-white w-[334px] overflow-hidden flex flex-row pt-1 px-0 pb-0 box-border items-start justify-start gap-[2px] text-center text-xs text-snow font-iowan-old-style">
      <div className="flex-1 h-32 overflow-hidden flex flex-row py-0 pr-[30px] pl-0 box-border items-start justify-start">
        <img
          className="relative w-[25px] h-[76px] overflow-hidden shrink-0"
          alt=""
          src="/frame.svg"
        />
        <div className="w-[54px] h-[127px] overflow-hidden shrink-0 flex flex-row py-0 pr-0 pl-px box-border items-center justify-end ml-[-24px]">
          <div className="w-[53px] h-[127px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[80px]">
            <div className="bg-mediumblue-100 w-[53px] h-[23px] overflow-hidden shrink-0 flex flex-col items-end justify-center">
              <b className="relative inline-block w-[37px] h-[15px] shrink-0">
                Scott
              </b>
            </div>
            <img className="relative w-6 h-6" alt="" src="/notebook.svg" />
          </div>
          <img
            className="relative w-[25px] h-[75px] overflow-hidden shrink-0 ml-[-54px]"
            alt=""
            src="/frame1.svg"
          />
        </div>
      </div>
      <div className="flex-1 relative bg-white h-[299px] overflow-hidden text-left text-10xs text-black font-inter">
        <div className="absolute top-[0px] left-[1px] w-[229px] overflow-hidden flex flex-col items-start justify-end">
          <div className="self-stretch relative h-[300px] overflow-hidden shrink-0 bg-[url(/frame-26@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[66px] left-[24px] bg-lime w-[50px] h-[25px] overflow-hidden flex flex-col py-[3px] px-0 box-border items-center justify-start">
              <div className="relative inline-block w-9 h-4 shrink-0">
                This concept is useful for systems need to largely scale. So I
                want to use this for my business.
              </div>
            </div>
            <div className="absolute top-[159px] left-[132px] bg-lime w-[50px] h-[25px] overflow-hidden flex flex-col py-[3px] px-0 box-border items-center justify-start">
              <div className="relative inline-block w-9 h-4 shrink-0">
                This concept is useful for systems need to largely scale. So I
                want to use this for my business.
              </div>
            </div>
            <div className="absolute top-[104px] left-[24px] w-[141px] overflow-hidden flex flex-row items-center justify-start gap-[35px]">
              <div className="flex-1 bg-lime h-[25px] overflow-hidden flex flex-col py-[3px] px-0 box-border items-center justify-start">
                <div className="relative inline-block w-9 h-4 shrink-0">
                  This concept is useful for systems need to largely scale. So I
                  want to use this for my business.
                </div>
              </div>
              <div className="flex-1 relative bg-yellow h-[5px] overflow-hidden mix-blend-multiply" />
            </div>
          </div>
          <div className="rounded-10xs bg-yellow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[95px] h-[29px] overflow-hidden shrink-0 flex flex-col pt-[3px] px-[5px] pb-0.5 box-border items-start justify-start gap-[4px] mt-[-274px] text-9xs text-fuchsia">
            <div className="relative inline-block w-[72px] h-[5px] shrink-0">
              <p className="m-0">synchronously-replicated database</p>
            </div>
            <div className="w-[83px] h-[15px] overflow-hidden shrink-0 flex flex-row py-0 pr-1 pl-0 box-border items-end justify-start text-black">
              <div className="relative inline-block w-[79px] h-[11px] shrink-0">
                varvarvarvar
              </div>
              <div className="rounded-10xs bg-mediumblue-100 w-[18px] overflow-hidden shrink-0 flex flex-col items-center justify-center ml-[-14px] text-10xs text-white">
                <b className="relative">DELETE</b>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[15px] left-[233px] w-[34px] h-[69px] overflow-hidden flex flex-col items-center justify-start gap-[4px] text-8xs text-white">
          <div className="rounded-10xs bg-mediumblue-100 w-[34px] h-[9px] overflow-hidden shrink-0 flex flex-col py-px px-0 box-border items-center justify-start">
            <div className="relative inline-block w-[29px] h-[5px] shrink-0">
              NO NOTES
            </div>
          </div>
          <div className="rounded-10xs bg-lime w-[34px] h-[9px] overflow-hidden shrink-0 flex flex-col py-px px-[3px] box-border items-end justify-start text-black">
            <div className="relative inline-block w-[23px] h-[5px] shrink-0">
              STICKY
            </div>
          </div>
          <div className="w-[34px] h-[43px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[9px] text-mediumblue-100">
            <div className="rounded-10xs bg-yellow w-[34px] h-[9px] overflow-hidden shrink-0 flex flex-col py-px px-0 box-border items-center justify-start">
              <div className="relative inline-block w-[31px] h-[5px] shrink-0">
                Terminology
              </div>
            </div>
            <div className="relative bg-lime w-[26px] h-[25px] overflow-hidden shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
