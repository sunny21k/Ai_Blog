import express from "express"
import { adminLogin, approvedCommentById, deleteCommentsById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controllers/adminController.js"
import auth from "../middleware/auth.js"

const adminRouter = express.Router()

adminRouter.post("/login", adminLogin)
adminRouter.get("/comments", auth, getAllComments)
adminRouter.get("/blogs", auth, getAllBlogsAdmin)
adminRouter.post("/delete-comment", auth, deleteCommentsById)
adminRouter.post("/approve-comment", auth, approvedCommentById)
adminRouter.get("/dashboard", auth, getDashboard)

export default adminRouter