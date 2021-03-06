import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.page.html',
  styleUrls: ['./register-company.page.scss'],
})
export class RegisterCompanyPage implements OnInit {

  user = { id: '', username: '', password: ''};

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  guest() {
    this.router.navigateByUrl('/guardian');
  }

  login() {
    this.router.navigateByUrl('/home');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

  presentAlert2() {
    const alert = this.alertController.create({
    header: 'Notice',
    message: 'To register, visit the website',
    subHeader: 'website link http://blindstick.herokuapp.com/register',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }


}
