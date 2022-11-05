import { Component } from "@angular/core";


@Component({
  selector: "pm-products",
  templateUrl:'./product-list.component.html'
})
export class ProductListComponent {
  pageTitle:string = "Product List";
  products :any[]= [
    {
      "productId":2,
      "productName":"Garden Cart",
      "productCode":"GDN-0023",
      "releaseDate":"Feb 18, 2022",
      "description":"15 gallon capaciyty rolling garden cart",
      "price":32.99,
      "starRating":4.2,
      "imageUrl":"assets/images/garden_cart.png"
    },
    {
      "productId":3,
      "productName":"Garden Cart 2",
      "productCode":"GDN-0024",
      "releaseDate":"Feb 18, 2032",
      "description":"15 gallon capaciyty rolling garden cart",
      "price":40.22,
      "starRating":4.6,
      "imageUrl":"assets/images/garden_cart.png"
    }
  ];
}
