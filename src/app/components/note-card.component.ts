import { Component, Input } from '@angular/core';
import { Note } from '../services/note.service';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note!: Note;
}


