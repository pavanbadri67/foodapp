import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  itemAdded : any =[];
  itemName: any;
  // date : string = new Date().toLocaleString();
  grandTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.cartList.subscribe((data) => {
    //   // console.log(data, 'from order component');
    //   // this.itemAdded.push(data);
    //   // console.log(data, 'data');
    //   this.itemAdded = data;
    //   this.grandTotal
    // })

   this.itemAdded = JSON.parse(localStorage.getItem('localItem') || '[]');
    // console.log(a, 'a');
    // JSON.parse(a)
    
    // JSON.parse()
    this.itemsGrandTotal()
   

  }
  removeItem(data:any , index:number){
    this.itemAdded.splice(index, 1);
    localStorage.setItem('localItem',JSON.stringify(this.itemAdded));
    console.log(this.itemAdded, 'itemAdded');
    
  }
  
  itemsGrandTotal(){
     this.itemAdded.forEach((element:any) => {
     this.grandTotal += element.quantity * element.price;
     });
  }

}

