import '../assets/css/Principais.css'
import '../assets/css/fonts.css'
import '../assets/css/homePage.css'
import '../assets/css/colors.css'
import TopMenu from './TopMenu'
// import Rodape from './Rodape.jsx'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalVar from './subComponents/GlobalVar'

var windowHeight = window.screen.availHeight;
export default function HomePage(props){

    const navigate = useNavigate();

    useEffect(() => {
        GlobalVar.setLocalStorage('menuSelected','HomePage')
      }, []);

    return <>
    <TopMenu />
        {/* <div className="containerPrincipal homePage" style={{minHeight: "86vh", maxHeight: windowHeight*0.80, backgroundColor: "#E4E5E5", display: 'flex',
    flexDirection: 'column', justifyContent: "flex-end", overflowY: "hidden"}}>

            <div className={`homelogo ${logoAnimation ? 'logoAnima' : ''}`}></div>

            <div className={`homeBtnDiv ${btnsHome ? 'btnHomeAnima' : ''}`}>
                <div className="homebuttons homeBtnMov" onClick={()=>navigate("/Movimentacoes")}>
                    <div className="homebtnImg"></div>
                    <div className="homebtnText">Movimentações</div>
                </div>
                <div className="homebuttons homeBtnFin" onClick={()=>navigate("/Financeiro")}>
                    <div className="homebtnImg"></div>
                    <div className="homebtnText">Financeiro</div>
                </div>
            </div>

        <div className="homeWaves">
            <div className="homeWave3"></div>
            <div className="homeWave2"></div>
            <div className="homeWave1"></div>
        </div>


        </div> */}
        {/* <Rodape /> */}
    </>
}