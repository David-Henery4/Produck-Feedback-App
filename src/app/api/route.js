

export async function GET () {
  return Response.json({
    "greeting": "Hello"
  })
}


// export const GET = async (req) => {
//   try {

//     const res = await fetch(`/api/test`, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body:{
        
//       }
//     });
//     const data = await res.json()
//     return Response.json({data})
//   } catch (error) {
    
//   }
// };
