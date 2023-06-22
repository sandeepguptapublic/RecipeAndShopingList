import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(selectedHeader: string){
        this.featureSelected.emit(selectedHeader);
    }

}