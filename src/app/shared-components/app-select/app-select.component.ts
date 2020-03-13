import {NgModule,Component,Input, Output, OnInit} from '@angular/core';
import {EventEmitter} from '@angular/core';

export interface SelectType {
    id: string;
    label: string;
    isSelected?: boolean;
}

@Component({
    selector: 'app-select',
    templateUrl: './app-select.component.html',
    styleUrls: ['./app-select.component.less']
})
export class AppSelectComponent implements OnInit{
    @Input() items: SelectType[] = [];
    @Input() selectedItem: SelectType;
    @Input() displayType = 'label';
    @Input() multiselect = false;
    @Output() doSelect = new EventEmitter<SelectType>();

    public _selectedItem: SelectType = {
        id: '',
        label: ''
    };

    public isOpenList = false;

    isSelected = false;

    constructor() { }

    ngOnInit() {
        if (!this.selectedItem) {
            if (this.items.length > 0) {
                this._selectedItem = this.items[0];
            } else {
                this._selectedItem = {
                    id: '',
                    label: ''
                };
            }
        } else {
            this._selectedItem = this.selectedItem;
        }
        console.log(this._selectedItem);
    }

    onClick(item) {
        this._selectedItem = item;

        if (!this.multiselect) {
            this.isOpenList = false;
            this.doSelect.emit(item);
        }
    }
}