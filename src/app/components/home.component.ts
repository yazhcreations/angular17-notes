import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../services/note.service';
import { NoteCardComponent } from '../components/note-card.component';
import {RouterModule} from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NoteCardComponent,RouterModule,],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public noteService: NoteService) {}
}
