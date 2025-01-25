import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {domainList} from '../../shared/mock-api-response/domain-list';
@Component({
  selector: 'app-domain-details',
  templateUrl: './domain-details.component.html',
  styleUrls: ['./domain-details.component.scss']
})
export class DomainDetailsComponent implements OnInit {
  domainId:any;
  constructor(private route:ActivatedRoute,private router: Router) {    
  }
  DomainList = domainList;
  selectedData:any;
  ngOnInit(): void {
    // this.route.params.subscribe(
    //   param => {
    //     this.id = param['id'];
    //   }
    // )
    this.domainId = this.route.snapshot.paramMap.get('id');
    this.selectedData = this.DomainList.filter(item => item.id === this.domainId)
    console.log( this.selectedData,)
  }
   goBackToList(): void {
    // Navigate to the root path which is the domain list page
    this.router.navigate(['/']);
  }
  // In your component
get formattedRenewalPrice(): string {
  return `$${this.selectedData[0].renewal_price.toFixed(2)}/yr`;
}


}
