const express=require('express')
const app=express()
app.listen(3000, () => console.log('Listening on 3000'))
// const { graphql, buildSchema }= require('graphql')

// const db={
//     users:[
//         {id:'1',name:'Deepak',email:'deep@gmail.com'},
//         {id:'2',name:'Dush',email:'dush@gmail.com'}
//     ]

// }
// const schema=buildSchema(`
//    type Query{
//        users: [User!]!
//    }
//    type User{
//        id: ID!
//        email: String!
//        name:String
//        avatarURL:String
//    }
// `)

// const rootValue={
//     users:() => db.users
// }

// graphql(
//     schema,
//     `{
//         users{
//             id
//         }
//     }`,
//     rootValue
// ).then(
//     res => console.dir(res,{depth: null})
// )
// .catch(console.error)