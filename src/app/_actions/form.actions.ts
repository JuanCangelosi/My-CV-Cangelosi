import { Action } from '@ngrx/store';
import { ContactForm } from '../_DTO/contact-form';
 
export enum ActionTypes {
  Save_Form = '[ContactForm] Save_Form',
  Reset_Form = '[ContactForm] Reset_Form',
}

export interface PayloadAction extends Action {
  payload?: any;
}

export class SaveFormAction implements PayloadAction {
  readonly type = ActionTypes.Save_Form;
  payload: ContactForm;
}

export class ResetFormAction implements PayloadAction {
  readonly type = ActionTypes.Reset_Form;
}
