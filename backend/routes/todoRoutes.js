import express from "express"

import { 
      getTodosController,
      searchTodosController,
      getTodoByIdController,
      createTodoController,
      updateStatusController,
      updateTodoController,
    deleteTodoController
  } from "../controllers/todoController.js"

  const router = express.Router()

  router.get("/", getTodosController)

  router.get("/:id", getTodoByIdController)

  router.get("/search", searchTodosController)

  router.post("/",createTodoController)

  router.put("/:id", updateTodoController)

  router.patch("/status/:id", updateStatusController)

  router.delete("/:id", deleteTodoController)

  export default router