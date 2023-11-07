import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST (req){
  try {
    const body = await req.json()
    const userData = body.formData
    
    // If data missing
    if (!userData.username || !userData.password){
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    
    // check for duplicate username
    const duplicate = await User.findOne({username: userData.username}).lean().exec()
    if(duplicate){
      return NextResponse.json(
        { message: "Duplicate Username" },
        { status: 409 }
      );
    }
    
    // hash password (hide/bcrypt the password)
    const hashPassword = await bcrypt.hash(userData.password, 4)
    // then replace plain password with hidden one
    userData.password = hashPassword
    
    // Create User
    await User.create(userData)
    return NextResponse.json(
      { message: "User Created" },
      { status: 201 }
    );
    
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: "Error", error}, {status: 500})
  }
}