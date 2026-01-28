import Editor from "@/components/Editor"

export default await function  PadPage({
    params,
}:{
    params:{id:string};
}    
){
    return <Editor padId={params.id} />;
}