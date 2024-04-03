import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";
import {AuthService} from "./core/auth/auth.service";
import {distinctUntilChanged, filter} from "rxjs/operators";

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    /**
     * Constructor
     */
    breadcrumbs: any[] = [];
    constructor( private activeRoute: ActivatedRoute, private router: Router, private authService: AuthService) {}
    ngOnInit() {
        this.checkLoginSSO()
    }

    checkLoginSSO(): void {
        const ticket = window.location.href.split('ticket=')[1];
        if (ticket) {
            localStorage.setItem('ticket', ticket);
            this.authService.signIn({'ticket': ticket}).subscribe();
        }
    }


}
