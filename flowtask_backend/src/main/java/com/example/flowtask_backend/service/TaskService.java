package com.example.flowtask_backend.service;

import com.example.flowtask_backend.entity.Task;
import com.example.flowtask_backend.entity.User;
import com.example.flowtask_backend.repository.TaskRepository;
import com.example.flowtask_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskService(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    public Task crearTask(String title, String description, String status, Long user_id){
        Optional<User> optionalUser= userRepository.findById(user_id);

        if(optionalUser.isPresent()) {
            User user=optionalUser.get();
            Task task = new Task();
            task.setTitle(title);
            task.setDescription(description);
            task.setStatus(status);
            task.setCreatedAt(Timestamp.from(Instant.now()));
            task.setUser(user);

            taskRepository.save(task);
            return task;
        }else {
            return null;
        }
    }

    public Task obtenerTareaPorId(Long id){
        Optional<Task> optionalTask=taskRepository.findById(id);

        if(optionalTask.isPresent()){
            Task task= optionalTask.get();
            return task;
        }else {
            return null;
        }
    }

    public List<Task> obtenerTodasLasTareas(){
        List<Task> listTasks= taskRepository.findAll();
        return listTasks;

    }

    public List<Task> obtenerTareasPorUsuario(Long user_id){
        Optional<User> optionalUser= userRepository.findById(user_id);
        if(optionalUser.isPresent()){
            User user= optionalUser.get();
            List<Task> listTaskUser= taskRepository.findByUser(user);
            return listTaskUser;
        }else {
            return null;
        }
    }

    public void eliminarTask(Long id){
        Optional<Task> optionalTask=taskRepository.findById(id);
        if (optionalTask.isPresent()){
            taskRepository.deleteById(id);
        }else {
            System.out.println("No se ha podido encontrar la tarea");
        }
        return ;
    }

    public Task actualizarTask(Long id, String title, String description, String status){
        Optional<Task> optionalTask=taskRepository.findById(id);
        if (optionalTask.isPresent()){
            Task task=optionalTask.get();
            task.setTitle(title);
            task.setDescription(description);
            task.setStatus(status);
            taskRepository.save(task);
            return task;
        }else {
            return null;
        }

    }
}
