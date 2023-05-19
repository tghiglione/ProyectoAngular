import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const StoreActions = createActionGroup({
  source: 'Store',
  events: {
    'Y Stores': emptyProps(),
    'Y Stores Success': props<{ data: unknown }>(),
    'Y Stores Failure': props<{ error: unknown }>(),
  }
});
