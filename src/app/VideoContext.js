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
            video: "https://www.youtube.com/embed/9Va88Kt0NN0?si=X44vOQxRWS75DQxH",
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
        {
            id: 7,
            img: "https://i.ytimg.com/vi/9wexGFSDLmM/maxresdefault.jpg",
            video: "https://www.youtube.com/embed/9wexGFSDLmM?si=elgxR33ush2yqEVh",
            titulo: "Stray: Cool down (Sheet Music 6)",
            canal: "EnviloN",
            visu: "78",
            duracao: "1:02",
            logo: "https://yt3.ggpht.com/ytc/AIdro_kI_qs9lFLDrv3O0Kj01M2wuRm__wcOoGTFheoCmTcUvA=s48-c-k-c0x00ffffff-no-rj"
        },
        {
            id: 8,
            img: "https://i.ytimg.com/vi/TSLRScqwemI/maxresdefault.jpg",
            video: "https://www.youtube.com/embed/TSLRScqwemI?si=86ZDM9DUcp_89Feq",
            titulo: "Nunca Paro (feat. Biffe & Hakuro)",
            canal: "King's Studio",
            visu: "187",
            duracao: "2:15",
            logo: "https://yt3.ggpht.com/x05rSpQOFaTY66Ul6NUWN6KbgCRuzlqz2mXJmAGLWna9s1KVgIXRAghqdHUY68RbSogd2laUdw=s48-c-k-c0x00ffffff-no-rj"
        },
        {
            id: 9,
            img: "https://i.ytimg.com/vi/mWQsiK0hAxI/sddefault.jpg",
            video: "https://www.youtube.com/embed/mWQsiK0hAxI?si=U54HVuZc1pYB3y5K",
            titulo: "Sidoka, ouhboy - Quadro [Vizual by Dnzk]",
            canal: "Sidoka",
            visu: "187",
            duracao: "2:15",
            logo: "https://yt3.ggpht.com/rTygqdhIhpbjU55YR1iX-1n7-KAvb-tvov69JGs8sMxbmofYQWFCSJvxLeL5_55hcGpdemwnsw=s48-c-k-c0x00ffffff-no-rj"
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