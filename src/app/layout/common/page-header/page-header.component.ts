import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {distinctUntilChanged, filter, takeUntil} from "rxjs/operators";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
    @Input() title: string = "";
    @Input() description: string = "";
    @Input() filterDataSource: any = [];
    @Input() filter: any = [];
    @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
    destroyAll$ = new Subject();
  constructor(private activeRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

  }


    ngOnDestroy() {
        this.destroyAll$.next(null);
        this.destroyAll$.complete();
    }

}
