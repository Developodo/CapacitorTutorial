import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.developodo.CapacitorTutorial',
  appName: 'CapacitorTutorial',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '868791458785-1mbjft5qg1nl4uvu65qvoteno99kaa63.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    }
  }
  }

export default config;
