import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-project';
  headerSelected: string = 'recipe';

  onHeaderSelected(feature: string){
    this.headerSelected = feature;
  }


}
