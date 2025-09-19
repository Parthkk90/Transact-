import express from "express";
import { x402Router } from "./services/x402";
import { agglayerRouter } from "./services/agglayer";

// Create Express application
const app = express();

// Use JSON middleware
app.use(express.json());

// Mount the routers
app.use("/pay", x402Router);
app.use("/agglayer", agglayerRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Polygon-zkEVM-Starknet Bridge API",
    endpoints: {
      pay: "/pay - X402 payment endpoint",
      agglayer: "/agglayer - AggLayer bridge endpoint"
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`💰 Visit http://localhost:${PORT}/pay to make a $0.01 payment`);
  console.log(`🌉 Visit http://localhost:${PORT}/agglayer for bridge operations`);
});

export default app;