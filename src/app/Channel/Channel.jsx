'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Channel.css'
import { faArrowAltCircleDown, faBell } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'next/navigation';
import { useVideo } from '../VideoContext';
import Link from 'next/link';
import { useSidebar } from '../SidebarContext';
import '../Main/Main.css'
import Sidebar from '../Sidebar/Sidebar';

const Channel = () => {
    const searchParams = useSearchParams();
    const channelId = parseInt(searchParams.get('id'));
    const { subs, videos } = useVideo();
    const channelSelected = subs.find((item) => item.id === channelId);
    const { sidebarIsOpen } = useSidebar();

    return (
        <>
            <Sidebar />
            <div className={`channel__container ${sidebarIsOpen ? "channel__resizer" : ""}`}>
                <div className="banner">
                    <img className="banner__background" src="/banner.jpg" alt="banner" />
                </div>
                <div className="channel_info flex items-center gap-4 pt-4">
                    <img className="rounded-full" src={channelSelected?.url} alt="logo" width={160} height={160} />
                    <div className="channel__info__text flex flex-col gap-2">
                        <h1 className='text-4xl font-bold'>{channelSelected?.label}</h1>
                        <p className='font-bold'>@{channelSelected?.label} <span className='font-normal text-gray-300'>100 mil inscritos</span></p>
                        <p className='text-gray-300'>Descrição do canal, ele abre um modal ;/</p>
                        <div className="buttons__container__channel flex items-center gap-2">
                            <button className="rounded-3xl py-2 pr-2">
                                <FontAwesomeIcon
                                    icon={faBell}
                                    width={32}
                                    height={32}
                                    color="white" />
                                Compartilhar
                            </button>
                            <button className="rounded-3xl py-2 pr-2">
                                <FontAwesomeIcon
                                    icon={faArrowAltCircleDown}
                                    width={32}
                                    height={32}
                                    color="white" />
                                Download
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`videos__container__channel p-6 grid gap-4`}>
                    {videos.map((item) => (
                        <Link href={`/Watch?id=${item.id}`} className="video__card" key={item.id}>
                            <img src={item.img} className="thumb rounded-2xl" alt='thumb' />
                            <div className="container__texto">
                                <h1>{item.titulo}</h1>
                                <p>{item.canal}</p>
                                <p>{item.visu} mil visualizações</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Channel;
