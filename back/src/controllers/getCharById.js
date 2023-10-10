const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, species, origin, image, status } = (await (axios.get(URL + id))).data

    const char = {
      id: Number(id),
      name,
      gender,
      species,
      origin,
      image,
      status
    };
    return char.name ? res.status(200).json(char) : res.status(404).send("Not found!")

  } catch (error) {
    res.status(500).send(error.message)
  }

};

module.exports = {
  getCharById
};

// const axios = require("axios")//importar de manera core o (nativa)

// const getCharById = (res, id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status})=>{
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         return res
//             .writeHead(200, {"Content-Type":"application/json"})
//             .end(JSON.stringify(character))
//     })
//     .catch(error =>{
//         return res
//             .writeHead(500, {"Content-Type":"text/plain"})
//             .end(error.message)
//     })

// };

// module.exports = {/// forma de exportar commond js
//     getCharById
// }
