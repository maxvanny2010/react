package com.ua.react.model;

import jakarta.persistence.*;
import lombok.*;

/**
 * Car.
 *
 * @author legion
 * @version 5.0
 * @since 09/02/2023
 */
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String brand;
    private String model;
    private String color;
    private String registerNumber;
    @Column(name = "year")
    private int year;
    private int price;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner")
    private Owner owner;

    public Car(String brand, String model, String color,
               String registerNumber, int year, int price, Owner owner) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.registerNumber = registerNumber;
        this.year = year;
        this.price = price;
        this.owner = owner;
    }
}
