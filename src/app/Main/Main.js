/* eslint-disable @next/next/no-img-element */
'use client'

import { useSidebar } from '../SidebarContext';
import './Main.css'
const Main = () => {
    const { sidebarIsOpen } = useSidebar();

    const videos = [
        {
            img: "/telaJogando.jpg",
            titulo: "Os vazamentos dos leaks - GTA V #55",
            canal: "Jogandofoddaci",
            visu: "12",
            duracao: "24:07",
            logo: "https://yt3.googleusercontent.com/VHLV1lDgJjdGmcSWVinGn-_wgVHRYOzGaRyI4js3OHyf5AZ0qBA5JZkFm6UQQgwGyEYzJHtcVnQ=s160-c-k-c0x00ffffff-no-rj"
        },
        {
            img: "/telaComunitec.jpg",
            titulo: "Projetos de Desenvolvimento WEB #1",
            canal: "Lucas LNS",
            visu: "56",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            img: "/telaSpotify.jpg",
            titulo: "Projetos de Desenvolvimento WEB #3",
            canal: "Lucas LNS",
            visu: "512",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            img: "/telaEstudosApi.jpg",
            titulo: "Projetos de Desenvolvimento WEB #2",
            canal: "Lucas LNS",
            visu: "112",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            img: "/telaNCS.jpg",
            titulo: "Elektronomia & JJD - Free | House | NCS - Copyright Free Music",
            canal: "NoCopyrightSounds",
            visu: "76",
            duracao: "24:07",
            logo: "/logoNCS.jpg"
        },
        {
            img: "/telaYoutube.jpg",
            titulo: "Refazendo o LAYOUT do YOUTUBE",
            canal: "Lucas LNS",
            visu: "882",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
    ]
    return (
        <div className={`videos__container p-6 grid gap-4 ${sidebarIsOpen ? "videos__resizer" : ""}`}>
            {videos.map((item, index) => (
                <div className="video__card" key={index}>
                    <img src={item.img} className="thumb rounded-2xl" alt='thumb' />
                    <div className="desc flex mt-2 gap-2">
                        <img className='rounded-full' src={item.logo} alt="logo" />
                        <div className="container__texto">
                            <h1>{item.titulo}</h1>
                            <p>{item.canal}</p>
                            <p>{item.visu} mil visualizações</p>
                        </div>
                    </div>

                </div>
            ))}
            {videos.map((item, index) => (
                <div className="video__card" key={index}>
                    <img src={item.img} className="thumb rounded-2xl" alt='thumb' />
                    <div className="desc flex mt-2 gap-2">
                        <img className='rounded-full' src={item.logo} alt="logo" />
                        <div className="container__texto">
                            <h1>{item.titulo}</h1>
                            <p>{item.canal}</p>
                            <p>{item.visu} mil visualizações</p>
                        </div>
                    </div>

                </div>
            ))}
            {videos.map((item, index) => (
                <div className="video__card" key={index}>
                    <img src={item.img} className="thumb rounded-2xl" alt='thumb' />
                    <div className="desc flex mt-2 gap-2">
                        <img className='rounded-full' src={item.logo} alt="logo" />
                        <div className="container__texto">
                            <h1>{item.titulo}</h1>
                            <p>{item.canal}</p>
                            <p>{item.visu} mil visualizações</p>
                        </div>
                    </div>

                </div>
            ))}
            {videos.map((item, index) => (
                <div className="video__card" key={index}>
                    <img src={item.img} className="thumb rounded-2xl" alt='thumb' />
                    <div className="desc flex mt-2 gap-2">
                        <img className='rounded-full' src={item.logo} alt="logo" />
                        <div className="container__texto">
                            <h1>{item.titulo}</h1>
                            <p>{item.canal}</p>
                            <p>{item.visu} mil visualizações</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}
export default Main;