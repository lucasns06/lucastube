/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link';
import { useSidebar } from '../SidebarContext';
import './Main.css'
import { useVideo } from '../VideoContext';
import { useLoading } from '../LoadingContext';
const Main = () => {
    const { setLoading } = useLoading();

    const { sidebarIsOpen } = useSidebar();
    const { videos } = useVideo();
    return (
        <div className={`videos__container p-6 grid gap-4 ${sidebarIsOpen ? "videos__resizer" : ""}`}>
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
                </Link >
            ))}
        </div>
    )
}
export default Main;