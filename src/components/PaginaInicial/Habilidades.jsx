import '../../assets/css/habilidades.css'
import { useEffect, useRef, useState } from 'react'
import GlobalVar from '../subComponents/GlobalVar'
import { useInView } from 'react-intersection-observer';

export default function Habilidades(props){

    useEffect(() => {
        GlobalVar.setLocalStorage('menuSelected','HomePage')
      }, []);

    const ativaResp = props.ativaResp

    const habltContainerInView = useInView({});
    const titleHablt = useRef()

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
    
    const verificaTop = (element) => element.current ? scrollPosition-element.current.getBoundingClientRect().top < 10 : false
    return <>
        <div className="divisorHablt">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="containerPrincipal habilidades" style={{minHeight: "100vh"}}>
                <div className="titleHablt" ref={titleHablt}
                            style={ titleHablt.current ? {transform:  verificaTop(titleHablt) ? 
                                `translateX(${scrollPosition-titleHablt.current.getBoundingClientRect().top}px)` : `translateX(0px)`} : {}}>
                                Minhas Habilidades
                </div>

                <div className="habltContainer" ref={habltContainerInView.ref} 
                    style={{transform: habltContainerInView.inView ? 'translateY(0)' : 'translateY(30%)',
                        opacity: habltContainerInView.inView ? 1 : 0}}>

                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">NodeJs</div></div>
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">React</div></div>
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">React Native</div></div>
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">Figma</div></div>
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">OracleSql</div></div>
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">PostgresSql</div></div>
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">Git / GitHub</div></div>
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">Python</div></div>
                    {ativaResp ? <></> : <div></div>}
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">Linux</div></div>
                    <div className="habltitem"><div className="iconHablt"></div><div className="textHablt">Java</div></div>
                </div>
        </div>
    </>
}