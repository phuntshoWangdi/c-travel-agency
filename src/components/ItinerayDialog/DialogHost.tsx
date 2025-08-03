"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { useFullScreenDialog } from "./dialog-context";
import { tourItinenariesMdx } from "@/data/tourPackages";


export default function DialogHost() {
    const { open, closeDialog, payload } = useFullScreenDialog();
    const TourItinenary = tourItinenariesMdx[payload?.fileName ?? ""]
    return (
        <Dialog open={open} onOpenChange={(v) => (v ? null : closeDialog())}>
            <DialogContent className="fixed w-screen h-screen max-w-none rounded-none">
                <DialogHeader className="p-4 border-b">
                    <DialogDescription>
                        <div className="prose text-left max-w-full bg-white max-h-[80vh] overflow-y-auto rounded-lg no-scrollbar md:px-40">
                            <TourItinenary />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <div className="p-4">{payload?.content ?? null}</div>
            </DialogContent>
        </Dialog>
    );
}
