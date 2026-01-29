import Editor from "@/components/Editor"

export default async function  PadPage({
    params,
}:{
    params:Promise<{id:string}>
}    
){
    const {id}=await params;
    return  <Editor padId={id} />;
}