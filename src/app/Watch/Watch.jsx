'use client'
import { useSidebar } from '../SidebarContext';
import { useVideo } from '../VideoContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowAltCircleDown, faArrowDown, faBars, faBell, faClock } from "@fortawesome/free-solid-svg-icons";
import './VideoPage.css'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLoading } from '../LoadingContext';
import Link from 'next/link';
import SidebarVideo from '../Sidebar/SidebarVideo';
import '../media-queries.css'
const VideoPage = () => {
    const { setLoading } = useLoading();

    const searchParams = useSearchParams();
    const videoId = parseInt(searchParams.get('id'));

    const { sidebarIsOpen, toggleSidebar } = useSidebar();
    const { videos, subs } = useVideo();

    const videoSelected = videos.find((item) => item.id === videoId);

    useEffect(() => {
        setLoading(false);
    }, [setLoading]);

    useEffect(() => {
        if (videoSelected) {
            document.title = `${videoSelected.titulo}`;
        }
    }, [videoSelected]);

    const [descIsOpen, setDescIsOpen] = useState(false);

    function toggleDesc() {
        setDescIsOpen(prevState => !prevState);
    }

    if (!videoSelected) {
        return (
            <div className="error">
                <h1 className='text-3xl'>Selecione um video</h1> <br />
                <Link href="/">
                    <button className='p-4 bg-red-600 font-bold text-2xl rounded-xl'>Voltar</button>
                </Link>
            </div>
        )
    }
    if (sidebarIsOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    const buttons = [
        {
            id: 0,
            texto: "Tudo"
        },
        {
            id: 2,
            texto: "Música"
        },
        {
            id: 3,
            texto: "Jogos"
        },
        {
            id: 4,
            texto: "Mixes"
        },
        {
            id: 5,
            texto: "Programação de computadores"
        },
        {
            id: 6,
            texto: "Indie Pop"
        },
        {
            id: 7,
            texto: "Hip Hop brasileiro"
        },
        {
            id: 8,
            texto: "Programação de computadores"
        },
        {
            id: 9,
            texto: "Indie Pop"
        },
        {
            id: 10,
            texto: "Hip Hop brasileiro"
        },
        {
            id: 0,
            texto: "Tudo"
        },
        {
            id: 2,
            texto: "Música"
        },
        {
            id: 3,
            texto: "Jogos"
        },
        {
            id: 4,
            texto: "Mixes"
        },
        {
            id: 5,
            texto: "Programação de computadores"
        },
        {
            id: 6,
            texto: "Indie Pop"
        },
        {
            id: 7,
            texto: "Hip Hop brasileiro"
        },
        {
            id: 8,
            texto: "Programação de computadores"
        },
        {
            id: 9,
            texto: "Indie Pop"
        },
        {
            id: 10,
            texto: "Hip Hop brasileiro"
        },
    ]
    return (
        <>
            <SidebarVideo />
            <div className={`video__page flex gap-4`}>
            <div className={`blur ${sidebarIsOpen ? "blurOpacity" : ""}`}></div>
                {sidebarIsOpen ? <div className='overlay' onClick={toggleSidebar}></div> : ""}
                <div className="left flex flex-col gap-2">
                    {videoSelected.video ? (
                        <iframe className="video" src={videoSelected.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    ) : (
                        <img className="video" src={videoSelected.img} alt="video" />
                    )}

                    <h1 className='font-bold text-2xl'>{videoSelected.titulo}</h1>

                    <div className="video__options gap-2 justify-between">
                        <div className='video__options__sub gap-2 items-center'>
                            <Link href={`/Channel?id=7`}>
                                <div className='flex gap-2'>
                                    <img className='rounded-full' src={videoSelected.logo} alt="logo" />
                                    <div>
                                        <h1 className='font-bold'>{videoSelected.canal}</h1>
                                        <p className='text-gray-400'>{parseInt(videoSelected.visu) + 57} mil inscritos</p>
                                    </div>
                                </div>
                            </Link>
                            <button className="inscrito rounded-3xl py-2">
                                <FontAwesomeIcon
                                    icon={faBell}
                                    width={32}
                                    height={32}
                                    color="white" />
                                Inscrito
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    width={32}
                                    height={32}
                                    color="white" />
                            </button>
                        </div>
                        <div className='video__options__sub gap-2'>
                            <button className="inscrito rounded-3xl py-2 pr-2">
                                <FontAwesomeIcon
                                    icon={faBell}
                                    width={32}
                                    height={32}
                                    color="white" />
                                Compartilhar
                            </button>
                            <button className="inscrito rounded-3xl py-2 pr-2">
                                <FontAwesomeIcon
                                    icon={faArrowAltCircleDown}
                                    width={32}
                                    height={32}
                                    color="white" />
                                Download
                            </button>
                            <button className="inscrito rounded-3xl py-2 pr-2">
                                <FontAwesomeIcon
                                    icon={faBell}
                                    width={32}
                                    height={32}
                                    color="white" />
                                Valeu
                            </button>
                        </div>
                    </div>
                    <div className={`video__desc rounded-xl p-2 ${descIsOpen ? "openedDesc" : ""}`} onClick={toggleDesc}>
                        <h1 className='font-bold'>{videoSelected.visu} mil visualizações</h1>

                        <p>{videoSelected.desc ? videoSelected.desc : "Esse vídeo não tem descrição"}</p>
                        <br /> <br />

                        <p>LucasTube, recriação do Youtube para aprender um pouco do NextJS</p>
                        <br /> <br />

                        <h1 className='text-2xl font-bold'>Transcrição</h1>
                        <p>Acompanhe usando a transcrição.</p>
                        <br />
                        <p className='font-bold'>Mostrar Menos</p>
                    </div>
                </div>
                <div className="right">
                    <div className="buttons__container__dois flex items-center gap-2 py-4 relative overflow-hidden">
                    <div className="buttons__container__fade2"></div>
                        {buttons.map((item, index) => (
                            <button key={index} className='bg-secondary p-2 font-medium rounded-xl width-max-content'>{item.texto}</button>
                        ))}
                    </div>
                    {videos.map((item, index) => (
                        <Link href={`/Watch?id=${item.id}`} className="video__card__dynamic flex gap-2 relative" key={index}>
                            <div className="video__card__options__icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="video__icons absolute flex flex-col gap-2">
                                <FontAwesomeIcon
                                    className='py-2 rounded-lg'
                                    icon={faClock}
                                    width={32}
                                    height={32}
                                    color="white" />
                                <FontAwesomeIcon
                                    className='py-2 rounded-lg'
                                    icon={faBars}
                                    width={32}
                                    height={32}
                                    color="white" />
                            </div>
                            <img src={item.img} className="thumb__dynamic rounded-2xl" alt='thumb' />
                            <div className="container__texto__dynamic">
                                <h1>{item.titulo}</h1>
                                <p className='text-gray-400'>{item.canal}</p>
                                <p className='text-gray-400'>{item.visu} mil visualizações</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default VideoPage;