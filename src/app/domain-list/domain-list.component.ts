import { Component } from '@angular/core';
import {domainList} from '../../shared/mock-api-response/domain-list';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html'
})
export class DomainListComponent {
  /**
   *
   */
  constructor(private route:Router) {
    
  }
  DomainList = domainList;
  // Method to handle the click event and display the domain id
  details(domainId: string): void {
    // You can handle the domain ID here
    this.route.navigateByUrl(`domain/${domainId}`);
  }
  
}
