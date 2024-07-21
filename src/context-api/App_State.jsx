import { useEffect, useState } from 'react';
import App_Context from './App_Context.jsx';
import axios from 'axios';


const App_State = ({children}) =>{
    // const url = " http://localhost:5000/api";
    const url = "https://backend-2-6mlu.onrender.com/api";
    const [Token, setToken] = useState("");
    const [recipy,setrecipy] = useState([]);
    const [savedrecipyy,setsavedrecipy] = useState([]);
    const [User,setUser] = useState([]);
    const [isAuthenticate, setisAuthenticate] = useState(false)
    const [Relode, setRelode] = useState(true)




    // Register function
    const register = async (name , gmail, password) => {
        const Api = await axios.post(`${url}/register`,
            { name ,gmail, password },
            {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredential: true
            })
        setToken(Api.data.token)
        // console.log(Api.data)
        return Api;
        // console.log("this is api data",Api);
    }     

    // login function
    const login = async (gmail,password)=>{
        const Api = await axios.post(`${url}/login`,
            {gmail,password},
            {
                headers:{
                "Content-Type":"application/json"
            },
            withCredential:true})
        setToken(Api.data.token)
        setisAuthenticate(true);
            return Api ;
        // console.log("this is api data",Api);
    }       

    // fetch recipy function
    useEffect(() => {
        const fetchrecipy = async () => {
            const recipy = await axios.get(`${url}/`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                })
            setrecipy(recipy.data.recipy);
        }
        fetchrecipy();
        getsavedrecipy();
        profile();
    }, [Token, Relode])

// profile
useEffect(()=>{
    if(Token){
         localStorage.setItem("Token",Token);
    }
    const tokenfromlocalstorage = localStorage.getItem("Token",Token);
    if (tokenfromlocalstorage){
        setToken(tokenfromlocalstorage)
        setisAuthenticate(true);
    }


}, [Token, Relode])

    //  Add Recipy function
    const addrecipy = async (title, inst, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4,imgurl)=>{
        const Api = await axios.post(`${url}/add`, { title, inst, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl}
            ,{
           headers:{
                "Content-Type" : "application/json",
                Auth:Token
           },
           withCredentials:true
        })
        setRelode(!Relode)
    return Api;

    }

    // get recipy by id
    const getrecipybyid = async (id) => {
        const Api = await axios.get(`${url}/${id}`,
        {
            headers:{
                "Content-Type":"Application/json",
            },
            withCredentials:true,
        });
    //    console.log("api data lena hy",Api)
        return Api ; 
    }

    // saved recipy by id
    const savedrecipybyid = async (id)=>{
        try {
            const result = await axios.post(`${url}/${id}`,{},{
            headers:{
                "Content-Type":"application/json",
                Auth:Token,
            },
            withCredential:true,
            })
            setRelode(!Relode)
            return result;
        } catch (error) {
            console.log("app state error",error)
        }
    }

    // get saved recipy by
    const getsavedrecipy = async () => {
        try {
            const result = await axios.get(`${url}/saved`,
                 {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredential: true,
            })
            // console.log("geting saved recipy in result",result.data.recipy);
            setsavedrecipy(result.data.recipy);

      } catch (error) {
            // console.log("app state error", error)
        }
    }

    // profile
    const profile = async () => {
        const Api = await axios.get(`${url}/user`,
            {
                headers: {
                    "Content-Type": "Application/json",
                    Auth: Token,
                },
                withCredentials: true,
            });
        setUser(Api.data.user)
    }


// logout
const logout =()=>{
    localStorage.removeItem("Token",Token);
    setToken("");
    setisAuthenticate(true);
    setRelode(!Relode)
}


    return(
        <App_Context.Provider value={{ login, register, addrecipy, recipy, getrecipybyid, savedrecipybyid, savedrecipyy, User,  logout, isAuthenticate}} >
            {children}
        </App_Context.Provider>
    )
}

export default App_State ;