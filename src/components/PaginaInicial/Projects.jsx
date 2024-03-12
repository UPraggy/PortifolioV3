import '../../assets/css/projects.css'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import GlobalVar from '../subComponents/GlobalVar'
import ProjItem from '../subComponents/ProjectItem';


import PortV3SVG from '../../assets/imgs/projects/PortV3.svg';
import PortV3SVGBack from '../../assets/imgs/projects/PortV3Back.svg';
import ChatAppSVG from '../../assets/imgs/projects/ChatApp.svg';
import ChatAppSVGBack from '../../assets/imgs/projects/ChatAppBack.svg';
import ChessGameSVG from '../../assets/imgs/projects/ChessGame.svg';
import ChessGameSVGBack from '../../assets/imgs/projects/ChessGameBack.svg';
import GerencHotelSVG from '../../assets/imgs/projects/GerencHotel.svg';
import GerencHotelSVGBack from '../../assets/imgs/projects/GerencHotelBack.svg';
import SafiraFshnSVG from '../../assets/imgs/projects/SafiraFshn.svg';
import SafiraFshnBack from '../../assets/imgs/projects/SafiraFshnBack.svg';
import SaoPedroSVG from '../../assets/imgs/projects/SaoPedro.svg';
import SaoPedroSVGBack from '../../assets/imgs/projects/SaoPedroBack.svg';


export default function Projects(props){

    useEffect(() => {
        GlobalVar.setLocalStorage('menuSelected','HomePage')
      }, []);

    const ativaResp = props.ativaResp

    const projectContainerInView = useInView({});

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const verificaTop = (element) => element.current !== 'undefined' ? scrollPosition-element.current.getBoundingClientRect().top < 10 : false
    const getTop = (element) => scrollPosition-element.current.getBoundingClientRect().top
    
    useEffect(()=>{
        
        if(projectContainerInView.inView && ativaResp){
            props.topMenuStyle.current.setTopMenuStyle({backgroundColor: "#e4dcce"})
        }else if(projectContainerInView.inView && !ativaResp){
            props.topMenuStyle.current.setTopOptMenuStyle({color: "#000"})
        }else{
            props.topMenuStyle.current.setTopOptMenuStyle(null)
            props.topMenuStyle.current.setTopMenuStyle(null)
        }
    },[projectContainerInView.inView, ativaResp])
    
    return <>

        <div className="containerPrincipal projects"  ref={projectContainerInView.ref}  
            style={{minHeight: "90vh", background: projectContainerInView.inView ? '#fffaf5' : '#FFFFFF00'}}>
                <div className="projContainer" style={{opacity: projectContainerInView.inView ? 1 : 0}}>

                            <ProjItem scrollPosition={scrollPosition} verificaTop={el => verificaTop(el)} status={'DESATIVADO'}
                                getTop={el => getTop(el)}
                                type={'FULL STACK'}
                                title={'ChatApp'}
                                description={`Chat em tempo real, com gerenciamento de salas (privadas, publicas e grupos) 
                                e de usuários. Foi utilizado WebScocket para comunicação baseado-se em python e Django. 
                                Além de outras linguagens`}
                                imageurl={ChatAppSVG}
                                imageBack={ChatAppSVGBack}
                                reversed={false}
                                ativaResp={ativaResp}
                                shortDescription={`Chat em tempo real baseado em python e WebSocket.`}
                                videourl={'trailer_chat.mp4'}/>
                            
                            <ProjItem scrollPosition={scrollPosition} verificaTop={el => verificaTop(el)} status={'DESATIVADO'}
                                getTop={el => getTop(el)}
                                type={'FULL STACK'}
                                title={'Chess Game'}
                                description={`Projeto voltado a aprofundar meu conhecimento em JavaScript OOP, 
                                além de utilizar Ajax, ampliando e refinando meu conhecimento sobre lógica, foi 
                                utilizado   WebSocket para comunicação`}
                                imageurl={ChessGameSVG}
                                imageBack={ChessGameSVGBack}
                                reversed={true}
                                ativaResp={ativaResp}
                                videourl={'trailer_chess.mp4'}/>
                            
                            <ProjItem scrollPosition={scrollPosition} verificaTop={el => verificaTop(el)} status={'ATIVO'}
                                getTop={el => getTop(el)}
                                type={'FULL STACK / MOBILE'}
                                title={'Gerenciador de Hotelaria'}
                                description={`App desenvolvido com objetivo de auxiliar na organização de 
                                reservas de uma rede de hotelaria, sua iniciativa tem como base o projeto de 
                                pesquisa e extensão da Universidade`}
                                imageurl={GerencHotelSVG}
                                imageBack={GerencHotelSVGBack}
                                reversed={false}
                                ativaResp={ativaResp}
                                videourl={'gerencHotel.mp4'}/>
                            
                            <ProjItem scrollPosition={scrollPosition} verificaTop={el => verificaTop(el)} status={'ATIVO'}
                                getTop={el => getTop(el)}
                                type={'FULL STACK / FREE LANCER'}
                                title={'Safira Fashion Bolsas'}
                                description={`Website de Freelancer, desenvolvido tendo como objetivo atingir
                                 o menor custo possível para a criação de uma loja virtual, além de 
                                 ter uma boa apresentação`}
                                imageurl={SafiraFshnSVG}
                                imageBack={SafiraFshnBack}
                                reversed={true}
                                ativaResp={ativaResp}
                                videourl={'safiraVid.mp4'}/>
                            
                            <ProjItem scrollPosition={scrollPosition} verificaTop={el => verificaTop(el)} status={'ATIVO'}
                                getTop={el => getTop(el)}
                                type={'FULL STACK / FREE LANCER'}
                                title={'Site Igreja São Pedro'}
                                description={`Site desenvolvi de de forma voluntária visando ampliar o alcance e 
                                facilitar o acesso às informações. Oferece funcionalidades como programação, avisos, 
                                Bíblia e liturgia diária, entre outros recursos`}
                                imageurl={SaoPedroSVG}
                                imageBack={SaoPedroSVGBack}
                                reversed={false}
                                ativaResp={ativaResp}
                                videourl={'SaoPedro.mp4'}/>

                            <ProjItem scrollPosition={scrollPosition} verificaTop={el => verificaTop(el)} status={'ATIVO'}
                                getTop={el => getTop(el)}
                                type={'FULL STACK'}
                                title={'Portifólio V3'}
                                description={`Uma janela aberta para o mercado, dessa vez em sua 3° versão, não há nada que não 
                                possa ser melhorado, e através do meu portifólio, tento refletir um pouco do meu crescimento 
                                como desenvolvedor`}
                                imageurl={PortV3SVG}
                                imageBack={PortV3SVGBack}
                                reversed={true}
                                ativaResp={ativaResp}
                                videourl={''}/>
                </div>
        </div>
    </>
}