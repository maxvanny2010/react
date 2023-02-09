package com.ua.react.repositiries;

import com.ua.react.model.Owner;
import org.springframework.data.repository.CrudRepository;

/**
 * OwnerRepository.
 *
 * @author legion
 * @version 5.0
 * @since 09/02/2023
 */
public interface OwnerRepository extends CrudRepository<Owner, Long> {
}
