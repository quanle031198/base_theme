import {
    Component,
    EventEmitter,
    Inject,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit, OnDestroy, OnChanges {
    @Input() dataSource: any = [];
    @Input() filter: any = [];
    @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();


    destroyAll$ = new Subject();

    defaultFilter = {
        type: "text",
        filter: null,
        filterBy: null
    }

    filters = [{...this.defaultFilter}];

    constructor() {

  }
    ngOnChanges(changes: SimpleChanges): void {
        if ("filter" in changes) {
            this.filters = !changes.filter.currentValue?.length ? [{...this.defaultFilter}] : JSON.parse(JSON.stringify(changes.filter.currentValue));
        }
    }

  ngOnInit(): void {

  }



    ngOnDestroy() {
      this.destroyAll$.next(null);
      this.destroyAll$.complete();
    }

    changeTypeFilter(e: any, filter: any) {
        const source = this.dataSource.find(source => source.field === e)
        filter.type = source.type;
        filter.data = source.data;
        if (filter.type == "rangePicker") {
            filter.filterBy = {
                start: null,
                end: null
            }
        } else {
            filter.filterBy = null;
        }
    }

    addFilter() {
        this.filters.push({...this.defaultFilter});
    }

    deleteFilter(index) {
        this.filters.splice(index, 1);
        if (this.filters.length === 0) {
            this.filters = [
                {
                    type: "text",
                    filter: null,
                    filterBy: null
                }
            ]
        }
    }

    clearAllFilter() {
        this.filters = [
            {
                type: "text",
                filter: null,
                filterBy: null
            }
        ]
    }

    apply() {
        this.filterChange.emit(this.filters);
    }
}
