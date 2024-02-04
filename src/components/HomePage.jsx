import '../assets/css/homePage.css'
import { useEffect, useReducer } from 'react'
import GlobalVar from './subComponents/GlobalVar'
import ReducerHomePage from './subComponents/ReducerHomePage.jsx'


// var windowHeight = window.screen.availHeight;
export default function HomePage(props){

    const [stateInfo, dispachInfo] = useReducer(ReducerHomePage.preencheInfo, {nomeResponsivo1Pagina: 'Rafael M. R. de Rezende',
    componentesTranslate: false})

    useEffect(() => {
        GlobalVar.setLocalStorage('menuSelected','HomePage')

      }, []);

    const ativaResp = props.ativaResp

    useEffect(()=>{
            if (ativaResp === true){
                dispachInfo({type:'nomeResponsivo1Pagina', value: 'Rafael Moreira'})
            }else{
            }
            setTimeout(()=>dispachInfo({type:'componentesTranslate', value: true}),500)
            setTimeout(()=>dispachInfo({type:'componentesFoto', value: true}),300)
        },[ativaResp])

    return <>
    
        <div className="containerPrincipal homePage" style={{minHeight: "82vh"}}>

            <div className="container apresentInicial">
                <div className="componentesNomeDesc" style={stateInfo.componentesTranslate ? {transform: 'none'} : {}}>

                    <div className="nomePort">{stateInfo.nomeResponsivo1Pagina}</div>
                    <div className="descLeft">Tenho experiência como <span>desenvolvedor
                            Full-Stack{!ativaResp ? <br /> : <></>} e Designer</span>, seja Bem Vindo ao meu Portfólio!
                    </div>
                    {!ativaResp ? <div className="saibaMais" onClick={()=> window.location.href = 'https://www.linkedin.com/in/rafael-moreira-ramos-de-rezende-16420b21b/'}>Saiba Mais</div> : <></>}
                </div>
                <div className="componentesFoto" style={stateInfo.componentesTranslate ? {scale: '1'} : {}}>
                    <div className="fotoPortifolio"></div>
                </div>
                <div className="componentesServicos" style={stateInfo.componentesTranslate ? {transform: 'none'} : {}}>
                    <div className="servicosTitle">Serviços</div>
                    <div className="servicosDesc">Vamos construir softwares com qualidade {!ativaResp ? <br /> : <></>}tanto em programação 
                    quanto em design, {!ativaResp ? <br /> : <></>}com meus serviços!
                    </div>
                    {ativaResp ? <div className="saibaMais" onClick={()=> window.location.href = 'https://www.linkedin.com/in/rafael-moreira-ramos-de-rezende-16420b21b/'}>Saiba Mais</div> : <></>}
                </div>
            </div>

        </div>
    </>
}