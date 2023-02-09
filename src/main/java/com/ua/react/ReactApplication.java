package com.ua.react;

import com.ua.react.model.Car;
import com.ua.react.model.Owner;
import com.ua.react.repositiries.CarRepository;
import com.ua.react.repositiries.OwnerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.*;

@SpringBootApplication
public class ReactApplication implements CommandLineRunner {
    public static final Logger loggeres = LoggerFactory.getLogger(ReactApplication.class);

    private final CarRepository repoCar;

    private final OwnerRepository repoOwner;

    public ReactApplication(final CarRepository repoCar, final OwnerRepository repoOwner) {
        this.repoCar = repoCar;
        this.repoOwner = repoOwner;
    }

    public static void main(String[] args) {
        SpringApplication.run(ReactApplication.class, args);
        loggeres.info("Application started");
    }

    @Override
    public void run(final String... args) throws Exception {
        // Add owner objects and save these to db
        Owner owner1 = new Owner("John", "Johnson");
        Owner owner2 = new Owner("Mary", "Robinson");
        repoOwner.saveAll(Arrays.asList(owner1, owner2));

        // Add car object and link to owners and save these to db
        Car car1 = new Car("Ford", "Mustang", "Red",
                "ADF-1121", 2021, 59000, owner1);
        Car car2 = new Car("Nissan", "Leaf", "White",
                "SSJ-3002", 2019, 29000, owner2);
        Car car3 = new Car("Toyota", "Prius", "Silver",
                "KKO-0212", 2020, 39000, owner2);
        repoCar.saveAll(Arrays.asList(car1, car2, car3));

        for (Car car : repoCar.findAll()) {
            loggeres.info(car.getBrand() + " " + car.getModel());
        }
    }
}
