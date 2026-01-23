"use client"

import { useEffect, useState } from "react";

export default function Editor({ padId }: { padId: string }) {
    const [content, setContent] = useState<string>("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetch(`api/pad/${padId}`).then(res => res.json()).then(data => setContent(data.content));
    }, [padId]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSaving(true);
            fetch(`api/pad/${padId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content }),
            }).finally(() => setSaving(false));
        }, 3);

        return () => clearTimeout(timeout);
    }, [content, padId]);

    return (
        <textarea className="w-full h-screen p-4 text-lg bg-white text-black"
            value={content}
            placeholder="Write You Text Here"
            onChange={(e => setContent(e.target.value))}
        />
    );

}