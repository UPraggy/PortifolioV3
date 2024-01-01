import { useEffect, useState } from 'react'
import '../assets/css/rodape.css'
import '../assets/css/fonts.css'


export default function Rodape(props){



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


    return <>
        {!ativaResp ? 
            <div className='rodape'>
            <div className='logo'></div>

            <div className="info">
                <div>© 2020 Babita. Rua Araguari 511/17, Barro Preto - BH, MG</div>
                <div>CNPJ: 20.124.090/0001-30 </div>
                <div>Telefone: 31 3270 7000</div>
                <div>Email: relacionamento@babita.com.br</div>
            </div>

            <div className="socials">
                <div className='logosSocial'>
                    <div className='instaSoc' onClick={event =>  window.location.href ='https://instagram.com/babitaoficial'}></div>
                    <div className='faceSoc' onClick={event =>  window.location.href= 'https://www.facebook.com/babitaoficial/'}></div>
                    <div className='youtSoc' onClick={event =>  window.location.href= 'https://www.youtube.com/channel/UC7p7d63dmCClMJ69waC9oSg'}></div>
                </div>
                <div className='tituloSocial'>#RevendedoraBabita</div>
            </div>
        </div>
        : <>
        
        <div className='rodape'>
            <div className='logo'></div>

            <div className="socials">
                <div className='logosSocial'>
                    <div className='instaSoc' onClick={event =>  window.location.href ='https://instagram.com/babitaoficial'}></div>
                    <div className='faceSoc' onClick={event =>  window.location.href= 'https://www.facebook.com/babitaoficial/'}></div>
                    <div className='youtSoc' onClick={event =>  window.location.href= 'https://www.youtube.com/channel/UC7p7d63dmCClMJ69waC9oSg'}></div>
                </div>
                <div className='tituloSocial'>#RevendedoraBabita</div>
            </div>
            <div className='lineBarRodape'></div>

            <div className="info">
                <div>© 2020 Babita. Rua Araguari 511/17, Barro Preto - BH, MG</div>
                <div>CNPJ: 20.124.090/0001-30 </div>
                <div>Telefone: 31 3270 7000</div>
                <div>Email: relacionamento@babita.com.br</div>
            </div>

        </div>

        
        
        </>}

        </>
}