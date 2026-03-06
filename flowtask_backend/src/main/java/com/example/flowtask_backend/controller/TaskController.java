package com.example.flowtask_backend.controller;

import com.example.flowtask_backend.dto.TaskRequest;
import com.example.flowtask_backend.entity.Task;
import com.example.flowtask_backend.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("")
    public Task crearTask(@RequestBody TaskRequest request) {
        Task task = taskService.crearTask(
                request.getTitle(), request.getDescription(), request.getStatus(), request.getUserId()
        );
        if (task == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found for ID: " + request.getUserId());
        }
        return task;
    }

    @GetMapping("")
    public List<Task> obtenerTodasLasTareas() {
        return taskService.obtenerTodasLasTareas();
    }

    @GetMapping("{id}")
    public Task obtenerTareasPorId(@PathVariable Long id) {
        Task task = taskService.obtenerTareaPorId(id);
        if (task == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found with ID: " + id);
        }
        return task;
    }

    @GetMapping("/user/{userId}")
    public List<Task> obtenerTareasPorUsuario(@PathVariable Long userId) {
        List<Task> tasks = taskService.obtenerTareasPorUsuario(userId);
        if (tasks == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with ID: " + userId);
        }
        return tasks;
    }

    @PutMapping("{id}")
    public Task actualizarTask(@PathVariable Long id, @RequestBody TaskRequest request) {
        Task task = taskService.actualizarTask(id, request.getTitle(), request.getDescription(), request.getStatus());
        if (task == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found with ID: " + id);
        }
        return task;
    }

    @DeleteMapping("{id}")
    public void eliminarTask(@PathVariable Long id) {
        taskService.eliminarTask(id);
    }
}