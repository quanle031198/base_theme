import { ModuleWithProviders, Provider, SecurityContext } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./language.pipe";
import * as i2 from "./markdown.component";
import * as i3 from "./markdown.pipe";
export interface MarkdownModuleConfig {
    loader?: Provider;
    markedOptions?: Provider;
    sanitize?: SecurityContext;
}
export declare class MarkdownModule {
    static forRoot(markdownModuleConfig?: MarkdownModuleConfig): ModuleWithProviders<MarkdownModule>;
    static forChild(): ModuleWithProviders<MarkdownModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MarkdownModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MarkdownModule, [typeof i1.LanguagePipe, typeof i2.MarkdownComponent, typeof i3.MarkdownPipe], never, [typeof i1.LanguagePipe, typeof i2.MarkdownComponent, typeof i3.MarkdownPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MarkdownModule>;
}
