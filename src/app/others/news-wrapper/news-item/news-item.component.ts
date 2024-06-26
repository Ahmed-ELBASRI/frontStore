import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() image :string="";
  @Input() title :string="";
  @Input() description :string="";
  @Input() date :string="";
}
