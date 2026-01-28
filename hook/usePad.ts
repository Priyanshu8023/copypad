import {useState,useEffect,useRef} from "react";

export function usePad(padId:string){
    const [content,setContent]=useState<string>("");
    const [isSaving,setisSaving]=useState(false);
    const isInitialLoad = useRef(true);

    useEffect(()=>{
        const load= async () =>{
            const res = await fetch(`/api/pad/${padId}`);
            const data = await res.json()
            setContent(data.content || "")
            isInitialLoad.current=true;
            load();
        }
    },[padId]);

    useEffect(()=>{
        if(isInitialLoad.current){
            isInitialLoad.current=false;
            return;
        }

        const controller = new AbortController();
        const timeout = setTimeout(async()=>{
            setisSaving(true);
            try{
                await fetch(`/api/pad/${padId}`,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({content}),
                    signal:controller.signal,
                });
            }finally{
                setisSaving(false);
            }
        },800);

        return ()=>{
            clearTimeout(timeout);
            controller.abort();
        }
    },[content,padId]);
    return {content,setContent,isSaving};
}