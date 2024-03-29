import '../assets/css/topMenu.css'
import GlobalVar from './subComponents/GlobalVar'
import {useNavigate} from 'react-router-dom';
import { useEffect, useState, useImperativeHandle, forwardRef } from 'react';

export const TopMenu = forwardRef((props,ref)=>{

    const navigate = useNavigate();

    const [showLateralMenu, setShowLateralMenu] = useState('inicial')
    const ativaResp = props.ativaResp
    const [menuSelected, setMenuSelected] = useState(null);  
    const [topMenuStyle, setTopMenuStyle] = useState(null); 
    const [topOptMenuStyle, setTopOptMenuStyle] = useState(null); 

    useEffect(()=>{
            const menuSelectedConst = GlobalVar.getLocalStorage('menuSelected')
            if(!menuSelected){
                setMenuSelected(menuSelectedConst)
            }
        },[menuSelected])
    
    useImperativeHandle(ref, (value) => ({
        // methods connected to `ref`
        setTopMenuStyle: (value) => { 
            setTopMenuStyle(value)
        },
        setTopOptMenuStyle: (value) => { 
            setTopOptMenuStyle(value)
        }
        }))

    return <>
    
        <div className='topMenu' style={{position: 'relative', height: ativaResp ? '8vh' : '12vh', overflowX: 'hidden'}}></div>
        {!ativaResp ? <div className='topMenu' style={topMenuStyle ? topMenuStyle : {}}>
            <div className="leftMenu">
                    <div className="clientinfo" onClick={()=>navigate('./')}>
                        <div className="logo"></div>
                        <div className='nome'>RAFAEL MR</div>
                    </div>
                    <div className="menuOptPrincipal" style={topOptMenuStyle ? topOptMenuStyle : {}}>
                        <div className={menuSelected ? menuSelected === "HomePage" ? 'selectedOpt' : '' : ''}>PÁGINA INICIAL</div>
                        {/* <div className={menuSelected ? menuSelected === "Projetos" ? 'selectedOpt' : '' : ''}>PROJETOS</div> */}
                        <div className={menuSelected ? menuSelected === "Apresentacoes" ? 'selectedOpt' : '' : ''}>APRESENTAÇÕES</div>
                        <div className={menuSelected ? menuSelected === "Documentacoes" ? 'selectedOpt' : '' : ''}>DOCUMENTAÇÕES</div>
                    </div>
            </div>
        </div>
            : <>
            
             {/* MOBILE */}
            <div className='topMenu'>
            <div className="leftMenu" style={topMenuStyle ? {backgroundColor: "#ccc5b9"} : {}}>
                    <div className="clientinfo">
                        <div className="logo"></div>
                        <div className='nome'>RAFAEL MR</div>
                    </div>
                    <div className='sideMenuBtn' onClick={()=>setShowLateralMenu(showLateralMenu === 'inicial' ? true : !showLateralMenu)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        <div className={`lateralMenu  ${showLateralMenu === 'inicial' ? 'lateralMenuInicial' : showLateralMenu ? "mostraMenuLateral" : "escondeMenuLateral"}`}>
            <div className="leftMenu">
                <div className="clientinfo">
                        <div className="logo"></div>
                        <div className='nome'>RAFAEL MR</div>
                </div>
                        <div className='menuCloseBtn' onClick={()=>setShowLateralMenu(false)}></div>
            </div>
            <div className="menuOptPrincipal">
                        <div className={menuSelected ? menuSelected === "HomePage" ? 'selectedOpt' : '' : ''}>PÁGINA INICIAL</div>
                        {/* <div className={menuSelected ? menuSelected === "Projetos" ? 'selectedOpt' : '' : ''}>PROJETOS</div> */}
                        <div className={menuSelected ? menuSelected === "Apresentacoes" ? 'selectedOpt' : '' : ''}>APRESENTAÇÕES</div>
                        <div className={menuSelected ? menuSelected === "Documentacoes" ? 'selectedOpt' : '' : ''}>DOCUMENTAÇÕES</div>
            </div>
        </div> </>}

        </>
})

export default TopMenu;