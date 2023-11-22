import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements ControlValueAccessor {
  
  //data from parent.
  @Input() label ='';
  @Input() propertyName = '';
  @Input() type = '';

  constructor(@Self() public ngControl:NgControl){
    //This is necessary for the ControlValueAccessor interface implementation.
    this.ngControl.valueAccessor = this;
  }

  /* Below methods part of ControlValueAccessor interface and needs to be implemented. */
  writeValue(obj: any): void {
  
  }
  registerOnChange(fn: any): void {
    
  }
  registerOnTouched(fn: any): void {
    
  }

  /* This is a getter method that returns the underlying FormControl associated with the NgControl. 
  This can be useful for accessing properties of the form control in the component's template.*/
  get control() :FormControl{
    return this.ngControl.control as FormControl;
  }
}
