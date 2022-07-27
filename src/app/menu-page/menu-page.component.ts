import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  tiffinsDetails =[
    {
      image: "https://thumbs.dreamstime.com/b/masala-dosa-21646814.jpg",
      itemname:"Dosa",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "50",
      quantity: 1,
    },
    {
      image: "https://insurancesites.sgp1.digitaloceanspaces.com/wp-content/uploads/sites/156/2021/04/18052438/tiffinIddly-600x438.jpeg",
      itemname:"Idly",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "30",
      quantity: 1
    },
    {
      image: "https://content3.jdmagicbox.com/comp/def_content/chapati-suppliers/rekrin9vbo-chapati-suppliers-4-2b77z.jpg?clr=664000",
      itemname:"Chappathi",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "60",
      quantity: 1
    },
    {
      image: "https://www.seekpng.com/png/detail/254-2548049_poori-puri-indian-food-png-hd-stock-photos.png",
      itemname:"Puri",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "45",
      quantity: 1
    },
    {
      image: "https://5.imimg.com/data5/TM/RJ/GLADMIN-62033379/jaggu-vada-500x500.png",
      itemname:"Vada",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "40",
      quantity: 1
    },
    {
      image: "https://i.ytimg.com/vi/JIVcIamG4rY/maxresdefault.jpg",
      itemname:"Upma",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "25",
      quantity: 1
    },
    {
      image: "https://img-global.cpcdn.com/recipes/27cba851e238df22/400x400cq70/photo.jpg",
      itemname:"Uthappa",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "45",
      quantity: 1
    },
    {
      image: "https://www.awesomecuisine.com/wp-content/uploads/2015/08/mangalore-bonda.jpg",
      itemname:"Bonda",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "45",
      quantity: 1
    }
  ]
  vegetarianDetails =[
    {
      image:"https://presscs.com/wp-content/uploads/2017/05/veg-biryani.jpg",
      itemname:"Veg-Biryani",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "139",
      quantity: 1
    },
    {
      image:"https://www.indianveggiedelight.com/wp-content/uploads/2020/09/instant-pot-Paneer_butter_masala.jpg",
      itemname:"Panner Butter Masala",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "205",
      quantity: 1
    },
    {
      image:"https://www.awesomecuisine.com/wp-content/uploads/2014/06/dal-makhani.jpg",
      itemname:"Dal Makani",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "159",
      quantity: 1
    },
    {
      image:"https://static.toiimg.com/thumb/52413325.cms?imgsize=190896&width=800&height=800",
      itemname:"Coconut Rice",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "110",
      quantity: 1
    },
    {
      image:"https://4.bp.blogspot.com/-qWzc-7lpAXk/WIEb8Z55zmI/AAAAAAAACdE/iewzgRqTP2Q-TdRenIB3zLueuE9rW2nIQCLcB/s1600/vegetable%2Bpulao.JPG",
      itemname:"Veg-Pulao",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "179",
      quantity: 1
    },
    {
      image:"https://thumbs.dreamstime.com/b/indian-thali-26440151.jpg",
      itemname:"Thali",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "159",
      quantity: 1
    },
    {
      image:"https://static.toiimg.com/thumb/53943291.cms?width=1200&height=900",
      itemname:"Gutti Vankaya Kurra & Rice",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "89",
      quantity: 1
    },
    {
      image:"https://farm8.staticflickr.com/7717/17455499343_dc8eb42d0f_o.jpg",
      itemname:"Bisi Belebath",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "169",
      quantity: 1
    },
  ]
  nonvegDetails=[
    {
      image:"https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1567506352_DeccanBiriyani2500.jpg",
      itemname:"Dum Briyani (single)",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "159",
      quantity: 1
    },
    {
      image:"https://veenaazmanov.com/wp-content/uploads/2017/03/Hyderabad-Chicken-Biryani-Dum-Biryani-Kachi-Biryani4-500x500.jpg",
      itemname:"Dum Briyani (family)",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "499",
      quantity: 1
    },
    {
      image:"https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg",
      itemname:"Butter Chicken",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "229",
      quantity: 1
    },
    {
      image:"http://www.sashirecipes.com/wp-content/uploads/2009/07/GonguraChickenGravy.jpg",
      itemname:"Gongura Chicken",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "199",
      quantity: 1
    },
    {
      image:"https://yummydine.in/wp-content/uploads/2016/05/nanu-scaled.jpg",
      itemname:"Mutton Briyani(single)",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "239",
      quantity: 1
    },
    {
      image:"https://www.bigbasket.com/media/uploads/recipe/w-l/2244_1_1.jpg",
      itemname:"Mutton Briyani(Family)",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "899",
      quantity: 1
    },
    {
      image:"http://www.telugufoodrecipes.com/resources/picture/org/Apollo-fish.jpg",
      itemname:"Apollo Fish",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "389",
      quantity: 1
    },
    {
      image:"https://www.yummytummyaarthi.com/wp-content/uploads/2015/03/1-19.jpg",
      itemname:"Chilli Chicken",
      type:"Veg",
      cuisine:"South India",
      availability:"Breakfast & Lunch",
      price: "199",
      quantity: 1
    },
  ]
  cartAddedItems:any = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {}
  plus(i:any){
    if(this.tiffinsDetails[i].quantity !=10){
    this.tiffinsDetails[i].quantity = this.tiffinsDetails[i].quantity+1;
    }
  }
  minus(i:any){
    if(this.tiffinsDetails[i].quantity > 1){
      this.tiffinsDetails[i].quantity = this.tiffinsDetails[i].quantity-1;
    }
  }
  plus1(i:any){
    if(this.vegetarianDetails[i].quantity !=10){
    this.vegetarianDetails[i].quantity = this.vegetarianDetails[i].quantity+1;
    }
  }
  minus1(i:any){
    if(this.vegetarianDetails[i].quantity > 1){
      this.vegetarianDetails[i].quantity = this.vegetarianDetails[i].quantity-1;
    }
  }
  plus2(i:any){
    if(this.nonvegDetails[i].quantity !=10){
    this.nonvegDetails[i].quantity = this.nonvegDetails[i].quantity+1;
    }
  }
  minus2(i:any){
    if(this.nonvegDetails[i].quantity > 1){
      this.nonvegDetails[i].quantity = this.nonvegDetails[i].quantity-1;
    }
  }
  itemsCart:any =[]
  addItemsToCart(item:any){
    let date = new Date();
    item.date = date;
    this.cartAddedItems.push(item);
    localStorage.setItem('localItem', JSON.stringify(this.cartAddedItems))


    
  }
}