import { Component, ElementRef, Input, ViewChild, } from "@angular/core";
import { asapScheduler } from "rxjs";
import ApexCharts from "apexcharts";
import * as i0 from "@angular/core";
export class ChartComponent {
    constructor() {
        this.autoUpdateSeries = true;
    }
    ngOnInit() {
        asapScheduler.schedule(() => {
            this.createElement();
        });
    }
    ngOnChanges(changes) {
        asapScheduler.schedule(() => {
            if (this.autoUpdateSeries &&
                Object.keys(changes).filter((c) => c !== "series").length === 0) {
                this.updateSeries(this.series, true);
                return;
            }
            this.createElement();
        });
    }
    ngOnDestroy() {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    }
    createElement() {
        const options = {};
        if (this.annotations) {
            options.annotations = this.annotations;
        }
        if (this.chart) {
            options.chart = this.chart;
        }
        if (this.colors) {
            options.colors = this.colors;
        }
        if (this.dataLabels) {
            options.dataLabels = this.dataLabels;
        }
        if (this.series) {
            options.series = this.series;
        }
        if (this.stroke) {
            options.stroke = this.stroke;
        }
        if (this.labels) {
            options.labels = this.labels;
        }
        if (this.legend) {
            options.legend = this.legend;
        }
        if (this.fill) {
            options.fill = this.fill;
        }
        if (this.tooltip) {
            options.tooltip = this.tooltip;
        }
        if (this.plotOptions) {
            options.plotOptions = this.plotOptions;
        }
        if (this.responsive) {
            options.responsive = this.responsive;
        }
        if (this.markers) {
            options.markers = this.markers;
        }
        if (this.noData) {
            options.noData = this.noData;
        }
        if (this.xaxis) {
            options.xaxis = this.xaxis;
        }
        if (this.yaxis) {
            options.yaxis = this.yaxis;
        }
        if (this.grid) {
            options.grid = this.grid;
        }
        if (this.states) {
            options.states = this.states;
        }
        if (this.title) {
            options.title = this.title;
        }
        if (this.subtitle) {
            options.subtitle = this.subtitle;
        }
        if (this.theme) {
            options.theme = this.theme;
        }
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        this.chartObj = new ApexCharts(this.chartElement.nativeElement, options);
        this.render();
    }
    render() {
        return this.chartObj.render();
    }
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
    }
    updateSeries(newSeries, animate) {
        this.chartObj.updateSeries(newSeries, animate);
    }
    appendSeries(newSeries, animate) {
        this.chartObj.appendSeries(newSeries, animate);
    }
    appendData(newData) {
        this.chartObj.appendData(newData);
    }
    toggleSeries(seriesName) {
        return this.chartObj.toggleSeries(seriesName);
    }
    showSeries(seriesName) {
        this.chartObj.showSeries(seriesName);
    }
    hideSeries(seriesName) {
        this.chartObj.hideSeries(seriesName);
    }
    resetSeries() {
        this.chartObj.resetSeries();
    }
    zoomX(min, max) {
        this.chartObj.zoomX(min, max);
    }
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
    }
    destroy() {
        this.chartObj.destroy();
    }
    setLocale(localeName) {
        this.chartObj.setLocale(localeName);
    }
    paper() {
        this.chartObj.paper();
    }
    addXaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
    }
    addYaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
    }
    addPointAnnotation(options, pushToMemory, context) {
        this.chartObj.addPointAnnotation(options, pushToMemory, context);
    }
    removeAnnotation(id, options) {
        this.chartObj.removeAnnotation(id, options);
    }
    clearAnnotations(options) {
        this.chartObj.clearAnnotations(options);
    }
    dataURI(options) {
        return this.chartObj.dataURI(options);
    }
}
/** @nocollapse */ /** @nocollapse */ ChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ /** @nocollapse */ ChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ChartComponent, selector: "apx-chart", inputs: { chart: "chart", annotations: "annotations", colors: "colors", dataLabels: "dataLabels", series: "series", stroke: "stroke", labels: "labels", legend: "legend", markers: "markers", noData: "noData", fill: "fill", tooltip: "tooltip", plotOptions: "plotOptions", responsive: "responsive", xaxis: "xaxis", yaxis: "yaxis", grid: "grid", states: "states", title: "title", subtitle: "subtitle", theme: "theme", autoUpdateSeries: "autoUpdateSeries" }, viewQueries: [{ propertyName: "chartElement", first: true, predicate: ["chart"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: "<div #chart></div>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{ selector: "apx-chart", template: "<div #chart></div>\n", styles: [""] }]
        }], propDecorators: { chart: [{
                type: Input
            }], annotations: [{
                type: Input
            }], colors: [{
                type: Input
            }], dataLabels: [{
                type: Input
            }], series: [{
                type: Input
            }], stroke: [{
                type: Input
            }], labels: [{
                type: Input
            }], legend: [{
                type: Input
            }], markers: [{
                type: Input
            }], noData: [{
                type: Input
            }], fill: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], plotOptions: [{
                type: Input
            }], responsive: [{
                type: Input
            }], xaxis: [{
                type: Input
            }], yaxis: [{
                type: Input
            }], grid: [{
                type: Input
            }], states: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], theme: [{
                type: Input
            }], autoUpdateSeries: [{
                type: Input
            }], chartElement: [{
                type: ViewChild,
                args: ["chart", { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctYXBleGNoYXJ0cy9zcmMvbGliL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWFwZXhjaGFydHMvc3JjL2xpYi9jaGFydC9jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBc0J2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sVUFBVSxNQUFNLFlBQVksQ0FBQzs7QUFPcEMsTUFBTSxPQUFPLGNBQWM7SUFMM0I7UUE0QlcscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0tBeU5sQztJQXBOQyxRQUFRO1FBQ04sYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUNFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDL0Q7Z0JBQ0EsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDOUI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDNUI7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxhQUFhLENBQ2xCLE9BQVksRUFDWixXQUFxQixFQUNyQixPQUFpQixFQUNqQixrQkFBNEI7UUFFNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FDaEMsT0FBTyxFQUNQLFdBQVcsRUFDWCxPQUFPLEVBQ1Asa0JBQWtCLENBQ25CLENBQUM7SUFDSixDQUFDO0lBRU0sWUFBWSxDQUNqQixTQUF1RCxFQUN2RCxPQUFpQjtRQUVqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLFlBQVksQ0FDakIsU0FBdUQsRUFDdkQsT0FBaUI7UUFFakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxVQUFVLENBQUMsT0FBYztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sWUFBWSxDQUFDLFVBQWtCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxVQUFrQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sVUFBVSxDQUFDLFVBQWtCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBVztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLHdCQUF3QixDQUM3QixXQUFtQixFQUNuQixjQUF1QjtRQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtCQUFrQixDQUN2QixPQUFZLEVBQ1osWUFBc0IsRUFDdEIsT0FBYTtRQUViLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sa0JBQWtCLENBQ3ZCLE9BQVksRUFDWixZQUFzQixFQUN0QixPQUFhO1FBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTSxrQkFBa0IsQ0FDdkIsT0FBWSxFQUNaLFlBQXNCLEVBQ3RCLE9BQWE7UUFFYixJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEVBQVUsRUFBRSxPQUFhO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxPQUFhO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxPQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7aUpBL09VLGNBQWM7cUlBQWQsY0FBYyxpb0JDeEMzQixzQkFDQTsyRkR1Q2EsY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxXQUFXOzhCQUtaLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUV3QyxZQUFZO3NCQUF6RCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBcGV4QW5ub3RhdGlvbnMsXG4gIEFwZXhBeGlzQ2hhcnRTZXJpZXMsXG4gIEFwZXhDaGFydCxcbiAgQXBleERhdGFMYWJlbHMsXG4gIEFwZXhGaWxsLFxuICBBcGV4R3JpZCxcbiAgQXBleExlZ2VuZCxcbiAgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgQXBleE1hcmtlcnMsXG4gIEFwZXhOb0RhdGEsXG4gIEFwZXhQbG90T3B0aW9ucyxcbiAgQXBleFJlc3BvbnNpdmUsXG4gIEFwZXhTdGF0ZXMsXG4gIEFwZXhTdHJva2UsXG4gIEFwZXhUaGVtZSxcbiAgQXBleFRpdGxlU3VidGl0bGUsXG4gIEFwZXhUb29sdGlwLFxuICBBcGV4WEF4aXMsXG4gIEFwZXhZQXhpcyxcbn0gZnJvbSBcIi4uL21vZGVsL2FwZXgtdHlwZXNcIjtcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgQXBleENoYXJ0cyBmcm9tIFwiYXBleGNoYXJ0c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXB4LWNoYXJ0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2hhcnQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NoYXJ0LmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNoYXJ0OiBBcGV4Q2hhcnQ7XG4gIEBJbnB1dCgpIGFubm90YXRpb25zOiBBcGV4QW5ub3RhdGlvbnM7XG4gIEBJbnB1dCgpIGNvbG9yczogYW55W107XG4gIEBJbnB1dCgpIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xuICBASW5wdXQoKSBzZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzO1xuICBASW5wdXQoKSBzdHJva2U6IEFwZXhTdHJva2U7XG4gIEBJbnB1dCgpIGxhYmVsczogc3RyaW5nW107XG4gIEBJbnB1dCgpIGxlZ2VuZDogQXBleExlZ2VuZDtcbiAgQElucHV0KCkgbWFya2VyczogQXBleE1hcmtlcnM7XG4gIEBJbnB1dCgpIG5vRGF0YTogQXBleE5vRGF0YTtcbiAgQElucHV0KCkgZmlsbDogQXBleEZpbGw7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IEFwZXhUb29sdGlwO1xuICBASW5wdXQoKSBwbG90T3B0aW9uczogQXBleFBsb3RPcHRpb25zO1xuICBASW5wdXQoKSByZXNwb25zaXZlOiBBcGV4UmVzcG9uc2l2ZVtdO1xuICBASW5wdXQoKSB4YXhpczogQXBleFhBeGlzO1xuICBASW5wdXQoKSB5YXhpczogQXBleFlBeGlzIHwgQXBleFlBeGlzW107XG4gIEBJbnB1dCgpIGdyaWQ6IEFwZXhHcmlkO1xuICBASW5wdXQoKSBzdGF0ZXM6IEFwZXhTdGF0ZXM7XG4gIEBJbnB1dCgpIHRpdGxlOiBBcGV4VGl0bGVTdWJ0aXRsZTtcbiAgQElucHV0KCkgc3VidGl0bGU6IEFwZXhUaXRsZVN1YnRpdGxlO1xuICBASW5wdXQoKSB0aGVtZTogQXBleFRoZW1lO1xuXG4gIEBJbnB1dCgpIGF1dG9VcGRhdGVTZXJpZXMgPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoXCJjaGFydFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNoYXJ0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZVNlcmllcyAmJlxuICAgICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGMpID0+IGMgIT09IFwic2VyaWVzXCIpLmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2VyaWVzKHRoaXMuc2VyaWVzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge307XG5cbiAgICBpZiAodGhpcy5hbm5vdGF0aW9ucykge1xuICAgICAgb3B0aW9ucy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICBvcHRpb25zLmNoYXJ0ID0gdGhpcy5jaGFydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sb3JzKSB7XG4gICAgICBvcHRpb25zLmNvbG9ycyA9IHRoaXMuY29sb3JzO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhTGFiZWxzKSB7XG4gICAgICBvcHRpb25zLmRhdGFMYWJlbHMgPSB0aGlzLmRhdGFMYWJlbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlcmllcykge1xuICAgICAgb3B0aW9ucy5zZXJpZXMgPSB0aGlzLnNlcmllcztcbiAgICB9XG4gICAgaWYgKHRoaXMuc3Ryb2tlKSB7XG4gICAgICBvcHRpb25zLnN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbHMpIHtcbiAgICAgIG9wdGlvbnMubGFiZWxzID0gdGhpcy5sYWJlbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xuICAgICAgb3B0aW9ucy5sZWdlbmQgPSB0aGlzLmxlZ2VuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsbCkge1xuICAgICAgb3B0aW9ucy5maWxsID0gdGhpcy5maWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICBvcHRpb25zLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBsb3RPcHRpb25zKSB7XG4gICAgICBvcHRpb25zLnBsb3RPcHRpb25zID0gdGhpcy5wbG90T3B0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMucmVzcG9uc2l2ZSkge1xuICAgICAgb3B0aW9ucy5yZXNwb25zaXZlID0gdGhpcy5yZXNwb25zaXZlO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXJrZXJzKSB7XG4gICAgICBvcHRpb25zLm1hcmtlcnMgPSB0aGlzLm1hcmtlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vRGF0YSkge1xuICAgICAgb3B0aW9ucy5ub0RhdGEgPSB0aGlzLm5vRGF0YTtcbiAgICB9XG4gICAgaWYgKHRoaXMueGF4aXMpIHtcbiAgICAgIG9wdGlvbnMueGF4aXMgPSB0aGlzLnhheGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy55YXhpcykge1xuICAgICAgb3B0aW9ucy55YXhpcyA9IHRoaXMueWF4aXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIG9wdGlvbnMuZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGVzKSB7XG4gICAgICBvcHRpb25zLnN0YXRlcyA9IHRoaXMuc3RhdGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy50aXRsZSkge1xuICAgICAgb3B0aW9ucy50aXRsZSA9IHRoaXMudGl0bGU7XG4gICAgfVxuICAgIGlmICh0aGlzLnN1YnRpdGxlKSB7XG4gICAgICBvcHRpb25zLnN1YnRpdGxlID0gdGhpcy5zdWJ0aXRsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGhlbWUpIHtcbiAgICAgIG9wdGlvbnMudGhlbWUgPSB0aGlzLnRoZW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0T2JqID0gbmV3IEFwZXhDaGFydHModGhpcy5jaGFydEVsZW1lbnQubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVPcHRpb25zKFxuICAgIG9wdGlvbnM6IGFueSxcbiAgICByZWRyYXdQYXRocz86IGJvb2xlYW4sXG4gICAgYW5pbWF0ZT86IGJvb2xlYW4sXG4gICAgdXBkYXRlU3luY2VkQ2hhcnRzPzogYm9vbGVhblxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai51cGRhdGVPcHRpb25zKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHJlZHJhd1BhdGhzLFxuICAgICAgYW5pbWF0ZSxcbiAgICAgIHVwZGF0ZVN5bmNlZENoYXJ0c1xuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlU2VyaWVzKFxuICAgIG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXG4gICAgYW5pbWF0ZT86IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy5jaGFydE9iai51cGRhdGVTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBlbmRTZXJpZXMoXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgICBhbmltYXRlPzogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmFwcGVuZFNlcmllcyhuZXdTZXJpZXMsIGFuaW1hdGUpO1xuICB9XG5cbiAgcHVibGljIGFwcGVuZERhdGEobmV3RGF0YTogYW55W10pIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmFwcGVuZERhdGEobmV3RGF0YSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHNob3dTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFydE9iai5zaG93U2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIGhpZGVTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFydE9iai5oaWRlU2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0U2VyaWVzKCkge1xuICAgIHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyB6b29tWChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnpvb21YKG1pbiwgbWF4KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEYXRhUG9pbnRTZWxlY3Rpb24oXG4gICAgc2VyaWVzSW5kZXg6IG51bWJlcixcbiAgICBkYXRhUG9pbnRJbmRleD86IG51bWJlclxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihzZXJpZXNJbmRleCwgZGF0YVBvaW50SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnNldExvY2FsZShsb2NhbGVOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXBlcigpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnBhcGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkWGF4aXNBbm5vdGF0aW9uKFxuICAgIG9wdGlvbnM6IGFueSxcbiAgICBwdXNoVG9NZW1vcnk/OiBib29sZWFuLFxuICAgIGNvbnRleHQ/OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5jaGFydE9iai5hZGRYYXhpc0Fubm90YXRpb24ob3B0aW9ucywgcHVzaFRvTWVtb3J5LCBjb250ZXh0KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRZYXhpc0Fubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xuICB9XG5cbiAgcHVibGljIGFkZFBvaW50QW5ub3RhdGlvbihcbiAgICBvcHRpb25zOiBhbnksXG4gICAgcHVzaFRvTWVtb3J5PzogYm9vbGVhbixcbiAgICBjb250ZXh0PzogYW55XG4gICkge1xuICAgIHRoaXMuY2hhcnRPYmouYWRkUG9pbnRBbm5vdGF0aW9uKG9wdGlvbnMsIHB1c2hUb01lbW9yeSwgY29udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQW5ub3RhdGlvbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdGhpcy5jaGFydE9iai5yZW1vdmVBbm5vdGF0aW9uKGlkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmNsZWFyQW5ub3RhdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZGF0YVVSSShvcHRpb25zPzogYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmouZGF0YVVSSShvcHRpb25zKTtcbiAgfVxufVxuIiwiPGRpdiAjY2hhcnQ+PC9kaXY+XG4iXX0=