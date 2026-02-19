package com.example.flowtask_backend.repository;

import com.example.flowtask_backend.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
