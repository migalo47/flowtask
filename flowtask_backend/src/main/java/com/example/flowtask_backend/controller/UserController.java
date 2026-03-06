package com.example.flowtask_backend.controller;

import com.example.flowtask_backend.dto.UserRequest;
import com.example.flowtask_backend.dto.UserResponse;
import com.example.flowtask_backend.entity.User;
import com.example.flowtask_backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("")
    public UserResponse crearUsuario(@RequestBody UserRequest request) {
        User user = userService.crearUsuario(
                request.getUsername(), request.getEmail(), request.getPassword()
        );
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Error creating user");
        }
        UserResponse userDTO = new UserResponse();
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        return userDTO;
    }

    @GetMapping("{id}")
    public UserResponse obtenerUsuarioPorId(@PathVariable Long id) {
        User user = userService.obtenerUsuarioPorId(id);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with ID: " + id);
        }
        UserResponse userDTO = new UserResponse();
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        return userDTO;
    }

    @GetMapping("/correo/{email}")
    public UserResponse obtenerUsuarioPorCorreo(@PathVariable String email) {
        User user = userService.obtenerUsuarioPorCorreo(email);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with email: " + email);
        }
        UserResponse userDTO = new UserResponse();
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        return userDTO;
    }

    @GetMapping("")
    public List<User> obtenerTodosUsuarios() {
        return userService.obtenerTodosUsuarios();
    }

    @PutMapping("{id}")
    public UserResponse actualizarUsuario(@PathVariable Long id, @RequestBody UserRequest request) {
        User user = userService.actualizarUsuario(id, request.getUsername(), request.getEmail(), request.getPassword());
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found with ID: " + id);
        }
        UserResponse userDTO = new UserResponse();
        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        return userDTO;
    }

    @DeleteMapping("{id}")
    public void eliminarUsuario(@PathVariable Long id) {
        userService.eliminarUsuario(id);
    }
}