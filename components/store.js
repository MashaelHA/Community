// import {createStore} from "vuex";

// import { create } from "core-js/core/object";
// import { createStore } from "vuex/types/index";

// export const store = createStore({
//     state(){
//         return {
//             app_title: 'تطبيقي الفخم',
//             randomNumber:  (start, end) => {
//                 return Math.floor(
//                     Math.random() * end
//                 ) + start
//             },
//             randomImage: function(start, end, folder, ext){
//                 return `/${folder}/${this.randomNumber(start, end)}.${ext}`
//             }
//         }
//     }
// })




// export const state = () => ({
//   counter: 0,
// });

// export const getters = {
//   getCounter(state) {
//     return state.counter;
//   },
// };



// export const state = () => ({
//   counter: 0,
//   randomValue: 0, // Add a new state property for the random value
// });

// export const getters = {
//   getCounter(state) {
//     return state.counter;
//   },
//   getRandomValue(state) {
//     return state.randomValue;
//   },
// };

// export const mutations = {
//   setRandomValue(state, value) {
//     state.randomValue = value;
//   },
// };

// export const actions = {
//   generateRandomValue({ commit }) {
//     const randomValue = Math.floor(Math.random() * 25) + 1;
//     commit('setRandomValue', randomValue);
//   },
// };




// import { createStore } from 'vuex';

// export const store = createStore({
//   state() {
//     return {
//       app_title: 'تطبيقي الفخم',
//     };
//   },
//   getters: {
//     randomNumber: () => (start, end) => {
//       return Math.floor(Math.random() * (end - start + 1)) + start;
//     },
//     randomImage: () => (start, end, folder, ext) => {
//       const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
//       return `/${folder}/${randomNumber}.${ext}`;
//     },
//   },
// });



// import { createStore } from 'vuex';

// export const store = createStore({
//   state() {
//     return {
//       app_title: 'تطبيقي الفخم',
//     };
//   },
//   getters: {
//     randomNumber: () => (start, end) => {
//       return Math.floor(Math.random() * (end - start + 1)) + start;
//     },
//     randomImage: () => (start, end, folder, ext) => {
//       const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
//       return `/${'../assets/images/posts'}/${randomNumber}.${ext}`;
//     },
//   },
// });

// import { createStore } from 'vuex';

// export const store = createStore({
//   state() {
//     return {
//       app_title: 'تطبيقي الفخم',
//     };
//   },
//   getters: {
//     randomNumber: () => {
//       return () => {
//         return 1; // Your actual random number generation logic here
//       };
//     },
//   },
// });

// import { createStore } from 'vuex';

// export const store = createStore({
//   state() {
//     return {
//       app_title: 'تطبيقي الفخم',
//       randomNumber: function (){
//         return 1;
//       }
//     };
//   },
//   // getters: {
//   //   randomNumber: () => (start, end) => {
//   //     return Math.floor(Math.random() * (end - start + 1)) + start;
//   //   },
//   //   randomImage: () => (start, end, folder, ext) => {
//   //     const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
//   //     return `/${'../assets/images/posts'}/${randomNumber}.${ext}`;
//   //   },
//   // },
// });




//   export const mutations = {
//     increment(state) {
//       state.counter++
//     }
//   }

//   export const actions = {
//     async fetchCounter({ state }) {
//       // make request
//       const res = { data: 10 };
//       state.counter = res.data;
//       return res.data;
//     }
//   }

// export const state = createStore(
//     state () => ({
//     })
//     counter: 0
//   })
// state(){
//     return: {

//     }
// }
// )

// export const state = () => ({
//  app_title: 'تطبيقي الفخم'
// });
