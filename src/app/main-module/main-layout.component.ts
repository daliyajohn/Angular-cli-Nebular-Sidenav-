import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit() {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
