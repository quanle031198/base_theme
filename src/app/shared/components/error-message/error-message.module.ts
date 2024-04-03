import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent],
  imports: [CommonModule, FormsModule],
})
export class ErrorMessageModule {}
