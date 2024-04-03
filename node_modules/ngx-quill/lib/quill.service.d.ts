import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { QuillConfig } from './quill-editor.interfaces';
import * as i0 from "@angular/core";
export declare class QuillService {
    config: QuillConfig;
    private Quill;
    private document;
    private quill$;
    constructor(injector: Injector, config: QuillConfig);
    getQuill(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuillService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QuillService>;
}
