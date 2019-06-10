import reducer from './notesReducer';
import { newNote, NEW_NOTE_PENDING } from '../actions/notesActions';

describe('notes reducer', () => {
  it('handles NEW_NOTE_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
});
