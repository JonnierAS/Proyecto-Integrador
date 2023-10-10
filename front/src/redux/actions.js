import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./types";
import axios from "axios";

// export const addFav = (character) => {
//     return {
//         type: ADD_FAV,
//         payload: character
//     }
// };
export const addFav = (character) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        };
    } catch (error) {
        console.log(error.message);
    }
};


// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// };
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    try {
        return async (dispatch) => {
            const { data } = await axios.delete(endpoint)
            if (data.length < 0) throw Error('No hay favoritos')
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });

        };
    } catch (error) {
        console.log(error.message);
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
};
