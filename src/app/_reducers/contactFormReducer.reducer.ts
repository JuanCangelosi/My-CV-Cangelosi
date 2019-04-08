import { Action } from '@ngrx/store';
import { ActionTypes, PayloadAction } from '../_actions/form.actions';
import { ContactForm } from '../_DTO/contact-form';

export const initialState: ContactForm = JSON.parse(localStorage.getItem('formState')) || {
  email: '',
  comment: '',
  name: '',
};

export function contactFormReducer(state = initialState, action: PayloadAction) {
  switch (action.type) {

    case ActionTypes.Save_Form: {
      localStorage.setItem('formState', JSON.stringify(action.payload));
      return action.payload;
    }

    case ActionTypes.Reset_Form: {
      localStorage.removeItem('formState');
      return {
        email: '',
        comment: '',
        name: '',
      };
    }


    default:
      return state;
  }
}
