import { Component } from "@angular/core";
import { ProductService } from './products/product.service'

//Decorator - begins with @, using component decorator
/*
selector: needs to have a selector to be given a name
to be used as a directive in the HTML
template: the view/HTML layout that appears in the directive
of index.html
templateUrl: the link to template in a different file
*/
@Component({
  selector: 'pm-root',
  template: `
  <div>
  <pm-products></pm-products>
  </div>`,
  providers: [ProductService] 
})

// Class - with property pageTitle of type string and default value
export class AppComponent {
  pageTitle: string = 'ACME Product Management';
}