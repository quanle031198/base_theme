import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() control!: AbstractControlDirective | AbstractControl | any;
  @Input() name = 'Trường này';
  @Input() textPatterm = 'Trường này';

  private errorMessages: { [key: string]: any } = {
    required: (params: any, name: any) => `${name} là trường bắt buộc`,
    pattern: (params: any, name: any) => `${this.textPatterm}`,
    onlyNumber: (params: any, name: any) => `${name} value must be number`,
    minlength: (params: any, name: any) => `Length of ${name} can not lower than ${params.requiredLength} characters`,
    maxlength: (params: any, name: any) => `Length of ${name} can not exceed ${params.requiredLength} characters`,
    minNumber: (params: any, name: any) => `Value of ${name} can not lower than ${params.message}`,
    maxNumber: (params: any, name: any) => `Value of ${name} can not exceed ${params.message}`,
    uniqueName: (params: any, name: any) => params.message,
      mustMatch: () => `Mật khẩu không trùng khớp`
  };

  shouldShowErrors(): boolean {
    return this.control?.errors && (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any): any {
    return this.errorMessages[type](params, this.name);
  }
}
