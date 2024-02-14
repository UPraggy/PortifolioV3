import '../assets/css/Principais.css'
import '../assets/css/fonts.css'
import '../assets/css/colors.css'
import '../assets/css/scrollbar.css'
import HomePage from './HomePage';
import Habilidades from './Habilidades';
import TopMenu from './TopMenu';
import { useEffect, useState } from 'react';
import Carreira from './Carreira';

var windowHeight = window.screen.availHeight;
export default function Main(props){

    const [ativaResp, setAtivaResp] = useState(null)
    useEffect(()=>{
            if (ativaResp == null){
                if (window.matchMedia("(max-width: 767px)").matches){
                setAtivaResp(true)
                }else{
                    setAtivaResp(false)
                }
            }
        },[ativaResp])

    return <div className='containerPrincipal' style={{width: "100%", minHeight: windowHeight}}>
        <TopMenu ativaResp={ativaResp}/>
        <HomePage ativaResp={ativaResp}/>
        <Habilidades ativaResp={ativaResp}/>
        <Carreira ativaResp={ativaResp}/>
    </div>
}