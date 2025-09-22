// import { connectDB } from "@/lib/config/db";
// import EmailModel from "@/lib/models/EmailModel";

// const LoadDB = async () => {
//     await connectDB()
// }

// LoadDB();

// export async function POST(request){
//     const formData = await request.formData();
//     const emailData = {
//         email:`${formData.get('email')}`,
//     }
//     await EmailModel.create(emailData);
//     return new Response(JSON.stringify({message:"Email added successfully"}),{status:200});
// }
import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to DB
    await connectDB();

    // Get JSON body
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ message: "Email is required" }), { status: 400 });
    }

    // Save email
    await EmailModel.create({ email });

    return new Response(JSON.stringify({ message: "Email added successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error saving email:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}

export async function GET(request) {
    const emails = await EmailModel.find({});
    return NextResponse.json({ emails });
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success:true,msg:"Email Deleted"});
}

