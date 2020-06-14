import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from 'src/app/entry'; 

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.css']
})
export class DiaryEntryComponent implements OnInit {

  @Input() entry: Entry;
  selectedTitle: boolean = true;
  @Output() isComplete = new EventEmitter<boolean>();
  
  constructor() { 
    this.selectedTitle = false;
  }
  ngOnInit(): void {
  }
  onSelectTitle(){
    this.selectedTitle = !this.selectedTitle;
  }
  deleteEntry(complete: boolean){
    this.isComplete.emit(complete);
  }

}
