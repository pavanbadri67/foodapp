import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cartList.subscribe((data) => {
      console.log(data, 'data');
      this.totalItem = data.length;
    
      
    });
  }

}
