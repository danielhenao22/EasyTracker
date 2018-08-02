import { IOrder } from '../../../model/IOrder';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrdersService } from '../../../webservices/orders.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  order: IOrder;
  origin: string;
  destination: string;
  status: string;
  company: string;

  initiated = new FormControl(new Date(this.data.order.initiated));
  dispached = new FormControl(new Date(this.data.order.dispached));
  customs = new FormControl(new Date(this.data.order.customs));
  delivered = new FormControl(new Date(this.data.order.delivered));
  closed = new FormControl(new Date(this.data.order.closed));

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _ordersService: OrdersService) { }

  getOriginCity() {
    this._ordersService.getCities(this.data.order.origin).subscribe((res: string) => this.origin = res);
  }

  getDestinationCity() {
    this._ordersService.getCities(this.data.order.destination).subscribe((res: string) => this.destination = res);
  }

  getCompany() {
    this._ordersService.getCompanies(this.data.order.company).subscribe((res: string) => this.company = res);
  }

  getStatus() {
    this._ordersService.getStatus(this.data.order.status).subscribe((res: string) => this.status = res);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.order = this.data;
    this.getOriginCity();
    this.getDestinationCity();
    this.getStatus();
    this.getCompany();
  }

}
