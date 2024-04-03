import {Component, EventEmitter, Injector, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {distinctUntilChanged, filter, takeUntil} from "rxjs/operators";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import { Subject } from 'rxjs';
import {BaseComponent} from "../../../core/base.component";
import {FilterDialogComponent} from "./filter-dialog/filter-dialog.component";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent extends BaseComponent implements OnInit, OnDestroy {
    @Input() dataSource: any = [];
    @Input() filter: any = [];
    @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('menuTrigger') trigger;

    destroyAll$ = new Subject();
    isMenuOpen: boolean = false;

    constructor(injector: Injector, private activeRoute: ActivatedRoute, private router: Router) {
        super(injector);
    }

  ngOnInit(): void {

  }

    get listValidFilter() {
        return this.filter.filter(f => f.filter && f.filterBy);
    }

    ngOnDestroy() {
      this.destroyAll$.next(null);
      this.destroyAll$.complete();
    }


    onMenuClose() {
        setTimeout(() => {
            this.isMenuOpen = false;
        }, 200)
    }

    onMenuOpen() {
        this.isMenuOpen = true;
    }

    onFilterChange($event: any) {
        this.filterChange.emit($event);
        this.trigger.closeMenu();
    }
}
