import { useState } from "react";
import Dialog from "./Dialog";
import { useTheme } from "../context/ThemeContext";

const PrivacyDialog = () => {
    const [showMainDialog, setShowMainDialog] = useState(false);
    const { theme } = useTheme();

    const handleMainDialog = () => {
        setShowMainDialog(!showMainDialog);
    };

    return (
        <>
            {showMainDialog ? (
                <Dialog />
            ) : (
                <div className={`${theme.dialogBg} max-w-[400px] ${theme.dialogTextColor} font-switzer rounded-xl z-20 absolute flex flex-col items-center p-4 px-6 gap-4`}>
                    <div className="flex flex-col w-full items-center gap-2">
                        <p className="w-full text-md font-semibold">Privacy</p>
                        <p className="w-full text-sm font-medium">this is an online textarea. all your typed data is stored locally on your device. since your data never leaves your device, there is no collection of data whatsoever. to clear your data, clear all your typed content or clear the cache for this page. please keep in mind that clearing the cache for this page will result in all your note contents being erased.</p>
                        <p className="w-full text-sm font-medium">your privacy is secured on this page.</p>
                        <div className="flex w-full justify-end">
                            <p onClick={handleMainDialog} className={`cursor-pointer px-2 py-1 text-center ${theme.buttonBg} rounded-md ${theme.buttonText} text-sm font-medium`}>back</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PrivacyDialog;
