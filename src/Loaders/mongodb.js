const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://pauloorbolato:0902dragao@nodebackend.b48rbqt.mongodb.net/?retryWrites=true&w=majority&appName=NodeBackend"
  );
  console.log("Banco de dados online");
}
module.exports = startDB;
