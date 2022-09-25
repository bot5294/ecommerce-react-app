/*
This file was intented for future requirements,
If in future firebase connection 
needed then it's already setted up.

*/

// import React from "react";
// import styled from "styled-components";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { getById } from "../utils";
// import { createNotification } from "../utils/Notification";
// export function AddProduct() {
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     let name = getById("_name").value;
//     let desc = getById("_desc").value;
//     let price = getById("_price").value;
//     let rating = getById("_rating").value;
//     console.log(name, desc, price, rating);
//     try {
//       const data = {
//         name,
//         desc,
//         price,
//         rating,
//       };
//       console.log("data : ", data);
//       const dbRef = collection(db, "products");
//       console.log(dbRef);
//       const docRef = await addDoc(dbRef, data);
//       if (docRef) {
//         console.log("Document has been added successfully", docRef);
//         createNotification("success", "Product Added successfully");
//         console.log("after notfy");
//       } else {
//         console.log("docRef not exist");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <FormBox>
//         <b>Add a Product</b>
//         <Form>
//           <label>
//             Name
//             <br />
//             <input id="_name" />
//             <br />
//           </label>
//           <label>
//             Description
//             <br />
//             <textarea id="_desc" />
//             <br />
//           </label>
//           <label>
//             Price
//             <br />
//             <input id="_price" />
//             <br />
//           </label>
//           <label>
//             Rating
//             <br />
//             <input id="_rating" />
//             <br />
//           </label>
//           <Button onClick={(e) => handleFormSubmit(e)}>Add</Button>
//         </Form>
//       </FormBox>
//     </>
//   );
// }

// const FormBox = styled.div`
//   padding: 1em;
//   background-color: white;
//   margin: 0 auto;
//   width: 20em;
//   margin-top: 2em;
// `;
// const Form = styled.form`
//   font-weight: 500;
//   padding: 20px;
// `;
// const Button = styled.button`
//   background-color: white;
//   border: 1px solid grey;
//   box-shadow: -1px 1px grey;
//   position: absolute;
//   margin-left: 18em;
// `;
