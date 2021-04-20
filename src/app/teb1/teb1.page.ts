import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-teb1',
  templateUrl: './teb1.page.html',
  styleUrls: ['./teb1.page.scss'],
})
export class Teb1Page implements OnInit {

  constructor(
    public router: Router,
  ) {

  }

  ngOnInit() {

  }

  backToWelcome() {
    this.router.navigateByUrl('login');
  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 500);
  }

}

