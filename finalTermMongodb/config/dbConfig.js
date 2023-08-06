import mongoose from "mongoose";

export const mainConection = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://rizwanmalik4125:rizwan1234@cluster0.m1tt1xw.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection successful");
  } catch (error) {
    console.log(
      "connection error", error
    );
  }
}

  // npm i mongoose

