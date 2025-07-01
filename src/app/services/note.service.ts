import { Injectable, signal } from '@angular/core';

export interface Note {
  id: number;
  title: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class NoteService {
  private _notes = signal<Note[]>([
    { id: 1, title: 'Welcome Note', content: 'This is your first note!' },
  ]);

  notes = this._notes.asReadonly();

  addNote(note: Note) {
    this._notes.update((notes) => [...notes, note]);
  }

  updateNote(updated: Note) {
    this._notes.update((notes) =>
      notes.map((n) => (n.id === updated.id ? updated : n))
    );
  }

  getNoteById(id: number): Note | undefined {
    return this._notes().find((n) => n.id === id);
  }
}
