import { Component } from "@angular/core";

//Decorator - begins with @, using component decorator
/*
selector: needs to have a selector to be given a name
to be used as a directive in the HTML
template: the view/HTML layout that appears in the directive
of index.html
*/
@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
  <div>My first component</div>
  </div>`
})

// Class - with property pageTitle of type string and default value
export class AppComponent {
  pageTitle: string = 'ACME Product Management';
}