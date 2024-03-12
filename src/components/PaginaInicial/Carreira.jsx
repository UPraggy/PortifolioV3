import '../../assets/css/carreira.css'
import { useEffect, useRef, useState } from 'react'
import GlobalVar from '../subComponents/GlobalVar'
import { useInView } from 'react-intersection-observer';
import GlobalCarreira from '../subComponents/GlobalCarreira';


const atualizaArray = ({array, setIndice, contador, tamanhoTolerancia}) => {

  // Garanta que o contador está dentro dos limites do array
  const validaContador = Math.max(0, Math.min(array.length - 1, contador));

  // Determine o índice inicial do subarray
  let indiceInicial = Math.max(0, validaContador - Math.floor((tamanhoTolerancia - 1) / 2));

  // Ajuste se o índice final estiver muito próximo do final do array
  if (indiceInicial + tamanhoTolerancia > array.length) {
    indiceInicial = array.length - tamanhoTolerancia;
  }

  // Crie o subarray de acordo com o índice inicial e o comprimento desejado
  const arrayResultante = array.slice(indiceInicial, indiceInicial + tamanhoTolerancia);

  if(setIndice !== undefined){
    setIndice(indiceInicial)
  }
  return arrayResultante;
}
export default function Carreira(props){

    useEffect(() => {
        GlobalVar.setLocalStorage('menuSelected','HomePage')
      }, []);

    const ativaResp = props.ativaResp
    const topCarreiraInView = useInView({triggerOnce: true});
    const linhaTempCarreiraInView = useInView({triggerOnce: true});
    const compLinhaTempInView = useInView({triggerOnce: true});
    const [pontoLinhaTempo, setPontoLinhaTempo] = useState(0);
    const [indiceInicial, setIndiceInicial] = useState(0);
    const [transicaoCarreira, setTransicaoCarreira] = useState(true);


    const [linhaTempo, setLinhaTempo] = useState([])

    const yellowGoldColor = "#EEB600"

    const animaTransicaoCarreira = async (pointer)=>{
        console.log(pointer)
        await setTransicaoCarreira(false)
        setTimeout(async ()=>{
            await setTransicaoCarreira(true)
            await setPontoLinhaTempo(pointer)
            await setLinhaTempo(atualizaArray({array: GlobalCarreira.carreiras, 
                setIndice: (val) => setIndiceInicial(val), contador: pointer,
                tamanhoTolerancia: ativaResp ? 3 : 6}))
        },100)
    }

    useEffect(() => {
        setLinhaTempo(atualizaArray({array: GlobalCarreira.carreiras, contador: 0, 
            tamanhoTolerancia: ativaResp ? 3 : 6}))
      }, [ativaResp]);

    return <>
        <div className="divisorCarreira">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="containerPrincipal carreira" style={{minHeight: "100vh"}}>

                <div className="topCarreira" ref={topCarreiraInView.ref} 
                                style={{transform: topCarreiraInView.inView ? 'translateX(0)' : 'translateX(100%)'}}>
                    
                    <div className={`titleCarreira ${topCarreiraInView.inView ? 'titleCarreira-visible' : ''}`}>
                                    Carreira
                    </div>
                    <div className="subTitleCarreira">
                        Veja um pouco sobre a tragetória que tenho feito durante meus anos como desenvolvedor.
                    </div>
                </div>

                <div className="linhaTemporal">
                    <div className="linhaTemporalSeletor" ref={linhaTempCarreiraInView.ref}
                        style={{opacity: linhaTempCarreiraInView.inView ? '1' : '0'}}>
                        <div className="buttonLinhaTemporal1" onClick={()=>{
                            let menos1 = pontoLinhaTempo-1
                            menos1 = menos1 <= 0 ? 0 : menos1
                            animaTransicaoCarreira(menos1)
                            }}></div>
                        {linhaTempo.map((val,index)=>{
                            const verificaTempo = pontoLinhaTempo-indiceInicial >= index
                            return <>
                            {ativaResp ? 
                            
                            <div className="timelineElement" key={index} onClick={()=>animaTransicaoCarreira(index+indiceInicial)}>
                                    <div className="eventInfo">
                                        <div className="imageTimeElement"  style={{backgroundImage: 
                                                `url(${require("../../assets/imgs/carreira/"+val.imageUrl)})`,}}></div>
                                        <div className="circle"  style={ verificaTempo ? {backgroundColor: yellowGoldColor} : {}}></div>
                                        <div className="line" style={verificaTempo ? {backgroundColor: yellowGoldColor} : {}}></div>
                                        <div className="ano" style={verificaTempo ? {color: yellowGoldColor} : {}}>{val.data}</div>
                                </div>
                            </div>
                            
                            :
                            
                            <div className="timelineElement" key={index} onClick={()=>animaTransicaoCarreira(index+indiceInicial)}>
                                     <div className="line" style={verificaTempo ? {backgroundColor: yellowGoldColor} : {}}></div>
                                    <div className="eventInfo">
                                        <div className="ano" style={verificaTempo ? {color: yellowGoldColor} : {}}>{val.data}</div>
                                        <div className="circle"  style={ verificaTempo ? {backgroundColor: yellowGoldColor} : {}}></div>
                                        <div className="titulo" style={verificaTempo ? {color: yellowGoldColor} : {}}>{val.titulo}</div>
                                </div>
                            </div>}
                            </>
                        })}
                        <div className="buttonLinhaTemporal2" 
                            onClick={()=>{
                                let naoPassa = GlobalCarreira.carreiras.length-1
                                let mais1 = pontoLinhaTempo+1
                                mais1 = mais1 >= naoPassa ? naoPassa : mais1
                                animaTransicaoCarreira(mais1)
                                }}></div>
                    </div>

                    <div ref={compLinhaTempInView.ref} className={`componentLinhaTemp ${transicaoCarreira ? 'animaTransicao' : ''}`}
 
                        style={ativaResp ? {transform: compLinhaTempInView.inView ? 'translateX(0)' : 'translateX(100%)'} : 
                        {transform: topCarreiraInView.inView ? 'translateY(0)' : 'translateY(100%)'}}>

                        <div className="titleCompLinha">{GlobalCarreira.carreiras[pontoLinhaTempo].titulo}</div>
                        <div className="backCompLinha" 
                            style={{backgroundImage: 
                                `url(${require("../../assets/imgs/carreira/"+GlobalCarreira.carreiras[pontoLinhaTempo].imageUrl)})`,}}></div>
                        <div className="textCompLinha">{GlobalCarreira.carreiraTxt[pontoLinhaTempo]}</div>
                    </div>
                </div>


        </div>
    </>
}