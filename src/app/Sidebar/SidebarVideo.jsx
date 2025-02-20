'use client'
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArchive, faArrowDown, faBars, faBell, faBible, faClock, faEye, faFire, faFlag, faGamepad, faGear, faHouse, faMusic, faNewspaper, faQuestion, faReply, faThumbsUp, faTrophy, faTv, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from '../SidebarContext';
import Link from 'next/link';
import { useVideo } from '../VideoContext';

const SidebarVideo = () => {
    const { sidebarIsOpen, toggleSidebar } = useSidebar();

    const menuItems = [
        { icon: faHouse, label: 'Inicio', href: '/' },
        { icon: faBell, label: 'Shorts' },
        { icon: faArchive, label: 'Inscrições' },
        { icon: faUser, label: 'Você' }
    ];
    const userItems = [
        { icon: faReply, label: 'Histórico' },
        { icon: faBell, label: 'Playlists' },
        { icon: faTv, label: 'Seus vídeos' },
        { icon: faClock, label: 'Assistir mais tarde' },
        { icon: faThumbsUp, label: 'Videos com "Gostei"' }
    ];

    const { subs } = useVideo();

    const exploreItems = [
        { icon: faFire, label: 'Em Alta' },
        { icon: faArchive, label: 'Shopping' },
        { icon: faMusic, label: 'Música' },
        { icon: faBible, label: 'Filmes' },
        { icon: faEye, label: 'Ao vivo' },
        { icon: faGamepad, label: 'Jogos' },
        { icon: faNewspaper, label: 'Noticias' },
        { icon: faTrophy, label: 'Esportes' }
    ];

    const options = [
        { icon: faGear, label: 'Configurações' },
        { icon: faFlag, label: 'Histórico de denúncias' },
        { icon: faQuestion, label: 'Ajuda' },
        { icon: faBible, label: 'Enviar Feedback' }
    ];

    return (
        <div className={`sidebar sidebarVideo ${sidebarIsOpen ? "sidebarOpen" : ""}`}>
            <div className={`hidden px-6 pt-3 pb-[0] ${sidebarIsOpen ? 'openSubs' : ''}`}>
                <button className="menu " onClick={toggleSidebar}>
                    <FontAwesomeIcon className="text-2xl" icon={faBars} color="white" />
                </button>
            </div>
            <div className={`subs ${sidebarIsOpen ? 'openSubs border-t-0' : ''}`}>
                {menuItems.map((item, index) => (
                    <a href={item.href}
                        key={index}
                        className={`closedSpan ${sidebarIsOpen ? 'openSpan' : ''}`}
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            width={32}
                            height={32}
                            color="white"
                        />
                        <p className={sidebarIsOpen ? 'text-lg' : 'text-xs'}>
                            {item.label}
                        </p>
                    </a>

                ))}
            </div>
            <div className={`subs ${sidebarIsOpen ? 'openSubs' : ''}`}>
                {userItems.map((item, index) => (
                    <span
                        key={index}
                        className={`closedSpan ${sidebarIsOpen ? 'openSpan' : ''}`}
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            width={32}
                            height={32}
                            color="white"
                        />
                        <p className={sidebarIsOpen ? 'text-lg' : 'text-xs'}>
                            {item.label}
                        </p>
                    </span>

                ))}
            </div>
            <div className={`subs ${sidebarIsOpen ? 'openSubs' : ''}`}>
                <h1 className='p-[12px] font-bold'>Inscrições</h1>
                {subs.map((item) => (
                    <Link href={`/Channel?id=${item.id}`}
                        key={item.id}
                        className={`closedSpan ${sidebarIsOpen ? 'openSpan' : ''}`}
                    >
                        <img
                            className="rounded-full"
                            src={item.url}
                            width={32}
                            height={32}
                        />
                        <p>
                            {item.label}
                        </p>
                    </Link>
                ))}
                <span className='flex items-center'>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        width={32}
                        height={32}
                        color="white"
                    />
                    <p className='p-[12px]'>Mostrar mais</p>
                </span>
            </div>

            <div className={`subs ${sidebarIsOpen ? 'openSubs' : ''}`}>
                <h1 className='p-[12px] font-bold'>Explorar</h1>
                {exploreItems.map((item, index) => (
                    <span
                        key={index}
                        className={`closedSpan ${sidebarIsOpen ? 'openSpan' : ''}`}
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            width={32}
                            height={32}
                            color="white"
                        />
                        <p>
                            {item.label}
                        </p>
                    </span>
                ))}
            </div>
            <div className={`subs ${sidebarIsOpen ? 'openSubs' : ''}`}>
                <h1 className='p-[12px] font-bold'>Mais do youtube</h1>
                {options.map((item, index) => (
                    <span
                        key={index}
                        className={`closedSpan ${sidebarIsOpen ? 'openSpan' : ''}`}
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            width={32}
                            height={32}
                            color="white"
                        />
                        <p>
                            {item.label}
                        </p>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SidebarVideo;