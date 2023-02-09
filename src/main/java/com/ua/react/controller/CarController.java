package com.ua.react.controller;

import com.ua.react.model.Car;
import com.ua.react.repositiries.CarRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * CarController.
 *
 * @author legion
 * @version 5.0
 * @since 09/02/2023
 */
@RestController
public class CarController {
    private final CarRepository repository;

    public CarController(final CarRepository repository) {
        this.repository = repository;
    }

    @RequestMapping("/cars")
    public Iterable<Car> getCars() {
        return repository.findAll();
    }
}
