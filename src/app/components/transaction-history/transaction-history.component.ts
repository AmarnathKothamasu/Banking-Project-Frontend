// transaction-history.component.ts
import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  transactions: any[] = []; // You can define a specific type for transactions if you have a TypeScript interface for transactions

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    // Call your transaction service to fetch transaction details
    this.transactionService.getTransactions().subscribe(
      (data: any[]) => {
        this.transactions = data; // Assuming data is an array of transactions
      },
      (error) => {
        console.error('Error loading transactions: ', error);
      }
    );
  }
}
