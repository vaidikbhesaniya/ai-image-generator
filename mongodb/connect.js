import mongoose from "mongoose";

const connectDB = (url) => {
  // eslint-disable-next-line linebreak-style
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongo"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

export default connectDB;
