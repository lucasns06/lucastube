'use client'
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArchive, faArrowDown, faBell, faBible, faEye, faFire, faFlag, faGamepad, faGear, faHouse, faMusic, faNewspaper, faQuestion, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from '../SidebarContext';

const Sidebar = () => {
    const { sidebarIsOpen } = useSidebar();

    const menuItems = [
        { icon: faHouse, label: 'Inicio' },
        { icon: faBell, label: 'Shorts' },
        { icon: faArchive, label: 'inscrições' },
        { icon: faUser, label: 'Você' }
    ];
    const subs = [
        {
            url: "https://yt3.googleusercontent.com/m6s3UkM_8f4233Ayxq2NEyeJNmSMjZen3aPVhAKRyigEKi-Gw_sUMXysRA_WLEyuwq1Pw1fOVg=s160-c-k-c0x00ffffff-no-rj",
            label: "Gaules"
        },
        {
            url: "https://yt3.googleusercontent.com/dwDfPCUX-TodIOokajuERnwzNALqfeW0zc7dZTQWzOLV8nfDIePXBhDjBpsB_VmwfnIRS1vTRw=s160-c-k-c0x00ffffff-no-rj",
            label: "Nak"
        },
        {
            url: "https://yt3.googleusercontent.com/j8tHcvLgVpYGOo9ZcEGXInqRTIYNF2O__RLvowRanAhP6NcKeKdOob5aco_iWiS5yW-KqRKOiUY=s160-c-k-c0x00ffffff-no-rj",
            label: "30PRAUM"
        },
        {
            url: "https://yt3.googleusercontent.com/VHLV1lDgJjdGmcSWVinGn-_wgVHRYOzGaRyI4js3OHyf5AZ0qBA5JZkFm6UQQgwGyEYzJHtcVnQ=s160-c-k-c0x00ffffff-no-rj",
            label: "jogandofoddaci"
        },
        {
            url: "https://yt3.googleusercontent.com/rq_ds2CbR-0X70zLDloTmgL9t_SZatRtb8t4TB11Cb51rG-TRGlKdAOF8DkwiTrB_A5SKTLb=s160-c-k-c0x00ffffff-no-rj",
            label: "Andrezitos"
        },
        {
            url: "https://yt3.googleusercontent.com/Fipf9iG1DOTVtPBTSJNKuxYEm5XISCayUcr1MgLCg5ffW-n-op4ZHGqLpOlerbDri2_AZVOH-w=s160-c-k-c0x00ffffff-no-rj",
            label: "SolaLIVE"
        },
        {
            url: "https://yt3.googleusercontent.com/ytc/AIdro_kLR5Wl0-838WZwpNJ9P90bpbAhHA5iZePEX1UDG1SlbL8=s160-c-k-c0x00ffffff-no-rj",
            label: "Stackz / Gustavo Pinheiro"
        },
        {
            url: "https://yt3.googleusercontent.com/VHLV1lDgJjdGmcSWVinGn-_wgVHRYOzGaRyI4js3OHyf5AZ0qBA5JZkFm6UQQgwGyEYzJHtcVnQ=s160-c-k-c0x00ffffff-no-rj",
            label: "jogandofoddaci"
        },
    ]

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
        <div className="sidebar">
            <div className="container">
                {menuItems.map((item, index) => (
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
                <h1 className='p-[12] text-lg font-bold'>Inscrições</h1>
                {subs.map((item, index) => (
                    <span
                        key={index}
                        className={`closedSpan ${sidebarIsOpen ? 'openSpan' : ''}`}
                    >
                        <img
                            className="rounded-full mr-4"
                            src={item.url}
                            width={32}
                            height={32}
                        />
                        <p className={sidebarIsOpen ? 'text-lg' : 'text-xs'}>
                            {item.label}
                        </p>
                    </span>
                ))}
                <span className='flex items-center'>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        width={32}
                        height={32}
                        color="white"
                    />
                    <p className='p-[12] text-lg '>Mostrar mais</p>
                </span>
            </div>

            <div className={`subs ${sidebarIsOpen ? 'openSubs' : ''}`}>
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
                        <p className={sidebarIsOpen ? 'text-lg' : 'text-xs'}>
                            {item.label}
                        </p>
                    </span>
                ))}
            </div>
            <div className={`subs ${sidebarIsOpen ? 'openSubs' : ''}`}>
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
                        <p className={sidebarIsOpen ? 'text-lg' : 'text-xs'}>
                            {item.label}
                        </p>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;