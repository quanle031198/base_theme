import {Component, OnDestroy, OnInit} from '@angular/core';
import {distinctUntilChanged, filter, takeUntil} from "rxjs/operators";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
    breadcrumbs: any = [];
    destroyAll$ = new Subject();
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
      this.breadcrumbs = this.buildBreadCrumb(this.activeRoute.root);
      console.log(this.breadcrumbs);
  }

  ngOnInit(): void {
      this.router.events.pipe(
          filter((event: any) => event instanceof NavigationEnd),
          distinctUntilChanged(),
          takeUntil(this.destroyAll$)
      ).subscribe(() => {
          this.breadcrumbs = this.buildBreadCrumb(this.activeRoute.root);
      })
  }

    buildBreadCrumb(route: ActivatedRoute, breadcrumbs = []): any[] {
        //If no routeConfig is avalailable we are on the root path

        // @ts-ignore
        let breadcrumbData = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';

        // Only adding route with non-empty label
        const newBreadcrumbs = breadcrumbData.label ? [ ...breadcrumbs, breadcrumbData ] : [ ...breadcrumbs];
        if (route.firstChild) {
            //If we are not on our current path yet,
            //there will be more children to look after, to build our breadcumb
            return this.buildBreadCrumb(route.firstChild, newBreadcrumbs);
        }
        return newBreadcrumbs;
    }

    ngOnDestroy() {
      this.destroyAll$.next(null);
      this.destroyAll$.complete();
    }

    navigateToUrl(url: string) {
        if(!url) return;
        this.router.navigateByUrl(url);
    }
}
