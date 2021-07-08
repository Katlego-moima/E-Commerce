import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() contentType: string = '';
  @Input() dropdownContent: any[] = [];
  @Output() onSelectFilter: EventEmitter<any> = new EventEmitter();
  selected?: string = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  selectFilter(item: any, type: string): void {
    let itemId = item.id;
    this.selected = item.description;
    
    this.onSelectFilter.emit({itemId, type});
  }
}
