import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryEntryComponent } from './diary/diary-events/diary-entry/diary-entry.component';
import { DiaryPreviewComponent } from './diary/diary-events/diary-preview/diary-preview.component';
import { DiaryEventsComponent } from './diary/diary-events/diary-events.component';
import { DiaryFormComponent } from './diary/diary-events/diary-form/diary-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiaryComponent,
    DiaryEntryComponent,
    DiaryPreviewComponent,
    DiaryEventsComponent,
    DiaryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
