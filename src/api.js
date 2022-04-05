import axios from "axios";

export default axios.create({
  baseURL: `https://front-test.beta.aviasales.ru/`,
});

// export default class Aviasalesapi {
//     baseURL ='https://front-test.beta.aviasales.ru/'

//    tickets=[]

//     async getResourse() {
//       const res = await fetch(
//         (`${this.baseURL}search`)
//       )
//       if (!res.ok) {
//         // console.log(res)
//         throw new Error(res.status)
//       }
//       const body = await res.json()
//       if (body.total_results === 0) {
//         throw new Error('not found')
//       } else {
//         this.getTickets(body.searchId)
//         // return body
//       }
//     }
//   async getTickets(searchID){
//     const res = await fetch(`${this.baseURL}tickets?searchId=${searchID}` )
//     if (!res.ok) {
//       if(res.status===500){
//          setInterval(() => {
//           this.getTickets(searchID)
//         }, 1000);
//       }
//       if (res.status===404){
//         console.log(res);

//         return this.tickets
//         // throw new Error(res.status)
//       }

//     }else{
//         const body=await res.json()
//           console.log(body);
//             if(body.stop===false){
//         // console.log(body.tickets);
//             this.tickets.push(...body.tickets)
//               this.getTickets(searchID)
//         // console.log(this.tickets);

//         }else{
//         console.log(this.tickets);
//           this.tickets.push(...body.tickets)
//             return this.tickets
//       }
//       // console.log(body);
//       //  return body
//     }
//   }

//     // async getGen{res() {
//     //   const res = await fetch(
//     //     `${this.baseURL}3/genre/movie/list?api_key=98450458092ec1ceaf6809681f572de7&language=en-US`

//     //   )
//     //   if (!res.ok) {
//     //     throw new Error(res.status)
//     //   }
//     //   const body = await res.json()

//     //   return body
//     // }
//   }
