import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
    _req:Request,
    { params }:{params:{id:string}}
){
    const padId = params.id;

    let pad= await prisma.pad.findUnique({
        where:{id:padId},
    });

    if(!pad){
        pad= await prisma.pad.create({
            data:{id:padId},
        });
    }

    return NextResponse.json(pad);
}

export async function POST(
    req:Request,
    { params }:{params:{id:string}}
){
    const content = await req.json()

    if(typeof content !== "string" || content.length > 50000){
        return NextResponse.json(
            { error: "Invalid Content"},
            { status: 400},
        );
    }

    await prisma.pad.update({
        where:{id:params.id},
        data: { content },
    });

    return NextResponse.json({sucess:true})
}