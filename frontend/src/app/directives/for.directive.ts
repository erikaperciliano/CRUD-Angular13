import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForIn') numbers!: number[];
  @Input('myForUsing') text!: string;


  constructor() {
    console.log('MyFor')
  }
  ngOnInit(): void {
    console.log(this.numbers)
    console.log(this.text)
  }
}
