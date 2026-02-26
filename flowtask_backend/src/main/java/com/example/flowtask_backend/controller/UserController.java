package com.example.flowtask_backend.controller;

import com.example.flowtask_backend.dto.UserRequest;
import com.example.flowtask_backend.entity.User;
import com.example.flowtask_backend.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("")
    public User crearUsuario(@RequestBody UserRequest request){
        User user = userService.crearUsuario(
                request.getUsername(),request.getEmail(),request.getPassword()
        );
        return user;
    }

    @GetMapping("{id}")
     public User obtenerUsuarioPorId(@PathVariable Long id){
        User user=userService.obtenerUsuarioPorId(id);
        return user;
    }

    @GetMapping("/correo/{email}")
    public User obtenerUsuarioPorCorreo(@PathVariable String email){
        User user= userService.obtenerUsuarioPorCorreo(email);
        return user;
    }

    @GetMapping("")
    public List<User> obtenerTodosUsuarios(){
        List<User> users=userService.obtenerTodosUsuarios();
        return users;
    }

    @DeleteMapping("{id}")
    public void eliminarUsuario(@PathVariable Long id){
        userService.eliminarUsuario(id);
        return ;
    }

    @PutMapping("{id}")
    public User actualizarUsuario(@PathVariable Long id,@RequestBody UserRequest request){
        User user=userService.actualizarUsuario(id, request.getUsername(), request.getEmail(), request.getPassword());
        return user;
    }
}
