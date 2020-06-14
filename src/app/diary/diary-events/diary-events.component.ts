import { Component, OnInit } from '@angular/core';
import { Entry } from '../../entry';

@Component({
  selector: 'app-diary-events',
  templateUrl: './diary-events.component.html',
  styleUrls: ['./diary-events.component.css']
})
export class DiaryEventsComponent implements OnInit {

  events: Entry[] = [
    new Entry(0, new Date(), 'what a day!', 'dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qm vel eum iure reprehenderit qui in ea voluptate velit esse.'),
    new Entry(1, new Date(), 'what a day!', 'dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qm vel eum iure reprehenderit qui in ea voluptate velit esse.'),
    new Entry(1, new Date(), 'what a day!', 'dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qm vel eum iure reprehenderit qui in ea voluptate velit esse.')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addNewEntry(entry){
    let eventsLength = this.events.length;
    entry.id = eventsLength + 1;
    entry.date = new Date(entry.date);
    this.events.push(entry);
  }
  removeEntry(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.events[index].title}?`)

      if (toDelete){
        this.events.splice(index,1)
      }
    }
  }
}
