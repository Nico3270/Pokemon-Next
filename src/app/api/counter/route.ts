import { NextResponse } from "next/server";

export async function GET(request : Request) {

    return NextResponse.json({
        count: 100,
        method: "GET"
    })

};

export async function POST(request : Request) {

    return NextResponse.json({
        count: 100,
        method: "POST"
    })

}