'use client'

import { useContext, createContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const videos = [
        {
            id: 0,
            img: "https://i.ytimg.com/vi/gRBq7fPITxw/maxresdefault.jpg",
            titulo: "Through the Valley",
            video: "https://www.youtube.com/embed/gRBq7fPITxw?si=3VlkYHi8KnaCS5Wh",
            canal: "Shawn James",
            visu: "911",
            duracao: "3:40",
            logo: "https://yt3.ggpht.com/guCzucD8MQ7Nm7oflykSMPEWrZATU07OuHxgmnbLYj0asPwCmcspGksXjOrWddZkADLj7PZRyA=s48-c-k-c0x00ffffff-no-rj"
        },
        {
            id: 1,
            img: "/telaComunitec.jpg",
            titulo: "ComuniTec meu SITE para TCC",
            video: "https://www.youtube.com/embed/UjBzDWapIFA?si=PR8XYkyH4iI5-JZl",
            desc: "Site que eu fiz para o meu TCC, sendo uma landing page responsiva. ReactJS e GSAP",
            canal: "Lucas LNS",
            visu: "56",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            id: 2,
            img: "/telaSpotify.jpg",
            titulo: "Recriação da tela do Spotify",
            video: "https://www.youtube.com/embed/6Y8-ZSX7QHQ?si=c1h6FsrcIz8AxzXa",
            desc: "Esse projeto eu fiz na imersão front end 2º edição da alura",
            canal: "Lucas LNS",
            visu: "512",
            duracao: "24:07",
            logo: "https://avatars.githubusercontent.com/u/170823502?v=4"
        },
        {
            id: 3,
            img: "/telaEstudosApi.jpg",
            titulo: "Estudos Api Front End",
            video: "https://www.youtube.com/embed/aP_y-mx6Q-0?si=NhGUVTyyHFy3A3xd",
            desc: "Projeto FullStack, feito no curso de DS. sendo um frontend consumindo minha API de gerenciamento de tarefas.",
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
            desc: "Aplicativo feito com React-Native para o TCC de DS.",
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
            desc: "Musica legal de um jogo que eu joguei, STRAY.",
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
            img: "https://i.ytimg.com/vi/JeHRqAu2DC0/maxresdefault.jpg",
            video: "https://www.youtube.com/embed/NKeU1twQYX4?si=vMYRfQSScoW5DRdT",
            titulo: "The Last of Us 2 - Ellie 'Take on Me' Cover Song",
            canal: "Boss Fight Database",
            visu: "18",
            duracao: "2:15",
            logo: "https://yt3.ggpht.com/ytc/AIdro_nYZNM6UV7ex2rs1epYb-jZfoO6FemXDzLPRERbDNA0_g=s48-c-k-c0x00ffffff-no-rj"
        },
    ]
    const subs = [
        {
            id: 0,
            url: "https://yt3.googleusercontent.com/m6s3UkM_8f4233Ayxq2NEyeJNmSMjZen3aPVhAKRyigEKi-Gw_sUMXysRA_WLEyuwq1Pw1fOVg=s160-c-k-c0x00ffffff-no-rj",
            label: "Gaules",
            banner: "https://yt3.googleusercontent.com/w6rj-Bpyxu98p4HBpYUZXmkubke4BM5UpKMTdVRO8G4Ijjs99p0GVAAsT4_OoVd4raqCRAXKyw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
        },
        {
            id: 1,
            url: "https://yt3.googleusercontent.com/dwDfPCUX-TodIOokajuERnwzNALqfeW0zc7dZTQWzOLV8nfDIePXBhDjBpsB_VmwfnIRS1vTRw=s160-c-k-c0x00ffffff-no-rj",
            label: "Nak"
        },
        {
            id: 2,
            url: "https://yt3.googleusercontent.com/j8tHcvLgVpYGOo9ZcEGXInqRTIYNF2O__RLvowRanAhP6NcKeKdOob5aco_iWiS5yW-KqRKOiUY=s160-c-k-c0x00ffffff-no-rj",
            label: "30PRAUM"
        },
        {
            id: 3,
            url: "https://yt3.googleusercontent.com/VHLV1lDgJjdGmcSWVinGn-_wgVHRYOzGaRyI4js3OHyf5AZ0qBA5JZkFm6UQQgwGyEYzJHtcVnQ=s160-c-k-c0x00ffffff-no-rj",
            label: "jogandofoddaci"
        },
        {
            id: 4,
            url: "https://yt3.googleusercontent.com/rq_ds2CbR-0X70zLDloTmgL9t_SZatRtb8t4TB11Cb51rG-TRGlKdAOF8DkwiTrB_A5SKTLb=s160-c-k-c0x00ffffff-no-rj",
            label: "Andrezitos"
        },
        {
            id: 5,
            url: "https://yt3.googleusercontent.com/Fipf9iG1DOTVtPBTSJNKuxYEm5XISCayUcr1MgLCg5ffW-n-op4ZHGqLpOlerbDri2_AZVOH-w=s160-c-k-c0x00ffffff-no-rj",
            label: "SolaLIVE"
        },
        {
            id: 6,
            url: "https://yt3.googleusercontent.com/ytc/AIdro_kLR5Wl0-838WZwpNJ9P90bpbAhHA5iZePEX1UDG1SlbL8=s160-c-k-c0x00ffffff-no-rj",
            label: "Stackz / Gustavo Pinheiro"
        },
        {
            id: 7,
            url : "https://avatars.githubusercontent.com/u/170823502?v=4",
            label: "Lucas LNS"
        }
    ]
    return (
        <VideoContext.Provider value={{ videos, subs }}>
            {children}
        </VideoContext.Provider>
    )
}
export const useVideo = () => useContext(VideoContext);