package com.ua.react.repositiries;

import com.ua.react.model.Car;
import org.springframework.data.repository.CrudRepository;

/**
 * CarRepository.
 *
 * @author legion
 * @version 5.0
 * @since 09/02/2023
 */
public interface CarRepository extends CrudRepository<Car, Long> {
}
