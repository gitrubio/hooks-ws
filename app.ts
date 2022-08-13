import express from "express"

import 'dotenv'


const app = express()
const PORT = 3000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use()	


app.listen(process.env.PORT || PORT,()=>{
    console.log(`server runngin on port: ${PORT || process.env.PORT }`)
})