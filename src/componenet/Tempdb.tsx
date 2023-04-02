import React from "react";
import {
  doc,
  getDoc,
  collection,
  setDoc,
  getCountFromServer,
  getDocs,
} from "firebase/firestore";
import { db } from "../store/firebase";
import { QuizContext } from "../store/QuizHolder";
// async function setData() {
//   const citiesRef = collection(db, "cities");
//   await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 860000,
//     regions: ["west_coast", "norcal"],
//   });
//   await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 3900000,
//     regions: ["west_coast", "socal"],
//   });
//   await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.",
//     state: null,
//     country: "USA",
//     capital: true,
//     population: 680000,
//     regions: ["east_coast"],
//   });
//   await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo",
//     state: null,
//     country: "Japan",
//     capital: true,
//     population: 9000000,
//     regions: ["kanto", "honshu"],
//   });
//   await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing",
//     state: null,
//     country: "China",
//     capital: true,
//     population: 21500000,
//     regions: ["jingjinji", "hebei"],
//   });
//   console.log("Data Set Done");
// }
async function getData() {
  const coll = collection(db, "quizzes");
  const snapshot = await (await getCountFromServer(coll)).data().count;
  for (let index = 0; index < snapshot; index++) {
    const docRef = doc(db, "quizzes", `q${index}`);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  //   const docRef = doc(db, "quizzes");

  // const docSnap = await getDoc(docRef);
  // console.log(docSnap);
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
}

const Tempdb = () => {
  const { quizzes, setQuizzes } = React.useContext(QuizContext);
  async function setData() {
    const quizzesCollection = collection(db, "quizzes");
    var i = 0;
    quizzes.forEach((quiz: any) => {
      setDoc(doc(quizzesCollection, `q${i}`), quiz)
        .then((docRef) => {
          console.log("Quiz added with ID: ", `q${i}`);
        })
        .catch((error: any) => {
          console.error("Error adding quiz: ", error);
        });
      i++;
    });
  }
  async function getAlldata() {
    const snap = await getDocs(collection(db, "quizzes"));
    snap.forEach((doc: any) => {
      // console.log(doc.data())
      setQuizzes((prev: any) => [...prev, doc.data()]);
    });
    return snap;
  }

  //   const [data, setDat] = React.useState<any>([]);
  //   console.log(data);
  return (
    <div>
      <button onClick={setData} className="text-4xl py-4 bg-amber-400">
        Set Data
      </button>
      <button onClick={getAlldata} className="text-4xl py-4 bg-amber-900">
        Get Data
      </button>
      <div>
        {quizzes?.map((doc: any) => {
          return <div>{doc.question}</div>;
        })}
      </div>
    </div>
  );
};

export default Tempdb;
