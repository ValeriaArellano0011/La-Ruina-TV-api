import { 
    NEXT_VISOR, 
    GET_CATEGORIAS, 
    GET_INFO,
    GET_MEDIATYPE, 
    GET_POSTS,
    RESET_MEDIA,
    RESET_VISOR,
    OPTION,
    RESET_OPTION,
    LOGIN,
    GET_PRODUCTS,
    POST_PRODUCT } from "../../misc";

import iconYT from '../../../design/yt-icon.png'
import iconSpty from '../../../design/spty-icon.png'
import iconDrive from '../../../design/drive-icon.png'
import iconWeb from '../../../design/web-icon.png'
import iconDescarga from '../../../design/descarga-icon.png'

const initialState = {

/*----------------Admin----------------*/
    adminUser: true,

/*----------------Auth----------------*/
    currentUser: false,
    option: '',

/*----------------Media----------------*/
    typeMediaList: 
        {
            musica:
                {
                    idYT:{url:'https://www.youtube.com/watch?v=', img:iconYT}, 
                    idSpty:{url:'', img:iconSpty}, 
                    idDrive:{url:'', img:iconDrive}
                },
            serie:
                {
                    idYoutube:{url:'', img:iconYT},
                    idSpty:{url:'', img:iconSpty}, 
                    idDrive:{url:'', img:iconDrive},
                },
            app: 
                {
                    urlWeb:{url:'', img:iconWeb},
                    idDrive:{url:'', img:iconDrive},
                    urlDescarga:{url:'', img:iconDescarga},
                },
            libro:
                {
                    urlWeb:{url:'', img:iconWeb},
                    idDrive:{url:'', img:iconDrive},
                    urlDescarga:{url:'', img:iconDescarga},
                }
    },
    visorList: [
        {
            urlID:[''],
            typeMedia:[''],
            titulo:[''],
            artista:[''],
            tag:[''],
            img:[''],
            sliderImg:[''],
            icon:[''],
            categoria:[''],
            boton1:[''],
            info:['']
        }
    ],
    nextVisor: false,
    infoDetailViewer: {urlID: {idYT:''}},
    listaCategorias: [],

/*----------------Tienda----------------*/
    products: false,
    productDetails: {idProduct:''},

/*------------Filter&Search------------*/
    filteredMedia: [],
    searchedMedia: [],
    mediaFound: {},

/*--------------Pagination--------------*/

}
/*--------------Formulario--------------*/



export default function rootReducer(state = initialState, action){
    switch (action.type){
/*----------------Auth----------------*/

        case LOGIN:
            console.log(action.payload)
            return {
            ...state,
            currentUser: action.payload.msg.userAlias
            }
        case OPTION:
            return{
                ...state,
                option: action.payload
            }
        case RESET_OPTION:
            return{
                ...state,
                option:''
            }
        case POST_PRODUCT:
            return{
                ...state
            }     

/*----------------Tienda----------------*/
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }

/*----------------Media----------------*/
        case GET_POSTS:
            return{
                ...state,
                visorList: action.payload,
            }
        case GET_INFO:
            return{
                ...state,
                infoDetailViewer: action.payload.at(0)
            }
        case GET_MEDIATYPE:
            return{
            ...state,
            }
        case GET_CATEGORIAS:
            return{
                ...state,
                listaCategorias: [...new Set([...state.listaCategorias, ...new Set(action.payload)].filter(e=> e !== ''))]
            }
        case RESET_MEDIA:
            return{
                ...state,
                infoDetailViewer: {urlID: {idYT:''}},
            }
        case NEXT_VISOR:
            return{
                ...state,
                nextVisor: state.visorList.length>1? [state.visorList[action.payload]] : false
            }
        case RESET_VISOR:
            return{
                ...state,
                nextVisor: false
            }
        default:
            return {...state}
    }
}