import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tebs',
      icon: 'home'
    },
    // {
    //   title: 'Training',
    //   url: '/tebs/teb2',
    //   icon: 'paper-plane'
    // },
    // {
    //   title: 'Remediation',
    //   url: '/tebs/teb3',
    //   icon: 'archive'
    // },
    {
      title: 'Help',
      url: '/help',
      icon: 'help'
    },
    {
      title: 'Contact',
      url: '/contactus',
      icon: 'call'
    },
    {
      title: 'About',
      url: '/aboutus',
      icon: 'information-circle'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  loggedIn = false;
  dark = false; 

  constructor(
    private platform: Platform,
    // private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    localStorage.clear();
  }
}
