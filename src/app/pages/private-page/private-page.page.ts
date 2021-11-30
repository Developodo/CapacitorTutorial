import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from "@capacitor-community/speech-recognition";
import { Platform } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.page.html',
  styleUrls: ['./private-page.page.scss'],
})
export class PrivatePagePage implements OnInit {

  public isAndroid:boolean;
  public image:any;

  constructor(private platform:Platform) {
    this.isAndroid=platform.is("android");
   }

  ngOnInit() {
  }

  public async listen(){
    if(await SpeechRecognition.available()){
      SpeechRecognition.start({
        language: "es-ES",
        maxResults: 1,
        prompt: "Di un comando",
        partialResults: true,
        popup: false,
      }).then(async(data)=>{
        if(data[0]="haz foto"){
          this.pic();
        }
      }).catch(err=>{
        console.error(err);
      })
    }else{
      //El sistema no está disponible
    }
  }

  public async pic(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    console.log(image);
    this.image=image.webPath;
  }

}
