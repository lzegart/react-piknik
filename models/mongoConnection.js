const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactPiknik",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to Piknik");
  }
);

module.exports = mongoose;
