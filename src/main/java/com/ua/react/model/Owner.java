package com.ua.react.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import lombok.ToString.*;
import jakarta.persistence.*;
import java.util.*;

/**
 * Owner.
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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Owner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ownerid;
    private String firstname;
    private String lastname;

    @JsonIgnore
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Exclude
    private List<Car> cars;

    public Owner(String firstname, String lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

}