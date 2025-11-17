import express from 'express';
import classDiscussionRoutes from "./routes/classDiscussionRoutes";
const app = express();
app.use(express.json());
app.use("/api/classDiscussions", classDiscussionRoutes);
export default app;
