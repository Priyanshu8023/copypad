import Editor from "@/components/Editor"

export default function PadPage({
    params,
}:{
    params:{id:string};
}    
){
    return <Editor padId={params.id} />;
}