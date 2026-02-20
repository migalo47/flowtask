package com.example.flowtask_backend.repository;

import com.example.flowtask_backend.entity.Task;
import com.example.flowtask_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByUser(User user);
}
