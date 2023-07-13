import  express  from "express";
import cors from "cors"
import axios from "axios"

const app = express()

const corsOption = {
    origin:"http://dog-web-9w9skhvks-70gaurav.vercel.app"
}

app.use(cors(corsOption))

app.use(express.json())

app.get("/random" , (req , res) => {
    axios
    .get("http://dog.ceo/api/breeds/image/random")
    .then((result) => {
        res.status(200).json(result.data.message)
    })
    .catch((err) => {
        console.log(err)
    })
})
app.get("/list" , (req , res) => {
    axios
    .get("http://dog.ceo/api/breeds/list/all")
    .then((result) => {
        res.status(200).json(result.data.message)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get("/breed/:subBreed?/:breed", (req, res) => {
    const { subBreed, breed } = req.params;
    const breedName = subBreed ? `${subBreed}${breed}` : breed;
    
    axios
      .get(`http://dog.ceo/api/breed/${breedName}/images/random`)
      .then((result) => {
        res.status(200).json(result.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  

app.listen(3000, () => {
    console.log("server started at port:3000")
})