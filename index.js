import express from 'express'

const app=express()

app.set("puerto",process.env.PORT || 4000)

app.listen(app.get('puerto'), ()=>{console.log("puerto "+app.get('puerto'))})