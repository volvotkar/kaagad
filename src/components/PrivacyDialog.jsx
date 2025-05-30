import { useState } from "react";
import Dialog from "./Dialog";

const PrivacyDialog = () => {
    const [showMainDialog, setShowMainDialog] = useState(false);

    const handleMainDialog = () => {
        setShowMainDialog(!showMainDialog);
    };

    return (
        <>
            {showMainDialog ? (
                <Dialog />
            ) : (
                <div className="bg-slate-900 max-w-[400px] text-slate-50 font-switzer rounded-xl z-20 absolute flex flex-col items-center p-4 px-6 gap-4">
                    <div className="flex flex-col w-full items-center gap-2">
                        <p className="w-full text-md font-semibold">Privacy</p>
                        <p className="w-full text-sm font-medium">this is an online textarea. all your typed data is stored locally on your device. since your data never leaves your device, there is no collection of data whatsoever. to clear your data, clear all your typed content or clear the cache for this page. please keep in mind that clearing the cache for this page will result in all your note contents being erased.</p>
                        <p className="w-full text-sm font-medium">your privacy is secured on this page.</p>
                        <div className="flex w-full justify-end">
                            <p onClick={handleMainDialog} className="cursor-pointer px-2 py-1 text-center bg-slate-700 rounded-md text-slate-300 text-sm font-medium">back</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PrivacyDialog;
