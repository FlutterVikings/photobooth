if (typeof firebase === "undefined")
  throw new Error(
    "hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js"
  );
var firebaseConfig = {
  apiKey: "AIzaSyC4WLuSQy7q-lh_6XFB7oF1p0pDgPW5kuY",
  authDomain: "flutter-vikings-photobooth.firebaseapp.com",
  projectId: "flutter-vikings-photobooth",
  storageBucket: "flutter-vikings-photobooth.appspot.com",
  messagingSenderId: "430171834950",
  appId: "1:430171834950:web:0123c78ae406f055b5d847",
  measurementId: "G-EQF7XTWZBM",
};
if (firebaseConfig) {
  firebase.initializeApp(firebaseConfig);

  var firebaseEmulators = undefined;
  if (firebaseEmulators) {
    console.log("Automatically connecting Firebase SDKs to running emulators:");
    Object.keys(firebaseEmulators).forEach(function (key) {
      console.log(
        "\t" +
          key +
          ": http://" +
          firebaseEmulators[key].host +
          ":" +
          firebaseEmulators[key].port
      );
    });

    if (firebaseEmulators.database && typeof firebase.database === "function") {
      firebase
        .database()
        .useEmulator(
          firebaseEmulators.database.host,
          firebaseEmulators.database.port
        );
    }

    if (
      firebaseEmulators.firestore &&
      typeof firebase.firestore === "function"
    ) {
      firebase
        .firestore()
        .useEmulator(
          firebaseEmulators.firestore.host,
          firebaseEmulators.firestore.port
        );
    }

    if (
      firebaseEmulators.functions &&
      typeof firebase.functions === "function"
    ) {
      firebase
        .functions()
        .useEmulator(
          firebaseEmulators.functions.host,
          firebaseEmulators.functions.port
        );
    }

    if (firebaseEmulators.auth && typeof firebase.auth === "function") {
      firebase
        .auth()
        .useEmulator(
          "http://" +
            firebaseEmulators.auth.host +
            ":" +
            firebaseEmulators.auth.port
        );
    }
  } else {
    console.log(
      "To automatically connect the Firebase SDKs to running emulators, replace '/__/firebase/init.js' with '/__/firebase/init.js?useEmulator=true' in your index.html"
    );
  }
}
