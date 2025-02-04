'use client'
import { useSidebar } from '../SidebarContext';
import { useVideo } from '../VideoContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowAltCircleDown, faArrowDown, faBell } from "@fortawesome/free-solid-svg-icons";
import './VideoPage.css'
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLoading } from '../LoadingContext';
import Link from 'next/link';

const VideoPage = () => {
    const { setLoading } = useLoading();

    const searchParams = useSearchParams();
    const videoId = parseInt(searchParams.get('id'));

    const { sidebarIsOpen } = useSidebar();
    const { videos } = useVideo();
    const videoSelected = videos.find((item) => item.id === videoId);

    useEffect(() => {
        setLoading(false);
    }, [setLoading]);

    useEffect(() => {
        if (videoSelected) {
            document.title = `${videoSelected.titulo} - Meu YouTube Clone`;
        }
    }, [videoSelected]);

    const [descIsOpen, setDescIsOpen] = useState(false);

    function toggleDesc() {
        setDescIsOpen(prevState => !prevState);
    }

    if (!videoSelected) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={`video__page flex gap-4 ${sidebarIsOpen ? "videos__resizer" : ""}`}>
            <div className="left flex flex-col gap-2">
                {videoSelected.video ? (
                    <video className="video" controls>
                        <source src={videoSelected.video} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                ) : (
                    <img className="video" src={videoSelected.img} alt="video" />
                )}

                <h1 className='font-bold text-2xl'>{videoSelected.titulo}</h1>

                <div className="video__options gap-2 justify-between">
                    <div className='video__options__sub gap-2 items-center'>
                        <div className='flex gap-2'>
                            <img className='rounded-full' src={videoSelected.logo} alt="logo" />
                            <div>
                                <h1 className='font-bold'>{videoSelected.canal}</h1>
                                <p>UM bilhao de inscritos</p>
                            </div>
                        </div>
                        <button className="inscrito rounded-3xl py-2">
                            <FontAwesomeIcon
                                icon={faBell}
                                width={32}
                                height={32}
                                color="white"
                            />
                            Inscrito
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                width={32}
                                height={32}
                                color="white"
                            />
                        </button>
                    </div>
                    <div className='video__options__sub gap-2'>
                        <button className="inscrito rounded-3xl py-2 pr-2">
                            <FontAwesomeIcon
                                icon={faBell}
                                width={32}
                                height={32}
                                color="white"
                            />
                            Compartilhar
                        </button>
                        <button className="inscrito rounded-3xl py-2 pr-2">
                            <FontAwesomeIcon
                                icon={faArrowAltCircleDown}
                                width={32}
                                height={32}
                                color="white"
                            />
                            Download
                        </button>
                        <button className="inscrito rounded-3xl py-2 pr-2">
                            <FontAwesomeIcon
                                icon={faBell}
                                width={32}
                                height={32}
                                color="white"
                            />
                            Valeu
                        </button>
                    </div>
                </div>
                <div className={`video__desc rounded-xl p-2 ${descIsOpen ? "openedDesc" : ""}`} onClick={toggleDesc}>
                    <h1 className='font-bold'>{videoSelected.visu} mil visualizações</h1>
                    <p>descricao testando lucastube</p>
                    <br /> <br />

                    <p>Essa é a descrição do video</p>
                    <br /> <br />

                    <h1 className='text-2xl font-bold'>Transcrição</h1>
                    <p>Acompanhe usando a transcrição.</p>

                    <p className='font-bold' >Mostrar Menos</p>
                </div>
            </div>
            <div className="right">
                {videos.map((item, index) => (
                    <Link href={`/Watch?id=${item.id}`} className="video__card__dynamic flex gap-2" key={index}>
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
    )
}

export default VideoPage;