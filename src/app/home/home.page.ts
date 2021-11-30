import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AuthService } from '../services/auth.service';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { Platform } from '@ionic/angular';
import { Camera} from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public userInfo: any = null;
  public isAndroid = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private platform: Platform
  ) {
    this.isAndroid = platform.is('android');
    if (!this.isAndroid) {
      GoogleAuth.init();
    }
  }
  async ngOnInit() {
    if (this.isAndroid) {
      let hasPermission = await SpeechRecognition.hasPermission();
      if (!hasPermission.permission) {
        SpeechRecognition.requestPermission();
      }
    }

    let hasPermissionCamera= await Camera.checkPermissions();
    if(hasPermissionCamera.camera!="granted" || hasPermissionCamera.photos!="granted")
      Camera.requestPermissions();
  }

  async googleSignup() {
    try {
      const googleUser = await GoogleAuth.signIn();
      this.userInfo = googleUser;
      if (googleUser) {
        this.auth.user = googleUser;
        this.router.navigate(['private-page']);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
