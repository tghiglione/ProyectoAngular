import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { StoreActions } from './store.actions';


@Injectable()
export class StoreEffects {

  yStores$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StoreActions.yStores),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => StoreActions.yStoresSuccess({ data })),
          catchError(error => of(StoreActions.yStoresFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
