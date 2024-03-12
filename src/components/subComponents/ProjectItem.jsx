import { useRef, useState } from "react"
import '../../assets/css/projectsItemSide.css'

import buttonPlayVideo from '../../assets/imgs/projects/buttonPlayVideo.svg'
import buttonBackVideo from '../../assets/imgs/projects/buttonBackVideo.svg'


const ProjItemPC = ({item})=>{
    const status = {
        ATIVO: "#2863FC",
        DESATIVADO: "#F46060"
    }
    const projectItem = useRef()
    const retornaBounding = (el) => el.current.getBoundingClientRect().top
    const [changeSide, setChangeSide] = useState(false)

    return <div className='projItemContainer' style={{ 
        '--projects-colorStatus': status[item.status], direction: item.reversed ? 'rtl' : 'ltr',
        gridTemplateColumns : changeSide ? '25% 70%': '49% 49%',
        marginBottom: changeSide ? '-100px' : '150px'
        }}
        ref={projectItem} onClick={()=>setChangeSide(!changeSide)}>

                <div className='projItemLeft' style={projectItem.current ? {
                        transform: `perspective(5000px) 
                        rotateX(${(retornaBounding(projectItem) < 100 ? 0 : retornaBounding(projectItem)*-1 ) * 0.06 + 'deg'})
                        rotateY(${(retornaBounding(projectItem) < 100 ? 0 
                            : retornaBounding(projectItem)*-1 ) * 0.02 + 'deg'})`} : {}}>
                    <div className='projItemType' style={item.reversed ? {textAlign: 'left'} : {}}>{item.type}</div>
                    <div className='projItemTitle' style={item.reversed ? {textAlign: 'left'} : {}}>{item.title}</div>
                    <div className='projItemStatus' style={item.reversed ? {margin : '0.4em auto 0.4em 0'} : {}}>{item.status}</div>

                    <div className="buttonDetails" 
                    style={{...(item.reversed ? {margin : '0.4em auto 0.4em 0'} : {}),
                    backgroundImage: !changeSide ? `url("${buttonPlayVideo}")` : 
                    `url('${buttonBackVideo}')`}}></div>

                    {!changeSide ? <div className='projItemDesc' 
                    style={item.reversed ? {textAlign: 'left'} : {}}>{item.description}</div> : <></>}
                </div>

            <div className="projectImageContainer" style={{
                    
                    ...(projectItem.current && !changeSide ? {
                            transform: `perspective(5000px) 
                            rotateX(${(retornaBounding(projectItem) < 100 ? 0 : retornaBounding(projectItem)*-1 ) * 0.06 + 'deg'})
                            rotateY(${(retornaBounding(projectItem) < 100 ? 0 
                                : retornaBounding(projectItem)*-1 ) * 0.02 + 'deg'})`,
                            backgroundPositionY: `${(retornaBounding(projectItem) < 100 ? 0
                                : retornaBounding(projectItem)*-1 )*5 * 0.04 + 'px'}`
                            } : {})
                            }}>
                            {!changeSide ? <>
                            <div className="projectImageBox"></div>
                            <div className="projectImageBack" style={{backgroundImage : `url(${item.imageBack})`}}></div>
                             <div className='projItemImage'
                            style={{backgroundImage : `url(${item.imageurl})`,
                            ...(projectItem.current ? {
                                backgroundPositionY: `${(retornaBounding(projectItem) < 500 ? 0
                                    : retornaBounding(projectItem)*-1 )*5 * 0.08 + 'px'}`
                                } : {})
                                }}></div> </>:
                            <video controls className="projectVideo" onClick={(event)=>  event.stopPropagation()}>
                                <source src={item.videourl ? require(`../../assets/videos/${item.videourl}`) : ''} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </video>}
            </div>
    </div>
}


const ProjItemMobile = ({item})=>{
    const status = {
        ATIVO: "#2863FC",
        DESATIVADO: "#F46060"
    }
    const projectItem = useRef()
    const retornaBounding = (el) => el.current.getBoundingClientRect().top
    const [changeSide, setChangeSide] = useState(false)

    return <div className='projItemContainer' style={{'--projects-colorStatus': status[item.status]}}
        ref={projectItem} onClick={()=>setChangeSide(!changeSide)}>
            
            <div className='projItemLeft' style={projectItem.current ? {
                        transform: `perspective(5000px) 
                        rotateX(${(retornaBounding(projectItem) < 100 ? 0 : retornaBounding(projectItem)*-1 ) * 0.06 + 'deg'})
                        rotateY(${(retornaBounding(projectItem) < 100 ? 0 
                            : retornaBounding(projectItem)*-1 ) * 0.02 + 'deg'})`} : {}}>
                    <div className='projItemType'>{item.type}</div>
                    <div className='projItemTitle'>{item.title}</div>
                    

                    

                    
                </div>

            <div className="projectImageContainer" style={{
                    
                    ...(projectItem.current && !changeSide ? {
                            transform: `perspective(5000px) 
                            rotateX(${(retornaBounding(projectItem) < 300 ? 0 : retornaBounding(projectItem)*-1 ) * 0.09 + 'deg'})
                            rotateY(${(retornaBounding(projectItem) < 300 ? 0 
                                : retornaBounding(projectItem)*-1 ) * 0.02 + 'deg'})`,
                            backgroundPositionY: `${(retornaBounding(projectItem) < 100 ? 0
                                : retornaBounding(projectItem)*-1 )*5 * 0.04 + 'px'}`
                            } : {})
                            }}>
                            {!changeSide ? <>
                            <div className="projectImageBox"></div>
                            <div className="projectImageBack" style={{backgroundImage : `url(${item.imageBack})`}}></div>
                             <div className='projItemImage'
                            style={{backgroundImage : `url(${item.imageurl})`,
                            ...(projectItem.current ? {
                                backgroundPositionY: `${(retornaBounding(projectItem) < 350 ? 0
                                    : retornaBounding(projectItem)*-1 )*5 * 0.08 + 'px'}`
                                } : {})
                                }}></div> </>:

                                
                            <video controls className="projectVideo" onClick={(event)=>  event.stopPropagation()} autoPlay={true}>
                                <source src={item.videourl ? require(`../../assets/videos/${item.videourl}`) : ''} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </video>
                            }
                            
            </div>

            <div className='projItemStatus'>{item.status}</div>
            {changeSide ? <div className='projItemDesc'>{item.description}</div> : <></>}
                

    </div>
}


export const ProjItem = (item)=>{
    return <>
    {item.ativaResp ? <ProjItemMobile item={item}/>  : <ProjItemPC item={item}/>}
    </>
}
export default ProjItem;