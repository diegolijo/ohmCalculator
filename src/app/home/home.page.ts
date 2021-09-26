import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public slideValue = 1;
  public resistencia = 1;


  // position will be between 0 and 100
  public minp = 0;
  public maxp = 100;

  // The result should be between 1 an 10
  public minv = Math.log(1);
  public maxv = Math.log(10);

  // calculate adjustment factor
  public scale = (this.maxv - this.minv) / (this.maxp - this.minp);

  constructor() { }

  ngOnInit() {
  }


  public incrementRange(value: number) {
    this.slideValue += value;
    this.slideValue = this.slideValue <= 0 ? 0 : this.slideValue
    this.resistencia = this.toLog(this.slideValue);
  }


  public onChangeRange(event: any) {
    this.resistencia = this.toLog(event.detail.value);
  }

  public onChangeSegnment(event: any) {
    // The result should be between 1 an 10 * event.detail.value
    this.minv = Math.log(1);
    this.maxv = Math.log(event.detail.value);
    // calculate adjustment factor
    this.scale = (this.maxv - this.minv) / (this.maxp - this.minp);
    this.resistencia = this.toLog(this.slideValue);
  }


  private toLog(value: number) {
    return Math.round(Math.exp(this.minv + this.scale * (value - this.minp)));
  }

}
