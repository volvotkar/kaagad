import { useState } from "react";
import PrivacyDialog from "./PrivacyDialog";
import AboutDialog from "./AboutDialog";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const Dialog = () => {
    const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
    const [showAboutDialog, setShowAboutDialog] = useState(false);

    const handlePrivacyDialog = () => {
         setShowPrivacyDialog(!showPrivacyDialog);
    };

    const handleAboutDialog = () => {
         setShowAboutDialog(!showAboutDialog);
    };

    return (
    <>
    { showPrivacyDialog ?(<PrivacyDialog />) :
        showAboutDialog ? (<AboutDialog />) :
        (<div className="bg-slate-900 max-w-[400px] text-slate-50 rounded-xl z-10 absolute flex flex-col items-center p-4 px-6 gap-4">
       <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <p className="text-xl font-semibold">कागद</p>
            <p className="text-sm font-medium"> [kaa-<span className="italic">gad</span>]</p>
        </div>
        <div className="flex w-full items-center justify-between">
            <p className="text-sm font-medium ">paper <span className="italic">(orig. konkani)</span></p>
            <p className="italic overline text-sm font-medium">noun</p>
        </div>
       </div>
         
       <div className="flex flex-col w-full items-center gap-4">
            <p className="w-full text-sm font-medium">a lightweight note taking app for those who love less and seek more.</p>
            <div className="w-full flex justify-between gap-3 text-sm text-center">
                <div className="bg-slate-700 w-full text-slate-300 rounded-md px-2 py-1 cursor-pointer" onClick={handlePrivacyDialog}>privacy</div>
                <div className="bg-slate-700 w-full text-slate-300 rounded-md px-2 py-1 cursor-pointer" onClick={handleAboutDialog}>about</div>
                <a className="bg-slate-700 w-full flex items-center justify-center gap-1 text-slate-300 rounded-md px-2 py-1 cursor-pointer" href="https://github.com/volvotkar/" target="_blank">github <ArrowUpRightIcon className="w-4"/></a>
            </div>
        </div>
        <div className="w-full text-xs text-center text-slate-300 bg-slate-700 rounded-md px-2 py-1">
            <p>Hit cmd/ctrl + k again to return to the app</p>
        </div>
    </div>) }
    </>
  )
}

export default Dialog