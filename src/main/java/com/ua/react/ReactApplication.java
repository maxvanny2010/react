package com.ua.react;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactApplication {
    private static final Logger logger = LoggerFactory.getLogger(ReactApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ReactApplication.class, args);
        logger.info("Application started");
    }

}
