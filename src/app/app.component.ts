import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
interface PriceCard{
  Free : string,
  price : string,
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priceCards';
  priceCards:Array<PriceCard> = [{
    Free :'Free',
        price :"$0" ,
        User :"Single User" ,
        storage :"5GB Storage",
        publicprojects:"Unlimited Public Projects",
        Access:"Community Access",
        privateprojects:"Unlimited Private Projects",
        support:"Dedicate Phone Support" ,
        subdomain:"Free Subdomain",
       reports:"Monthly Status Reports"
  },
   {
    Free :"Plus" ,
  price :"$9" ,
  User : "5 Users",
  storage:"50GB Storage ",
  publicprojects:"Unlimited Public Projects" ,
  Access:"Community Access",
  privateprojects:"Unlimited Private Projects",
  support:"Dedicate phone Support",
  subdomain:"Free Subdomain" ,
  reports:"Monthly Status Reports"
  }, 
 {
    Free :"Pro" ,
    price :"$49 " ,
    User :"Unlimited User" ,
    storage:"150GB Storage",
     publicprojects:"Unlimited Public Projects",
     Access:"Community Access",
     privateprojects:"Unlimited Private Projects",
     support:"Dedicate phone Support",
      subdomain:" Unlimited Free Subdomain" ,
   reports:"Monthly Status Reports"
  } 
]
}

