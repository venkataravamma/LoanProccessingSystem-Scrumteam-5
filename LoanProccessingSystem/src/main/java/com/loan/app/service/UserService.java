package com.loan.app.service;

import com.loan.app.entities.User;

public interface UserService {
	public  User addNewUser(User user);
	public  User signIn(User user);
	public  User signOut(User user);


}
