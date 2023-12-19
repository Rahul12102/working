import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue: string ='';
  @Output()
  enteredSearchValueChanged: EventEmitter<string> = new EventEmitter<string>();

  searchValueChanged(){
    this.enteredSearchValueChanged.emit(this.enteredSearchValue);
    // console.log(this.enteredSearchValue);
  }
}
