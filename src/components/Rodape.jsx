import { useEffect, useState } from 'react'
import '../assets/css/rodape.css'
import '../assets/css/fonts.css'


export default function Rodape(props){



    const ativaResp = props.ativaResp


    return <>
            <div className='rodape'>
                <div className='fraseContext'>“Compreendendo o <span>passado</span>, otimizando o <span>presente</span> e estruturando o <span>futuro.</span>”</div>

                <div className="card">
                    <div className='copyright'>
                        <div className='copyrightImg'></div>
                        <div>2024. Todos Direitos Reservados. Design por Rafael Moreira.</div>
                    </div>
                    <div className="socials">
                            <div className='gitSoc' onClick={event =>  window.location.href ='https://github.com/UPraggy'}></div>
                            <div className='linkdInSoc' onClick={event =>  window.location.href= 'https://www.linkedin.com/in/rafael-moreira-ramos-de-rezende-16420b21b/'}></div>
                            <div className='mailSoc' onClick={event =>  window.location.href= 'mailto:rafaelmoreira2001ofc@gmail.com'}></div>
                            <div className='phoneSoc' onClick={event =>  window.location.href= 'https://wa.me/5531998094740'}></div>
                    </div>
                </div>

            </div>

        </>
}