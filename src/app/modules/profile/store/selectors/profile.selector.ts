import { staticViewQueryIds } from '@angular/compiler';
import { createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { IProfileState } from '../state/profile.state';


const selectProfile = (state: IAppState) => state.profile;

export const profileState = createSelector(
    selectProfile,
    (state: IProfileState) => state
)

