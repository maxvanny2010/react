package com.ua.react.repositiries;

import com.ua.react.model.Car;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.*;

/**
 * CarRepository.
 *
 * @author legion
 * @version 5.0
 * @since 09/02/2023
 */
@RepositoryRestResource(path = "vehicles")
public interface CarRepository extends CrudRepository<Car, Long> {
    //  @Query("select c from Car c where c.brand like %?1")
    @Query("select c from Car c where c.brand = ?1")
    List<Car> findByBrand(String brand);

    List<Car> findByBrandAndModel(String brand, String model);

    List<Car> findByColor(@Param("color") String color);

    List<Car> findByBrandOrColor(String brand, String color);

    List<Car> findByYear(int year);

    List<Car> findByBrandOrderByYearAsc(String brand);
}
