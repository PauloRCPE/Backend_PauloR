const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://pauloorbolato:0902Dragaoanciao~@nodebackend.b48rbqt.mongodb.net/?retryWrites=true&w=majority&appName=NodeBackend"
  );
}
module.exports = startDB;
