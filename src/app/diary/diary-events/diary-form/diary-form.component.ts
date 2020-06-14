import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Entry } from '../../../entry';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  newEntry = new Entry(0, new Date(), '','');

  @Output() addEntry = new EventEmitter<Entry>();

  constructor() { }

  ngOnInit(): void {

  }

  submitEntry(){
    this.addEntry.emit(this.newEntry);
  }
  previewEntry(){
    this.addEntry.emit(this.newEntry);
  }
}
