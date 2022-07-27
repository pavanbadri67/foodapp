import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartList = new BehaviorSubject<any>([]);
  constructor() {}
}
