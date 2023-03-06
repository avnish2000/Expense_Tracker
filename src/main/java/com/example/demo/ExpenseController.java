package com.example.demo;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExpenseController {

	@Autowired
	private ExpenseRepository expenseRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/expenses")
	@ResponseBody
	public List<Expense> getExpenses() {
		return (List<Expense>) expenseRepository.findAllByOrderByDateDesc();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/balance")
	@ResponseBody
	public String getBalance() {
		double balance = 0;

		List<Expense> expenses = expenseRepository.findAll();

		for (int i = 0; i < expenses.size(); i++) {
			balance += expenses.get(i).getCost();
		}
		System.out.println(balance);
		DecimalFormat df = new DecimalFormat("#.##");
		String formattedBalance = df.format(balance);

		return formattedBalance;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/add")
	public void addExpense(@RequestBody Expense expense) {
		expenseRepository.save(expense);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/recent")
	@ResponseBody
	public List<Expense> getRecentExpenses() {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DAY_OF_YEAR, -7);
		String formattedDate = dateFormat.format(cal.getTime());
		return expenseRepository.findAllByDateGreaterThanOrderByDateAsc(formattedDate);
	}

}
