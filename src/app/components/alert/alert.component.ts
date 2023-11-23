import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() title!: string
  @Input() message!: string
  @Input() icon?: string
  @Input() buttonText?: string
  @Input() color? = "warn"
  @Output() buttonClick = new EventEmitter()

  onButtonClick() {
    this.buttonClick.emit()
  }
}
