import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = { id: '', username: '', password: ''};

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  guest() {
    this.router.navigateByUrl('/register-individual');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  register() {
    this.router.navigateByUrl('/register-company');
  }

  presentAlert2() {
    const alert = this.alertController.create({
    header: 'Notice',
    message: 'To register, visit the website',
    subHeader: 'website link http://blindstick.herokuapp.com/register',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

}
