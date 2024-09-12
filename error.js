setTimeout(() => {
  throw new Error("Error");
}, 300);

//For catch stuff in node, out of express.
process.on("uncaughtException", () => {});

process.on("unhandledRejection", () => {});
