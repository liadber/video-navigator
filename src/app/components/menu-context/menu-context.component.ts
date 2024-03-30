import {Component, Input} from '@angular/core';
import {CdkContextMenuTrigger, CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {CommonModule} from "@angular/common";
import {Button} from "../../models/button.model";

@Component({
  selector: 'app-menu-context',
  standalone: true,
  imports: [CdkContextMenuTrigger, CdkMenu, CdkMenuItem, CommonModule],
  templateUrl: './menu-context.component.html',
  styleUrl: './menu-context.component.css'
})
/** The context injected to this component using ng-content and allowed specific menu using input **/
export class MenuContextComponent {
  @Input() menuItems: Button[] = [];
}
