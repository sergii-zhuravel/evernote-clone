import { get, post } from "./base";

const apiBaseUrl = "http://localhost:8000";

window.notesMock = [
  {
    id: 1,
    title: "test title",
    body: "test body"
  },
  {
    id: 2,
    title: "test title2",
    body: "<h1>Hello world</h1>"
  }
];

export function fetchNotes() {
  return new Promise(resolve => resolve(window.notesMock));
  //   return get(apiBaseUrl + "/notes");
}

export function fetchNoteById(id) {
  return window.notesMock.find(el => el.id === id);
  //   return get(apiBaseUrl + "/notes/" + id);
}

export function createNote(note) {
  const ids = window.notesMock.map(mock => mock.id);
  const newId = Math.max(...ids) + 1;
  const newNote = { ...note, id: newId };
  window.notesMock.push(newNote);
  return newNote;
  //   return post(apiBaseUrl + "/notes", note);
}

export function updateNote(id, note) {
  const noteToUpdate = window.notesMock.find(note => note.id === id);
  noteToUpdate.title = note.title;
  noteToUpdate.body = note.body;
  return noteToUpdate;
  //   return post(apiBaseUrl + "/notes" + note.id);
}

export function deleteNote(id) {
  window.notesMock = window.notesMock.filter(note => note.id !== id);
  return true;
}
