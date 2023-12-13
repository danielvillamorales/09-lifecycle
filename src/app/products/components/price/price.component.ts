import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent  implements OnInit, OnChanges, OnDestroy {

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('ngOnInit price');
    this.interval$ = interval(1000).subscribe((value) => {console.log(value);})
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('entre a changes price')
    console.log({changes});
    }
  ngOnDestroy(): void {
    console.log('ngOnDestroy price');
    this.interval$?.unsubscribe();
  }

  @Input() price: number = 0;
}
