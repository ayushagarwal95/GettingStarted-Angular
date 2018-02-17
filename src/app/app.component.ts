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
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{ pageTitle }}</a>
          <ul class='nav navbar-nav'>
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <router-outlet></router-outlet>
      </div>
    </div>
 `,
  providers: [ProductService] 
})

// Class - with property pageTitle of type string and default value
export class AppComponent {
  pageTitle: string = 'ACME Product Management';
}