// Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRiBeJGAjji58ytmQ0pFV2jyula9LSSj4",
  authDomain: "entregafinal-piazza.firebaseapp.com",
  projectId: "entregafinal-piazza",
  storageBucket: "entregafinal-piazza.appspot.com",
  messagingSenderId: "613028206186",
  appId: "1:613028206186:web:01e1d7ce2dde69b038dc13",
  measurementId: "G-GCEKCESDG5"
};


const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

async function getProducts() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
  );
  return docsData;
}

async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getProductsByCategory(categoryId) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryId));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

async function _exportProducts(){
  const productos = [
    {
        "id": "tapete00001",
        "name": "Alfombra Panaderos",
        "price": 100000,
        "stock": 10,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=13FyA0CzHqxTTaGXUdhsh5o3RQPZe5_ED"
    },
    {
        "id": "tapete00002",
        "name": "Alfombra K9",
        "price": 100000,
        "stock": 9,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1g3spd-pdMXTKf1B6WQ5lw3vveNoP6a_2"
    },
    {
        "id": "tapete00003",
        "name": "Alfombra Slices",
        "price": 100000,
        "stock": 15,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1rWN3o_bcQD3fy3_0WO9pP-NEPZldchuX"
    },
    {
        "id": "tapete00004",
        "name": "Alfombra Arcor",
        "price": 100000,
        "stock": 12,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1P-JFzcAhVt0CPZSl3aeP5bCIJSDCxyFY"
    },
    {
        "id": "tapete00005",
        "name": "Alfombra Caramelitos",
        "price": 100000,
        "stock": 6,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=18TIaJkK0bjfqF5zogMcoKpxFSJA5P4jl"
    },
    {
        "id": "tapete00006",
        "name": "Alfombra Bajo El Mar",
        "price": 100000,
        "stock": 1,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1XoxonhjIMIOQJhHE8OnqXLTOd2Md6GoL"
    },
    {
        "id": "tapete00007",
        "name": "Alfombra Yumi",
        "price": 100000,
        "stock": 30,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1FFZXc9zQEuXSmlEzAXstjA7WedOCvwo3"
    },
    {
        "id": "tapete00008",
        "name": "Alfombra Montagne",
        "price": 100000,
        "stock": 7,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1MfSq3kcjwVMckf8vY8RZfe5XbHji-4KG"
    },
    {
        "id": "tapete00009",
        "name": "Alfombra Maxikioso Pablito",
        "price": 100000,
        "stock": 18,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1QzncQYptYlswDeh3TpyT-Iam98iVA7i_"
    },
    {
        "id": "tapete00010",
        "name": "Alfombra Harmatiuk",
        "price": 100000,
        "stock": 1,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1PvBfuxV_nrzR7nvECLSVYdQrbSZ2-cJ7"
    },
    {
        "id": "tapete00011",
        "name": "Alfombra Harley Davidson",
        "price": 100000,
        "stock": 0,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1IDjN4cnC75TI_Yifxxvn1J6dHl9NyJw-"
    },
    {
        "id": "tapete00012",
        "name": "Alfombra Dakros Maxikiosko",
        "price": 100000,
        "stock": 10,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1wO8DWpI10QAR5dpMmE_DrPRuleZ3ICSq"
    },
    {
        "id": "tapete00012",
        "name": "Alfombra Bigg",
        "price": 100000,
        "stock": 10,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1Qau7AnKmZxxX_zsieUlxJkWCRg-m5S6X"
    }
];
}


async function _exportProductsWithBatch(){
  const productos = [
    {
        "id": "tapete00001",
        "name": "Alfombra Panaderos",
        "price": 100000,
        "stock": 10,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=13FyA0CzHqxTTaGXUdhsh5o3RQPZe5_ED"
    },
    {
        "id": "tapete00002",
        "name": "Alfombra K9",
        "price": 100000,
        "stock": 9,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1g3spd-pdMXTKf1B6WQ5lw3vveNoP6a_2"
    },
    {
        "id": "tapete00003",
        "name": "Alfombra Slices",
        "price": 100000,
        "stock": 15,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1rWN3o_bcQD3fy3_0WO9pP-NEPZldchuX"
    },
    {
        "id": "tapete00004",
        "name": "Alfombra Arcor",
        "price": 100000,
        "stock": 12,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1P-JFzcAhVt0CPZSl3aeP5bCIJSDCxyFY"
    },
    {
        "id": "tapete00005",
        "name": "Alfombra Caramelitos",
        "price": 100000,
        "stock": 6,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=18TIaJkK0bjfqF5zogMcoKpxFSJA5P4jl"
    },
    {
        "id": "tapete00006",
        "name": "Alfombra Bajo El Mar",
        "price": 100000,
        "stock": 1,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1XoxonhjIMIOQJhHE8OnqXLTOd2Md6GoL"
    },
    {
        "id": "tapete00007",
        "name": "Alfombra Yumi",
        "price": 100000,
        "stock": 30,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1FFZXc9zQEuXSmlEzAXstjA7WedOCvwo3"
    },
    {
        "id": "tapete00008",
        "name": "Alfombra Montagne",
        "price": 100000,
        "stock": 7,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1MfSq3kcjwVMckf8vY8RZfe5XbHji-4KG"
    },
    {
        "id": "tapete00009",
        "name": "Alfombra Maxikioso Pablito",
        "price": 100000,
        "stock": 18,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1QzncQYptYlswDeh3TpyT-Iam98iVA7i_"
    },
    {
        "id": "tapete00010",
        "name": "Alfombra Harmatiuk",
        "price": 100000,
        "stock": 1,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1PvBfuxV_nrzR7nvECLSVYdQrbSZ2-cJ7"
    },
    {
        "id": "tapete00011",
        "name": "Alfombra Harley Davidson",
        "price": 100000,
        "stock": 0,
        "category": "Transito Medio",
        "image": "https://drive.google.com/uc?export=view&id=1IDjN4cnC75TI_Yifxxvn1J6dHl9NyJw-"
    },
    {
        "id": "tapete00012",
        "name": "Alfombra Dakros Maxikiosko",
        "price": 100000,
        "stock": 10,
        "category": "Transito Alto",
        "image": "https://drive.google.com/uc?export=view&id=1wO8DWpI10QAR5dpMmE_DrPRuleZ3ICSq"
    },
    {
        "id": "tapete00012",
        "name": "Alfombra Bigg",
        "price": 100000,
        "stock": 10,
        "category": "Jet",
        "image": "https://drive.google.com/uc?export=view&id=1Qau7AnKmZxxX_zsieUlxJkWCRg-m5S6X"
    }
];

  const batch = writeBatch(db); 

  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `1${newId}`)
    batch.set(newDoc, producto);    
  })
 
  const data = await batch.commit()  
  console.log("Listo!", data)
}

export { getProducts, getOrder, getProductById, getProductsByCategory, createOrder, _exportProducts, _exportProductsWithBatch};