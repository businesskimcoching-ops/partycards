# PartyCards Store Release Checklist

## Native App

- App name: PartyCards
- Bundle ID / package name: `com.partycards.app`
- Version name: `1.0.0`
- Android version code: `1`
- Category: Games / Card or Casual
- Privacy policy file: `privacy.html`

## Build Commands

```powershell
npm.cmd install
npm.cmd run build
npx.cmd cap sync
```

Android Studio:

```powershell
npx.cmd cap open android
```

Xcode on a Mac:

```bash
npx cap open ios
```

## Android Store Steps

- Install Android Studio, a JDK, and the Android SDK.
- Open the `android` project in Android Studio.
- Create or attach a release upload key.
- Copy `android/keystore.properties.example` to `android/keystore.properties` and fill in the private signing values. Do not commit `keystore.properties` or any `.jks` key file.
- Build a signed Android App Bundle (`.aab`).
- Current local signed bundle output path: `android/app/build/outputs/bundle/release/app-release.aab`.
- Upload the `.aab` in Google Play Console.
- Complete store listing, screenshots, content rating, Data safety, target audience, and privacy policy URL.

## iOS Store Steps

- Use a Mac with Xcode and CocoaPods.
- Open the `ios/App` project in Xcode on a Mac.
- Set the Apple Developer Team and signing settings.
- Archive the app.
- Upload through Xcode Organizer or Transporter to App Store Connect.
- Complete screenshots, app privacy details, age rating, content rights, and review notes.

## Review Notes

The app does not use accounts, payments, ads, analytics SDKs, tracking SDKs, location, contacts, camera, or microphone. Player names are local game labels only.
