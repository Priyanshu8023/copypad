"use client"

import { usePad } from "@/hook/usePad"

export default function Editor({padId}:{padId:string}){
    const {content, setContent,isSaving}=usePad(padId);

    return (
        <>
            <main className="relative w-full h-screen">
            <div className="absolute top-4 right-4 text-xs font-mono text-gray-400">
                {isSaving ? "Saving..." : "Saved"}
            </div>

            <textarea
                className="w-full h-full p-8 text-lg bg-white text-black outline-none resize-none"
                value={content}
                placeholder="Start typing..."
                onChange={(e) => setContent(e.target.value)}
            />
        </main>
        </>
    )
}

