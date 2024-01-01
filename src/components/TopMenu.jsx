import '../assets/css/topMenu.css'
import '../assets/css/fonts.css'
import GlobalVar from './subComponents/GlobalVar'
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function TopMenu(props){

    const navigate = useNavigate();

    const [showLateralMenu, setShowLateralMenu] = useState('inicial')
    const [ativaResp, setAtivaResp] = useState(null)
    const [menuSelected, setMenuSelected] = useState(null);  

    useEffect(()=>{
            const menuSelectedConst = GlobalVar.getLocalStorage('menuSelected')
            if (ativaResp == null){
                if (window.matchMedia("(max-width: 767px)").matches){
                    setAtivaResp(true)
                }else{
                    setAtivaResp(false)
                }
                
            }
            if(!menuSelected){
                setMenuSelected(menuSelectedConst)
            }
        },[ativaResp, menuSelected])
    
    return <>
    
        <div className='topMenu' style={{position: 'relative', height: ativaResp ? '8vh' : '12vh', overflowX: 'hidden'}}></div>
        {!ativaResp ? <div className='topMenu'>
            <div className="leftMenu">
                    <div className="clientinfo">
                        <div className="logo"></div>
                        <div className='nome'>RAFAEL MR</div>
                    </div>
                    <div className="menuOptPrincipal">
                        <div className={menuSelected ? menuSelected === "HomePage" ? 'selectedOpt' : '' : ''}>PÁGINA INICIAL</div>
                        <div className={menuSelected ? menuSelected === "Projetos" ? 'selectedOpt' : '' : ''}>PROJETOS</div>
                        <div className={menuSelected ? menuSelected === "Apresentacoes" ? 'selectedOpt' : '' : ''}>APRESENTAÇÕES</div>
                        <div className={menuSelected ? menuSelected === "Documentacoes" ? 'selectedOpt' : '' : ''}>DOCUMENTAÇÕES</div>
                    </div>
            </div>
        </div>
            : <>
            
             {/* MOBILE */}
            <div className='topMenu'>
            <div className="leftMenu">
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
                        <div className={menuSelected ? menuSelected === "Projetos" ? 'selectedOpt' : '' : ''}>PROJETOS</div>
                        <div className={menuSelected ? menuSelected === "Apresentacoes" ? 'selectedOpt' : '' : ''}>APRESENTAÇÕES</div>
                        <div className={menuSelected ? menuSelected === "Documentacoes" ? 'selectedOpt' : '' : ''}>DOCUMENTAÇÕES</div>
            </div>
        </div> </>}

        </>
}