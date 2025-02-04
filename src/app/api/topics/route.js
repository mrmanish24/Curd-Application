import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { connect } from "mongoose";
import { NextResponse } from "next/server";



// you can POST , view all post and delete the post from this route
export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Topic.create({title,description});
    return NextResponse.json({message: "Topic Created"},{status: 200});
}

export async function GET(){
    try {
         await connectMongoDB();
         const topics = await Topic.find();
         return NextResponse.json({ topics });
    } catch (error) {
        return NextResponse.json({ message: error})
    }
   
}

export async function DELETE(request){
    try {
            const id = request.nextUrl.searchParams.get("id");
            await connectMongoDB();
            await Topic.findByIdAndDelete(id);
            return NextResponse.json(
              { message: "Topic Deleted" },
              { status: 200 }
            );
        
    } catch (error) {
        return NextResponse.json({message:error});
        
    }


}