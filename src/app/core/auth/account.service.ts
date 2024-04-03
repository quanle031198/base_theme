import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject, of} from 'rxjs';
import {shareReplay, tap, catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {UserService} from "../user/user.service";
import {User} from "../user/user.types";

@Injectable({providedIn: 'root'})
export class AccountService {
    private userIdentity: User | null = null;
    private authenticationState = new ReplaySubject<User | null>(1);
    public accountCache$?: Observable<User | null>;

    constructor(
        private http: HttpClient,
        private router: Router,
        private _userService: UserService
    ) {
    }

    save(account: User): Observable<{}> {
        return this.http.post(environment.apiUrl + '/account', account);
    }

    authenticate(identity: User | null): void {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
        this._userService.user = identity;

    }

    hasAnyAuthority(authorities: string[] | string, isMenu?: boolean): boolean {
        if (!this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        const modules = [];
        this.userIdentity.authorities.forEach(auth => {
            if (!modules.includes(auth.moduleName)) modules.push(auth.moduleName);
        });
        const roleAdmin = this.userIdentity.login === 'admin' ? ['ROLE_ADMIN'] : [];
        return this.userIdentity.authorities
            .map(auth => `${auth.moduleName}.${auth.code}`).concat(modules).concat(roleAdmin)
            .some((authority) => authorities.includes(authority));
    }

    identity(force?: boolean): Observable<User | null> {
        if (!this.accountCache$ || force || !this.isAuthenticated()) {
            this.accountCache$ = this.fetch().pipe(
                catchError(() => {
                    return of(null);
                }),
                tap((account: User | null) => {
                    this.authenticate(account);

                    // After retrieve the account info, the language will be changed to
                    // the user's preferred language configured in the account setting
                    // if (account && account.langKey) {
                    //     const langKey = this.sessionStorage.retrieve('locale') || account.langKey;
                    // }

                    if (account) {
                        this.navigateToStoredUrl();
                    }
                }),
                shareReplay()
            );
        }
        return this.accountCache$;
    }

    isAuthenticated(): boolean {
        return this.userIdentity !== null;
    }

    getAuthenticationState(): Observable<User | null> {
        return this.authenticationState.asObservable();
    }

    getImageUrl(): string {
        return this.userIdentity ? this.userIdentity.imageUrl : '';
    }

    private fetch(): Observable<User> {
        return this.http.get<User>(environment.apiUrl + '/account');
    }

    private navigateToStoredUrl(): void {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        // const previousUrl = this.stateStorageService.getUrl();
        // if (previousUrl) {
        //     this.stateStorageService.clearUrl();
        //     this.router.navigateByUrl(previousUrl);
        // }
    }
}
