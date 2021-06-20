package com.loan.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loan.app.entities.User;



public interface UserRepository extends JpaRepository<User, Integer> {

}
