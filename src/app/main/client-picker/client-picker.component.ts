import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

interface Client {
  id:number;
  name:string;
}

@Component({
  selector: 'app-client-picker',
  templateUrl: './client-picker.component.html',
  styleUrls: ['./client-picker.component.less']
})
export class ClientPickerComponent implements OnInit {

  @Input() selectedClient = 0;
  @Output() clientChanged = new EventEmitter<number>();

  // TODO: This needs to be externally sourced
  clients:Client[] = [
    { id: 0,  name: 'Community Sift' }
  ]

  constructor() { }

  ngOnInit() : void { }

  onClientChanged () {
    this.clientChanged.emit(this.selectedClient);
  }

}
