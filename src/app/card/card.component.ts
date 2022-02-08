import { Component,Input, OnInit } from '@angular/core';

interface PriceCard{
  Free : String,
  price : String,
 User : string,
 storage : string,
 publicprojects : string,
 Access : string,
 privateprojects : string,
 support : string,
 subdomain : string,
 reports : string
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() priceCardData:PriceCard ={
    Free :"",
  price : "",
 User :"",
 storage :"",
 publicprojects :"",
 Access :"",
 privateprojects :"",
 support :"",
 subdomain:"",
 reports :""

  }

  ngOnInit(): void {
  }

}
