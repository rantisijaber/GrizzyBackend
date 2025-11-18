import express from 'express';
import classDiscussionRoutes from "./routes/classDiscussionRoutes.js"
import commentRoutes from "./routes/commentRoutes.js";
import replyRoutes from "./routes/replyRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/classDiscussions", classDiscussionRoutes);

app.use("/api/comments", commentRoutes);

app.use("/api/replies", replyRoutes);

export default app;