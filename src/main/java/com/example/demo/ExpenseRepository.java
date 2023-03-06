package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
	List<Expense> findAllByOrderByDateDesc();

	List<Expense> findAllByDateGreaterThanOrderByDateAsc(String date);
}
