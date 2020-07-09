import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

const  BaseUrl='http://localhost:3000/api/transactions/'

@Injectable({
    providedIn:'root'
})

export class TransactionService{
    constructor(private http: HttpClient){}
    createTransaction(model):Observable<Transaction>{
        return this.http.post<Transaction>(`${BaseUrl}`,model)
    }
}