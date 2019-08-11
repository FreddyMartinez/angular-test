import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Login, Logout } from './auth.actions';
import { AuthService } from '@core-services/auth.service';
import { tap } from 'rxjs/operators';

export interface AuthStateModel {
    accessToken?: string;
    username?: string;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {}
})
export class AuthState {

    @Selector()
    static token(state: AuthStateModel) {
        return state.accessToken;
    }

    constructor(private authService: AuthService) { }

    @Action(Login)
    login({ patchState, getState }: StateContext<AuthStateModel>, { payload }: Login) {
        return this.authService.login(payload).pipe(tap((result: { accessToken: string }) => {
            patchState({ accessToken: result.accessToken, username: payload.username });
        }));
    }

    @Action(Logout)
    logout({ setState }: StateContext<AuthStateModel>) {
        setState({});
    }
}