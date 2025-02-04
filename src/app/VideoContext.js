'use client'

import { useContext, createContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const videos = [
        {
            id: 0,
            img: "/telaJogando.jpg",
            titulo: "Os vazamentos dos leaks - GTA V #55",
            canal: "Jogandofoddaci",
            visu: "12",
            duracao: "24:07",
            logo: "https://yt3.googleusercontent.com/VHLV1lDgJjdGmcSWVinGn-_wgVHRYOzGaRyI4js3OHyf5AZ0qBA5JZkFm6UQQgwGyEYzJHtcVnQ=s160-c-k-c0x00ffffff-no-rj"
        },
        {
            id: 1,
            img: "/telaComunitec.jpg",
            titulo: "Projetos de Desenvolvimento WEB #1",
            canal: "Lucas LNS",
            visu: "56",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            id: 2,
            img: "/telaSpotify.jpg",
            titulo: "Projetos de Desenvolvimento WEB #3",
            canal: "Lucas LNS",
            visu: "512",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            id: 3,
            img: "/telaEstudosApi.jpg",
            titulo: "Projetos de Desenvolvimento WEB #2",
            canal: "Lucas LNS",
            visu: "112",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            id: 4,
            img: "/telaNCS.jpg",
            titulo: "Elektronomia & JJD - Free | House | NCS - Copyright Free Music",
            canal: "NoCopyrightSounds",
            visu: "76",
            duracao: "24:07",
            logo: "/logoNCS.jpg"
        },
        {
            id: 5,
            img: "/telaYoutube.jpg",
            titulo: "Refazendo o LAYOUT do YOUTUBE",
            canal: "Lucas LNS",
            visu: "882",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            id: 6,
            img: "/telaComunica.png",
            video: "/videoComunica.mp4",
            titulo: "Meu Aplicativo para o TCC",
            canal: "Lucas LNS",
            visu: "57",
            duracao: "1:02",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
    ]
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <VideoContext.Provider value={{ videos, selectedVideo, setSelectedVideo }}>
            {children}
        </VideoContext.Provider>
    )
}
export const useVideo = () => useContext(VideoContext);