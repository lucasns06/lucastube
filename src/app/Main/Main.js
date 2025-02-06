/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link';
import { useSidebar } from '../SidebarContext';
import './Main.css'
import { useVideo } from '../VideoContext';
import { useLoading } from '../LoadingContext';
import Sidebar from '../Sidebar/Sidebar';
const Main = () => {
    const { setLoading } = useLoading();

    const { sidebarIsOpen } = useSidebar();
    const { videos } = useVideo();

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
            <Sidebar />
            <main className={`pageVideo ${sidebarIsOpen ? "videos__resizer" : ""}`}>
                <div className="buttons__container flex items-center gap-2 px-6 py-4 mr-2 overflow-hidden">
                    <div className="buttons__container__fade"></div>
                    {buttons.map((item, index) => (
                        <button key={index} className='bg-secondary p-2 font-medium rounded-xl width-max-content'>{item.texto}</button>
                    ))}
                </div>
                <div className={`videos__container p-6 grid gap-4`}>
                    {videos.map((item) => (
                        <Link href={`/Watch?id=${item.id}`} className="video__card" key={item.id} onClick={() => setLoading(true)}>
                            <img src={item.img} className="thumb rounded-2xl" alt='thumb' />
                            <div className="desc flex mt-2 gap-2">
                                <img className='rounded-full' src={item.logo} alt="logo" />
                                <div className="container__texto">
                                    <h1>{item.titulo}</h1>
                                    <p>{item.canal}</p>
                                    <p>{item.visu} mil visualizações</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {videos.map((item) => (
                        <Link href={`/Watch?id=${item.id}`} className="video__card" key={item.id} onClick={() => setLoading(true)}>
                            <img src={item.img} className="thumb rounded-2xl" alt='thumb' />
                            <div className="desc flex mt-2 gap-2">
                                <img className='rounded-full' src={item.logo} alt="logo" />
                                <div className="container__texto">
                                    <h1>{item.titulo}</h1>
                                    <p>{item.canal}</p>
                                    <p>{item.visu} mil visualizações</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}
export default Main;