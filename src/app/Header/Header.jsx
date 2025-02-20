'use client'
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowCircleUp, faBars, faBell, faGlobe, faKeyboard, faMartiniGlass, faMicrophone, faRightFromBracket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "../SidebarContext";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../ThemeContext";

const Header = () => {
    const [userOptions, setUserOptions] = useState(false);
    const { toggleSidebar } = useSidebar();
    const buscaInput = useRef();
    const lupaButton = useRef();
    const { toggleTheme } = useTheme();
    function mostrarBusca() {
        const busca = buscaInput.current;
        busca.style.display = "block"

        const lupa = lupaButton.current;
        lupa.style.background = "var(--background-secondary)";
        lupa.style.border = "1px solid gray";
        lupa.style.borderRadius = "0px 20px 20px 0px";
    }
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 30) {
                header.style.background = "var(--background-primary)";
            } else {
                header.style.background = "none";
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    function toggleUserOptions() {
        setUserOptions(prevState => !prevState);
    }

    const userOptionsList = [
        {
            icon: faGlobe,
            texto: "Conta do google"
        },
        {
            icon: faGlobe,
            texto: "Mudar de conta"
        },
        {
            icon: faRightFromBracket,
            texto: "Sair"
        },
    ]
    return (
        <header className="flex items-center justify-between px-[12px] py-[6px]">
            <div className="flex gap-4">
                <button className="menu px-[13px]" onClick={toggleSidebar}>
                    <FontAwesomeIcon className="text-2xl" icon={faBars} color="white" />
                </button>
                <a href="/">
                    <svg className="youtubeIcon" width="89" height="24" viewBox="0 0 89 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="path1" d="M29.3379 4.28846C28.9878 2.99501 27.9769 1.98462 26.6828 1.63462C24.3548 1 14.9848 1 14.9848 1C14.9848 1 5.61489 1.01923 3.28684 1.65385C1.99276 2.00385 0.981876 3.01424 0.631702 4.30769C-0.0724856 8.44231 -0.345695 14.7423 0.650943 18.7115C1.00112 20.005 2.012 21.0154 3.30608 21.3654C5.63413 22 15.0041 22 15.0041 22C15.0041 22 24.374 22 26.7021 21.3654C27.9961 21.0154 29.007 20.005 29.3572 18.7115C30.0999 14.5712 30.3288 8.275 29.3379 4.28846Z" fill="#FF0000" />
                        <path className="path2" d="M12 16L20 11.5L12 7V16Z" fill="white" />
                        <path d="M31.5845 19V4.45455H34.6598V16.4645H40.8956V19H31.5845ZM49.8711 14.3551V8.09091H52.8967V19H49.9918V17.0185H49.8782C49.632 17.6577 49.2224 18.1714 48.6495 18.5597C48.0813 18.9479 47.3877 19.142 46.5685 19.142C45.8394 19.142 45.1978 18.9763 44.6438 18.6449C44.0898 18.3134 43.6566 17.8423 43.3441 17.2315C43.0363 16.6207 42.8801 15.8892 42.8754 15.0369V8.09091H45.9009V14.4972C45.9057 15.1411 46.0785 15.6501 46.4194 16.0241C46.7603 16.3982 47.2172 16.5852 47.7901 16.5852C48.1547 16.5852 48.4956 16.5024 48.8129 16.3366C49.1301 16.1662 49.3858 15.9152 49.5799 15.5838C49.7788 15.2524 49.8758 14.8428 49.8711 14.3551ZM60.2457 19.2131C59.1283 19.2131 58.1671 18.9763 57.3622 18.5028C56.562 18.0246 55.9465 17.3617 55.5156 16.5142C55.0895 15.6667 54.8764 14.6913 54.8764 13.5881C54.8764 12.4706 55.0919 11.4905 55.5227 10.6477C55.9583 9.80019 56.5762 9.13968 57.3764 8.66619C58.1766 8.18797 59.1283 7.94886 60.2315 7.94886C61.1832 7.94886 62.0166 8.12169 62.7315 8.46733C63.4465 8.81297 64.0123 9.2983 64.429 9.9233C64.8456 10.5483 65.0753 11.2822 65.1179 12.125H62.2628C62.1823 11.5805 61.9692 11.1425 61.6236 10.8111C61.2827 10.4749 60.8352 10.3068 60.2812 10.3068C59.8125 10.3068 59.4029 10.4347 59.0526 10.6903C58.7069 10.9413 58.437 11.3082 58.2429 11.7912C58.0488 12.2741 57.9517 12.8589 57.9517 13.5455C57.9517 14.2415 58.0464 14.8333 58.2358 15.321C58.4299 15.8087 58.7022 16.1804 59.0526 16.4361C59.4029 16.6918 59.8125 16.8196 60.2812 16.8196C60.6269 16.8196 60.937 16.7486 61.2116 16.6065C61.491 16.4645 61.7206 16.2585 61.9006 15.9886C62.0852 15.714 62.206 15.3849 62.2628 15.0014H65.1179C65.0705 15.8348 64.8433 16.5687 64.4361 17.2031C64.0336 17.8329 63.4773 18.3253 62.767 18.6804C62.0568 19.0355 61.2164 19.2131 60.2457 19.2131ZM70.1658 19.206C69.4698 19.206 68.8496 19.0852 68.305 18.8438C67.7605 18.5975 67.3297 18.2353 67.0124 17.7571C66.6999 17.2741 66.5437 16.6728 66.5437 15.9531C66.5437 15.3471 66.6549 14.8381 66.8775 14.4261C67.1 14.0142 67.4031 13.6828 67.7866 13.4318C68.1701 13.1809 68.6057 12.9915 69.0934 12.8636C69.5858 12.7358 70.1019 12.6458 70.6417 12.5938C71.2762 12.5275 71.7875 12.4659 72.1758 12.4091C72.564 12.3475 72.8458 12.2576 73.021 12.1392C73.1961 12.0208 73.2837 11.8456 73.2837 11.6136V11.571C73.2837 11.1212 73.1417 10.7732 72.8576 10.527C72.5782 10.2808 72.1805 10.1577 71.6644 10.1577C71.1199 10.1577 70.6867 10.2784 70.3647 10.5199C70.0427 10.7566 69.8297 11.0549 69.7255 11.4148L66.9272 11.1875C67.0692 10.5246 67.3486 9.9517 67.7653 9.46875C68.1819 8.98106 68.7193 8.60701 69.3775 8.34659C70.0404 8.08144 70.8074 7.94886 71.6786 7.94886C72.2847 7.94886 72.8647 8.01989 73.4187 8.16193C73.9774 8.30398 74.4722 8.52415 74.9031 8.82244C75.3387 9.12074 75.6819 9.50426 75.9329 9.97301C76.1838 10.437 76.3093 10.9934 76.3093 11.642V19H73.44V17.4872H73.3548C73.1796 17.8281 72.9452 18.1288 72.6516 18.3892C72.3581 18.6449 72.0053 18.8461 71.5934 18.9929C71.1815 19.1349 70.7056 19.206 70.1658 19.206ZM71.0323 17.1179C71.4774 17.1179 71.8704 17.0303 72.2113 16.8551C72.5522 16.6752 72.8197 16.4337 73.0138 16.1307C73.208 15.8277 73.305 15.4844 73.305 15.1009V13.9432C73.2103 14.0047 73.0801 14.0616 72.9144 14.1136C72.7534 14.161 72.5711 14.206 72.3675 14.2486C72.1639 14.2865 71.9603 14.322 71.7567 14.3551C71.5531 14.3835 71.3685 14.4096 71.2028 14.4332C70.8477 14.4853 70.5375 14.5682 70.2724 14.6818C70.0072 14.7955 69.8013 14.9493 69.6545 15.1435C69.5077 15.3329 69.4343 15.5696 69.4343 15.8537C69.4343 16.2656 69.5835 16.5805 69.8817 16.7983C70.1848 17.0114 70.5683 17.1179 71.0323 17.1179ZM87.7333 11.2017L84.9634 11.3722C84.9161 11.1354 84.8143 10.9223 84.658 10.733C84.5018 10.5388 84.2958 10.3849 84.0401 10.2713C83.7892 10.1529 83.4885 10.0938 83.1381 10.0938C82.6694 10.0938 82.274 10.1932 81.9521 10.392C81.6301 10.5862 81.4691 10.8466 81.4691 11.1733C81.4691 11.4337 81.5733 11.6539 81.7816 11.8338C81.9899 12.0137 82.3474 12.1581 82.854 12.267L84.8285 12.6648C85.8891 12.8826 86.6798 13.233 87.2006 13.7159C87.7215 14.1989 87.9819 14.8333 87.9819 15.6193C87.9819 16.3343 87.7712 16.9616 87.3498 17.5014C86.9331 18.0412 86.3602 18.4626 85.631 18.7656C84.9066 19.0639 84.0709 19.2131 83.1239 19.2131C81.6798 19.2131 80.5292 18.9124 79.6722 18.3111C78.82 17.705 78.3204 16.8812 78.1737 15.8395L81.1495 15.6832C81.2395 16.1236 81.4573 16.4598 81.8029 16.6918C82.1486 16.919 82.5913 17.0327 83.131 17.0327C83.6613 17.0327 84.0875 16.9309 84.4094 16.7273C84.7362 16.5189 84.9019 16.2514 84.9066 15.9247C84.9019 15.6501 84.7859 15.4252 84.5586 15.25C84.3313 15.0701 83.9809 14.9328 83.5075 14.8381L81.6183 14.4616C80.5529 14.2486 79.7598 13.8793 79.239 13.3537C78.7229 12.8281 78.4648 12.1581 78.4648 11.3438C78.4648 10.643 78.6542 10.0393 79.033 9.53267C79.4165 9.02604 79.954 8.63542 80.6452 8.3608C81.3413 8.08617 82.1557 7.94886 83.0884 7.94886C84.4663 7.94886 85.5505 8.24006 86.3413 8.82244C87.1367 9.40483 87.6007 10.1979 87.7333 11.2017Z" fill="var(--color-primary)" />
                    </svg>
                </a>
            </div>
            <div className="search flex items-center relative">
                <input ref={buscaInput} className="px-[12px]" type="text" placeholder="Pesquisar" />
                <button ref={lupaButton} className="lupa px-[12px]" onClick={mostrarBusca}>
                    <FontAwesomeIcon icon={faSearch} width={32} height={32} color="white" />
                </button>
                <button className="py-2 px-1 ml-4 rounded-full bg-secondary">
                    <FontAwesomeIcon icon={faMicrophone} width={32} height={32} color="white" />
                </button>

                <button className="keyboard absolute right-[128px]">
                    <FontAwesomeIcon icon={faKeyboard} width={32} height={32} color="white" />
                </button>
            </div>
            <div className="options flex items-center gap-2">
                <button>
                    <FontAwesomeIcon icon={faArrowCircleUp} width={32} height={32} color="white" />
                </button>
                <button>
                    <FontAwesomeIcon icon={faBell} width={32} height={32} color="white" />
                </button>
                <img
                    className="rounded-full cursor-pointer"
                    src="https://avatars.githubusercontent.com/u/170823502?v=4"
                    width={38}
                    height={38}
                    onClick={toggleUserOptions}
                />
                <div className={`user__options ${userOptions ? "block" : "hidden"} shadow-2xl`}>
                    <div className="border-bottom flex items-start p-4 gap-3">
                        <img
                            className="rounded-full cursor-pointer"
                            src="https://avatars.githubusercontent.com/u/170823502?v=4"
                            width={38}
                            height={38}
                        />
                        <div>
                            <p className="text-xl">Lucas LNS</p>
                            <p>@lucasns06</p>
                            <a href="" className="text-sky-500">Acessar seu canal</a>
                        </div>
                    </div>
                    <div className="border-bottom">
                        {userOptionsList.map((item, index) => (
                            <button key={index} className="flex flex-col items-start">
                                <span>
                                    <FontAwesomeIcon icon={item.icon} width={32} height={32} color="white" />
                                    {item.texto} </span>
                            </button>
                        ))}
                    </div>
                    <div>
                        <button onClick={toggleTheme}>
                            Mudar Tema
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-center p-8">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_black" rel="noopener noreferrer">
                            <button>
                                <p className="rainbow" >
                                    EASTER EGG!!!!
                                </p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
