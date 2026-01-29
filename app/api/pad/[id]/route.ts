import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type RouterContext = { params:Promise<{id: string}>};

export async function GET(
    _req:Request,
    { params }:RouterContext
){
    try{
        const { id } = await params;

        const pad = await prisma.pad.upsert({
            where:{ id },
            update:{},
            create:{id, content:""},
        });

        return NextResponse.json(pad);
    }catch(error){
        console.error("GET_PAD_ERROR",error);
        return NextResponse.json({error:"Failed  to fetch or create pad"},{status:500});
    }

    
}

export async function POST(
    req:Request,
    { params }:RouterContext
){
    try{
        const {id}=await params;

        const content = await req.json().catch(()=>({}));

        if(typeof content !== "string" || content.length > 5000){
            console.log("Invalid String")
            return NextResponse.json({error:"Invalid Content: Length should be under 50K char"},{status:400});
        }

        await prisma.pad.update({
            where:{id},
            data:{content},
        });

        return NextResponse.json({success:true});
    }catch(error:any){
        if(error.code=='P2025'){
            return NextResponse.json({error:"Pad not found"},{status:404});
        }

        console.error("POST_PAD_ERROR:",error);
        return NextResponse.json({error:"Invalid Server Error"},{status:500});
    }
}