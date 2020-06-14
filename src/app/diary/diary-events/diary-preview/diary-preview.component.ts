import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/entry';

@Component({
  selector: 'app-diary-preview',
  templateUrl: './diary-preview.component.html',
  styleUrls: ['./diary-preview.component.css']
})
export class DiaryPreviewComponent implements OnInit {

  entryPreview = new Entry(0, new Date, '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
