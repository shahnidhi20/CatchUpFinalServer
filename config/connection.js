const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log(process.env.MONGODB_URI);
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose.connection;
