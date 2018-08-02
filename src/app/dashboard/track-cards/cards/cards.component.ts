import { OrdersService } from '../../../webservices/orders.service';
import { DetailsComponent } from '../details/details.component';
import { IOrder } from '../../../model/IOrder';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  origin: string;
  destination: string;
  status: string;
  company: string;


  constructor(public dialog: MatDialog, private _ordersService: OrdersService) { }

  @Input() order: IOrder;

  ngOnInit() {
    this.getOriginCity();
    this.getDestinationCity();
    this.getStatus();
    this.getCompany();
  }

  getOriginCity() {
    this._ordersService.getCities(this.order.origin).subscribe((res: string) => this.origin = res);
  }

  getDestinationCity() {
    this._ordersService.getCities(this.order.destination).subscribe((res: string) => this.destination = res);
  }

  getCompany() {
    this._ordersService.getCompanies(this.order.company).subscribe((res: string) => this.company = res);
  }

  getStatus() {
    this._ordersService.getStatus(this.order.status).subscribe((res: string) => this.status = res);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '50%',
      data: {
        order: this.order
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
