import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function PUT(request, context) {
  // Await the entire context object
  const awaitedContext = await context;
  // Now access params safely
  const id = awaitedContext.params.id;
  // Also, remember that request.json() is asynchronous
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" });
}


// ____________________________

export async function GET(request, {params} ){
    const {id} = await params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic},{status:200});
}