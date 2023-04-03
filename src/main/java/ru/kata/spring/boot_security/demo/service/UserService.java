package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;

public interface UserService {
    void saveUserForRestApi(User user);
    void saveUser(User user);
    User getUserById(int id);
    List<User> getAll();
    void delete(int id);
    void update(User user, int id);

    User findByUserName(String name);

}
