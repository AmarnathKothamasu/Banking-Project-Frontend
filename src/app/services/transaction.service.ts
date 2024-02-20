// transaction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionsUrl = environment.apiUrl+'/getTransactionDetails'; // Update this with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Method to fetch transactions from the backend
  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.transactionsUrl);
  }
}
