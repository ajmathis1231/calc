import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  displayedDigits: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  result: string | null = null;
  calculatedResult: number | null = null;
  storage: string = '0';

setProperty(event: Event) {
  const buttonValue = (event.target as HTMLButtonElement).textContent;
  if (buttonValue){
    const value = buttonValue.trim();
    if (value === 'C') {
      this.displayedDigits = '0';
      this.firstOperand = null;
      this.operator = null;
      this.result =null;
      this.storage = '0';
      return;
    }
    if (this.displayedDigits === '0') {
      this.displayedDigits = '';
    }
    if (!isNaN(Number(value))) {
      this.displayedDigits += value;
    } else {
      this.handleOperator(value);
    } 
  }
}
  handleOperator(operator: string) {
    
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.displayedDigits);
      this.storage = String(this.firstOperand);
    } else if (this.operator != null && this.firstOperand !== null) {
      switch (this.operator) {
        case '+':
          this.calculatedResult = this.firstOperand + Number(this.displayedDigits);
          this.storage = String(this.firstOperand);
          break;
        case '-':
          this.calculatedResult = this.firstOperand - Number(this.displayedDigits);
          break;
        case '*':
          this.calculatedResult = this.firstOperand * Number(this.displayedDigits);
          break;
        case '/':
          this.calculatedResult = this.firstOperand / Number(this.displayedDigits);
          break;
        case 'C':
          this.displayedDigits = '0';
          //this.firstOperand = null;
          //this.operator = null;
          break;
          
        
      }   
      this.result = String(this.calculatedResult);
      
    }
    
    if (operator ==='=' && this.result !== null) {
      this.displayedDigits = this.result;
      this.firstOperand = this.calculatedResult;
      this.storage = this.displayedDigits;
    } else {
      this.operator = operator;
      this.displayedDigits = '0';
      //this.storage = '0' // clears the display for the next number
    }
    this.calculatedResult = null;
  }
}

