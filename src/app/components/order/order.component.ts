import { Component, Injectable, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { appDependencies } from '../../app.dependencies';
import { Order } from '../../entities/order/order';
import { OrderService } from '../../services/order.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [appDependencies, MatTableModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})

// export class OrderComponent {

//   displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
//   columnsToDisplay: string[] = this.displayedColumns.slice();
//   data: PeriodicElement[] = ELEMENT_DATA;

//   addColumn() {
//     const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
//     this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
//   }

//   removeColumn() {
//     if (this.columnsToDisplay.length) {
//       this.columnsToDisplay.pop();
//     }
//   }

// }

export class OrderComponent implements OnInit {

  orders: Order[];
  gridColumns: string[] = [];
  total: number = 0.0

  constructor(private orderService: OrderService) {
    this.getAllData();
  }

  ngOnInit(): void {
  }

  async getAllData() {
    const data = this.orderService.getAllOrders().subscribe((response: any) => {
      const {orderList, total} = response;
      this.total = total;
      this.orders = orderList;
      this.gridColumns = Object.keys(this.orders[0]);
      debugger;
    });
  }

}
