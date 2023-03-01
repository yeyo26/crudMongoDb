import express from "express";
import Task from "../models/Task";


const router = express.Router();

router.get("/", async(req, res) => {

  const tasks= await Task.find().lean()

  console.log(tasks[0]);
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

router.post('/tasks/add', async (req, res) => {

  const task= await new Task(req.body)
  const tareaGuardada= await task.save();
  console.log(task);
  res.send(tareaGuardada)
  res.redirect('/');
})

export default router;  
