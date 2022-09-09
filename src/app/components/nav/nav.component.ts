import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'emproto-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    this.route.navigate([url])
  }

}
