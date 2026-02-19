package com.example.flowtask_backend.service;

import com.example.flowtask_backend.entity.User;
import com.example.flowtask_backend.repository.UserRepository;
import org.springframework.boot.autoconfigure.container.ContainerImageMetadata;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User crearUsuario(String username, String email, String password){
        User user =new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);
        user.setCreatedAt(Timestamp.from(Instant.now()));

        userRepository.save(user);

        return user;
    }

    public User obtenerUsuarioPorId(Long id){

        Optional<User> optionalUser= userRepository.findById(id);

        if(optionalUser.isPresent()){
            User user= optionalUser.get();
            return user;
        }else {
            return null;
        }
    }

    public User obtenerUsuarioPorCorreo(String email){
        Optional<User> optionalUser=userRepository.findByEmail(email);

        if(optionalUser.isPresent()){
            User user= optionalUser.get();
            return user;
        }else {
            return null;
        }
    }

    public User obtenerTodosUsuarios(){
        List<User>listUsers=userRepository.findAll();
        return listUsers;
    }

    public User eliminarUsuario(Long id){
        Optional<User> optionalUser= userRepository.findById(id);

        if(optionalUser.isPresent()){
            User user= optionalUser.get();
            userRepository.deleteById(id);
        }else {
         System.out.println("No se ha encontrado el usuario con ese id");
        }
        return null;
    }

    public User actualizarUsuario(Long id, String username, String email, String password){

        Optional<User> optionalUser= userRepository.findById(id);

        if(optionalUser.isPresent()){
            User user= optionalUser.get();
            user.setUsername(username);
            user.setEmail(email);
            user.setPassword(password);
            userRepository.save(user);
            return user;
        }else {
            return null;
        }
    }

}

