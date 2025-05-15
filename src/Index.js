const app = require("./App");
const Loaders = require("./Loaders");

Loaders.start();

app.listen(8000, () => console.log("Servidor online"));
