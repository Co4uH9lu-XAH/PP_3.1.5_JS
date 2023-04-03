package ru.kata.spring.boot_security.demo.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AppRestController {


    private final UserService userService;

    @Autowired
    public AppRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAll();
    }

    @GetMapping("user/{id}")
    public User getUser(@PathVariable int id) {
        User user = userService.getUserById(id);
        return user;
    }

    @PostMapping("users")
    public User saveUser(@RequestBody User user) {
        userService.saveUserForRestApi(user);
        return user;
    }

    @PutMapping("users")
    public User updateUser(@RequestBody User user) {
        userService.update(user, user.getId());
        return user;
    }

    @DeleteMapping("user/{id}")
    public String deleteUser(@PathVariable int id) {
        userService.delete(id);
        return "User was deleted";
    }
}
