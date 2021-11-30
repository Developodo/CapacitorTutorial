package com.developodo.CapacitorTutorial;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import java.util.ArrayList;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.community.speechrecognition.SpeechRecognition;
 
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
 
    // Initializes the Bridge
    /*this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(GoogleAuth.class);
      add(SpeechRecognition.class);
      
    }});*/
    registerPlugin(GoogleAuth.class);
    registerPlugin(SpeechRecognition.class);
  }
}
//ionic cap open