import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {
  @Input() name="";
   @Input() Amount= "";
   @Input() User="";
   @Input() Storage="";
   @Input() PublicProjects="Unlimited Public Projects";
   @Input() Access="Community Access";
   @Input() PrivateProjects="Unlimited private Projects";
   @Input() PhoneSupport="Dedicated Phone Support";
   @Input() Subdomain="";
   @Input() Reports="Monthly Status Report"

  constructor() { }

  ngOnInit(): void {
  }

}
