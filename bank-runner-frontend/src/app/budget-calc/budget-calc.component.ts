import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-budget-calc',
  templateUrl: './budget-calc.component.html',
  styleUrls: ['./budget-calc.component.css']
})
export class BudgetCalcComponent implements OnInit {
  expense: number;
  housing: string;
  food: string;
  utilities: string;
  medicalinsurance: string;
  clothing: string;
  saving: string;
  studentloan: string;
  credit: string;
  entertainment: string;
  autoloan: string;
  autoinsurance: string;
  automaintainance: string;
  fuel: string;
  parking: string;
  
  income: string;
  budget: number;
  quarterbudget: number;
  annualbudget: number;
  constructor() { }
  ngOnInit(): void {
  }
  calculateExpense(): void {
    this.expense = (parseInt(this.housing) || 0) + (parseInt(this.food) || 0) +
    (parseInt(this.utilities) || 0) + (parseInt(this.medicalinsurance) || 0) + 
    (parseInt(this.clothing) || 0) + (parseInt(this.saving) || 0) + (parseInt(this.studentloan) || 0)
     + (parseInt(this.credit) || 0) + (parseInt(this.entertainment) || 0) + (parseInt(this.autoloan) || 0)
      + (parseInt(this.autoinsurance) || 0) + (parseInt(this.automaintainance) || 0) 
    + (parseInt(this.fuel) || 0) + (parseInt(this.parking) || 0);
  }
  
  calculateBudget(): void {
  this.budget = (parseInt(this.income) || 0) - this.expense;
  }
  calculatequarterBudget(): void {
    this.quarterbudget = ((parseInt(this.income) || 0) * 3) - (this.expense * 3);
  }
  
  calculateannualBudget(): void {
    this.annualbudget = ((parseInt(this.income) || 0) * 12) - (this.expense * 12);
  }
}