import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService, Note } from '../services/note.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  title = '';
  content = '';
  editingNoteId: number | null = null;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const note = this.noteService.getNoteById(id);
      if (note) {
        this.editingNoteId = note.id;
        this.title = note.title;
        this.content = note.content;
      }
    }
  }

  saveNote() {
    if (this.title.trim() && this.content.trim()) {
      const note: Note = {
        id: this.editingNoteId ?? Date.now(),
        title: this.title,
        content: this.content,
      };

      if (this.editingNoteId) {
        this.noteService.updateNote(note);
      } else {
        this.noteService.addNote(note);
      }

      this.router.navigate(['/']);
    }
  }
}
