package ru.kata.spring.boot_security.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.UserServiceImpl;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class Initializer {
    private final UserServiceImpl userService;

    @Autowired
    public Initializer(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostConstruct
    public void init() {
        User user = userService.getByeMail("admin@mail.ru");
        if (user == null) {
            Role userRole = new Role("ROLE_USER");
            Role adminRole = new Role("ROLE_ADMIN");
            Set<Role> adminRoles = new HashSet<>();
            adminRoles.add(userRole);
            adminRoles.add(adminRole);
            User admin = new User(adminRoles, "admin", "admin", 24, "admin@mail.ru", "admin@mail.ru", "admin");
            userService.addUser(admin);
        }
    }
}