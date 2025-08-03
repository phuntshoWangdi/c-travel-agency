"use client";

import { createContext, useContext, useState } from "react";

export interface DialogPayload {
    fileName: string;
    content?: React.ReactNode; // what to render inside the dialog
}

export interface FullScreenDialogContextValue {
    open: boolean;
    payload: DialogPayload | null;
    openDialog: (payload?: DialogPayload) => void;
    closeDialog: () => void;
}

const DialogCtx = createContext<FullScreenDialogContextValue | null>(null);

export function DialogProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [payload, setPayload] = useState<DialogPayload | null>(null);

    const openDialog = (p?: DialogPayload) => {
        if (p) setPayload(p);
        if (p?.fileName) setOpen(true);
    };
    const closeDialog = () => setOpen(false);

    const value: FullScreenDialogContextValue = {
        open,
        payload,
        openDialog,
        closeDialog,
    };

    return <DialogCtx.Provider value={value}>{children}</DialogCtx.Provider>;
}

export function useFullScreenDialog(): FullScreenDialogContextValue {
    const ctx = useContext(DialogCtx);
    if (!ctx) throw new Error("useFullScreenDialog must be used within DialogProvider");
    return ctx;
}
