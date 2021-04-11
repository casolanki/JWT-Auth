import { getLocaleExtraDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  orders:any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(){
    return this.http.get(`${environment.apiUrl}/users/orders`).subscribe(order=>{
      this.orders = order
      console.log(this.orders);
    })   
    
  }

}
