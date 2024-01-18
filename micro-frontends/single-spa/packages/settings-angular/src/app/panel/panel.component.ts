import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class PanelComponent {
  @Input()
  panelTitle: string = '';

  @Input()
  icon?: string;

  @Input()
  iconHelp?: string;

  @Input()
  iconBadge?: string;
}
