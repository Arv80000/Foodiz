import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://arv80000:jls2WlU1ihRBjjQm@foodie.xtxle0d.mongodb.net/?retryWrites=true&w=majority&appName=Foodie').then(()=>{
       console.log('DB connected') ;
    })
}