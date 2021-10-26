import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAg0ehp1r2WJmi-YSzB5cyCDDW8xqLTrl8",
  authDomain: "nutritracker-bff41.firebaseapp.com",
  databaseURL: "https://nutritracker-bff41-default-rtdb.firebaseio.com",
  projectId: "nutritracker-bff41",
  storageBucket: "nutritracker-bff41.appspot.com",
  messagingSenderId: "965354266705",
  appId: "1:965354266705:web:39be27cea6798af47a9870",
  measurementId: "G-CJE9C2Y3YN",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (devMode) {
      console.log(`loading ${path}`);
    }
    return onValue(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        if (devMode) {
          console.log(val);
        }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      },
      (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      }
    );
  }, [path, transform]);

  return [data, loading, error];
};
