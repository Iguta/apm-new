import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ProductService } from "./products.services";


@Component({
  selector: "pm-products",
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  private _listFilter: string = '';
  //shorthand
  //this creates a local private property productService and assigns it to the injected service
  constructor(private productService:ProductService){}
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log("In setter: ", value);
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts: Iproduct[] = [];
  products: Iproduct[] = [];
  performFilter(filterBy:string): Iproduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product:Iproduct) =>
    product.productName.toLowerCase().includes(filterBy))
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  };
  onRatingClicked(message:string):void{
    this.pageTitle = "Product List: " + message
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
}
