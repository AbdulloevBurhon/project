import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

// Отправить сообщение
export const sendMessage = (text, user) => {
  return addDoc(collection(db, "messages"), {
    text,
    uid: user.uid,
    email: user.email,
    createdAt: serverTimestamp(),
  });
};

// Получать сообщения
export const subscribeToMessages = (callback) => {
  const q = query(collection(db, "messages"), orderBy("createdAt"));

  return onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(msgs);
  });
};
