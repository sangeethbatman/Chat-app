import firebase from "firebase"
const firebaseApp=firebase.initializeApp({
    
        apiKey: "AIzaSyB6TQI-QuZKiNGjrJQT-onvd6O5VYxFKPo",
        authDomain: "chat-app-c13ac.firebaseapp.com",
        databaseURL: "https://chat-app-c13ac.firebaseio.com",
        projectId: "chat-app-c13ac",
        storageBucket: "chat-app-c13ac.appspot.com",
        messagingSenderId: "326972958034",
        appId: "1:326972958034:web:7d3447f1adc64c5017868b",
        measurementId: "G-H5SDKRJLJX"
     
})
const db=firebaseApp.firestore()
export default db