'use client'
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowCircleUp, faBars, faBell, faMartiniGlass, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "../SidebarContext";

const Header = () => {
    const { toggleSidebar } = useSidebar();
    return (
        <header className="flex items-center justify-between px-[12] py-[4]">
            <div className="flex gap-4">
                <button className="menu px-[13]" onClick={toggleSidebar}>
                    <FontAwesomeIcon className="text-2xl" icon={faBars} color="white" />
                </button>
                <a href="/">
                    <svg width="92" height="48" viewBox="0 0 800 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M249.827 55.0164C246.845 43.9967 238.237 35.3886 227.217 32.4067C207.393 27 127.603 27 127.603 27C127.603 27 47.8135 27.1638 27.989 32.5705C16.9693 35.5524 8.36115 44.1606 5.37925 55.1803C-0.61725 90.4056 -2.94376 144.079 5.54309 177.896C8.52499 188.915 17.1331 197.523 28.1528 200.505C47.9773 205.912 127.767 205.912 127.767 205.912C127.767 205.912 207.556 205.912 227.381 200.505C238.401 197.523 247.009 188.915 249.991 177.896C256.315 142.621 258.264 88.9802 249.827 55.0164Z" fill="#FF0000" />
                        <path d="M102.208 154.794L168.399 116.456L102.208 78.1177V154.794Z" fill="white" />
                        <path d="M267.511 186V46.3636H297.034V161.659H356.898V186H267.511ZM443.062 141.409V81.2727H472.108V186H444.222V166.977H443.131C440.767 173.114 436.835 178.045 431.335 181.773C425.881 185.5 419.222 187.364 411.358 187.364C404.358 187.364 398.199 185.773 392.881 182.591C387.563 179.409 383.403 174.886 380.403 169.023C377.449 163.159 375.949 156.136 375.903 147.955V81.2727H404.949V142.773C404.994 148.955 406.653 153.841 409.926 157.432C413.199 161.023 417.585 162.818 423.085 162.818C426.585 162.818 429.858 162.023 432.903 160.432C435.949 158.795 438.403 156.386 440.267 153.205C442.176 150.023 443.108 146.091 443.062 141.409ZM542.659 188.045C531.932 188.045 522.705 185.773 514.977 181.227C507.295 176.636 501.386 170.273 497.25 162.136C493.159 154 491.114 144.636 491.114 134.045C491.114 123.318 493.182 113.909 497.318 105.818C501.5 97.6818 507.432 91.3409 515.114 86.7954C522.795 82.2045 531.932 79.9091 542.523 79.9091C551.659 79.9091 559.659 81.5682 566.523 84.8864C573.386 88.2045 578.818 92.8636 582.818 98.8636C586.818 104.864 589.023 111.909 589.432 120H562.023C561.25 114.773 559.205 110.568 555.886 107.386C552.614 104.159 548.318 102.545 543 102.545C538.5 102.545 534.568 103.773 531.205 106.227C527.886 108.636 525.295 112.159 523.432 116.795C521.568 121.432 520.636 127.045 520.636 133.636C520.636 140.318 521.545 146 523.364 150.682C525.227 155.364 527.841 158.932 531.205 161.386C534.568 163.841 538.5 165.068 543 165.068C546.318 165.068 549.295 164.386 551.932 163.023C554.614 161.659 556.818 159.682 558.545 157.091C560.318 154.455 561.477 151.295 562.023 147.614H589.432C588.977 155.614 586.795 162.659 582.886 168.75C579.023 174.795 573.682 179.523 566.864 182.932C560.045 186.341 551.977 188.045 542.659 188.045ZM637.892 187.977C631.21 187.977 625.256 186.818 620.028 184.5C614.801 182.136 610.665 178.659 607.619 174.068C604.619 169.432 603.119 163.659 603.119 156.75C603.119 150.932 604.188 146.045 606.324 142.091C608.46 138.136 611.369 134.955 615.051 132.545C618.733 130.136 622.915 128.318 627.597 127.091C632.324 125.864 637.278 125 642.46 124.5C648.551 123.864 653.46 123.273 657.188 122.727C660.915 122.136 663.619 121.273 665.301 120.136C666.983 119 667.824 117.318 667.824 115.091V114.682C667.824 110.364 666.46 107.023 663.733 104.659C661.051 102.295 657.233 101.114 652.278 101.114C647.051 101.114 642.892 102.273 639.801 104.591C636.71 106.864 634.665 109.727 633.665 113.182L606.801 111C608.165 104.636 610.847 99.1364 614.847 94.5C618.847 89.8182 624.006 86.2273 630.324 83.7273C636.688 81.1818 644.051 79.9091 652.415 79.9091C658.233 79.9091 663.801 80.5909 669.119 81.9545C674.483 83.3182 679.233 85.4318 683.369 88.2954C687.551 91.1591 690.847 94.8409 693.256 99.3409C695.665 103.795 696.869 109.136 696.869 115.364V186H669.324V171.477H668.506C666.824 174.75 664.574 177.636 661.756 180.136C658.938 182.591 655.551 184.523 651.597 185.932C647.642 187.295 643.074 187.977 637.892 187.977ZM646.21 167.932C650.483 167.932 654.256 167.091 657.528 165.409C660.801 163.682 663.369 161.364 665.233 158.455C667.097 155.545 668.028 152.25 668.028 148.568V137.455C667.119 138.045 665.869 138.591 664.278 139.091C662.733 139.545 660.983 139.977 659.028 140.386C657.074 140.75 655.119 141.091 653.165 141.409C651.21 141.682 649.438 141.932 647.847 142.159C644.438 142.659 641.46 143.455 638.915 144.545C636.369 145.636 634.392 147.114 632.983 148.977C631.574 150.795 630.869 153.068 630.869 155.795C630.869 159.75 632.301 162.773 635.165 164.864C638.074 166.909 641.756 167.932 646.21 167.932ZM806.54 111.136L779.949 112.773C779.494 110.5 778.517 108.455 777.017 106.636C775.517 104.773 773.54 103.295 771.085 102.205C768.676 101.068 765.79 100.5 762.426 100.5C757.926 100.5 754.131 101.455 751.04 103.364C747.949 105.227 746.403 107.727 746.403 110.864C746.403 113.364 747.403 115.477 749.403 117.205C751.403 118.932 754.835 120.318 759.699 121.364L778.653 125.182C788.835 127.273 796.426 130.636 801.426 135.273C806.426 139.909 808.926 146 808.926 153.545C808.926 160.409 806.903 166.432 802.858 171.614C798.858 176.795 793.358 180.841 786.358 183.75C779.403 186.614 771.381 188.045 762.29 188.045C748.426 188.045 737.381 185.159 729.153 179.386C720.972 173.568 716.176 165.659 714.767 155.659L743.335 154.159C744.199 158.386 746.29 161.614 749.608 163.841C752.926 166.023 757.176 167.114 762.358 167.114C767.449 167.114 771.54 166.136 774.631 164.182C777.767 162.182 779.358 159.614 779.403 156.477C779.358 153.841 778.244 151.682 776.062 150C773.881 148.273 770.517 146.955 765.972 146.045L747.835 142.432C737.608 140.386 729.994 136.841 724.994 131.795C720.04 126.75 717.562 120.318 717.562 112.5C717.562 105.773 719.381 99.9773 723.017 95.1136C726.699 90.25 731.858 86.5 738.494 83.8636C745.176 81.2273 752.994 79.9091 761.949 79.9091C775.176 79.9091 785.585 82.7045 793.176 88.2954C800.813 93.8864 805.267 101.5 806.54 111.136ZM808.193 70.7045V46.3636H922.875V70.7045H880.125V186H850.943V70.7045H808.193ZM994.125 141.409V81.2727H1023.17V186H995.284V166.977H994.193C991.83 173.114 987.898 178.045 982.398 181.773C976.943 185.5 970.284 187.364 962.42 187.364C955.42 187.364 949.261 185.773 943.943 182.591C938.625 179.409 934.466 174.886 931.466 169.023C928.511 163.159 927.011 156.136 926.966 147.955V81.2727H956.011V142.773C956.057 148.955 957.716 153.841 960.989 157.432C964.261 161.023 968.648 162.818 974.148 162.818C977.648 162.818 980.92 162.023 983.966 160.432C987.011 158.795 989.466 156.386 991.33 153.205C993.239 150.023 994.17 146.091 994.125 141.409ZM1046.95 186V46.3636H1075.99V98.8636H1076.88C1078.15 96.0455 1079.99 93.1818 1082.4 90.2727C1084.86 87.3182 1088.04 84.8636 1091.95 82.9091C1095.9 80.9091 1100.81 79.9091 1106.68 79.9091C1114.31 79.9091 1121.36 81.9091 1127.81 85.9091C1134.27 89.8636 1139.43 95.8409 1143.29 103.841C1147.15 111.795 1149.09 121.773 1149.09 133.773C1149.09 145.455 1147.2 155.318 1143.43 163.364C1139.7 171.364 1134.61 177.432 1128.15 181.568C1121.74 185.659 1114.56 187.705 1106.61 187.705C1100.97 187.705 1096.18 186.773 1092.22 184.909C1088.31 183.045 1085.11 180.705 1082.61 177.886C1080.11 175.023 1078.2 172.136 1076.88 169.227H1075.59V186H1046.95ZM1075.38 133.636C1075.38 139.864 1076.24 145.295 1077.97 149.932C1079.7 154.568 1082.2 158.182 1085.47 160.773C1088.74 163.318 1092.72 164.591 1097.4 164.591C1102.13 164.591 1106.13 163.295 1109.4 160.705C1112.68 158.068 1115.15 154.432 1116.84 149.795C1118.56 145.114 1119.43 139.727 1119.43 133.636C1119.43 127.591 1118.59 122.273 1116.9 117.682C1115.22 113.091 1112.74 109.5 1109.47 106.909C1106.2 104.318 1102.18 103.023 1097.4 103.023C1092.68 103.023 1088.68 104.273 1085.4 106.773C1082.18 109.273 1079.7 112.818 1077.97 117.409C1076.24 122 1075.38 127.409 1075.38 133.636ZM1216.19 188.045C1205.42 188.045 1196.15 185.864 1188.38 181.5C1180.65 177.091 1174.69 170.864 1170.51 162.818C1166.33 154.727 1164.24 145.159 1164.24 134.114C1164.24 123.341 1166.33 113.886 1170.51 105.75C1174.69 97.6136 1180.58 91.2727 1188.17 86.7273C1195.81 82.1818 1204.76 79.9091 1215.03 79.9091C1221.94 79.9091 1228.38 81.0227 1234.33 83.25C1240.33 85.4318 1245.56 88.7273 1250.01 93.1364C1254.51 97.5455 1258.01 103.091 1260.51 109.773C1263.01 116.409 1264.26 124.182 1264.26 133.091V141.068H1175.83V123.068H1236.92C1236.92 118.886 1236.01 115.182 1234.19 111.955C1232.38 108.727 1229.85 106.205 1226.62 104.386C1223.44 102.523 1219.74 101.591 1215.51 101.591C1211.1 101.591 1207.19 102.614 1203.78 104.659C1200.42 106.659 1197.78 109.364 1195.88 112.773C1193.97 116.136 1192.99 119.886 1192.94 124.023V141.136C1192.94 146.318 1193.9 150.795 1195.81 154.568C1197.76 158.341 1200.51 161.25 1204.06 163.295C1207.6 165.341 1211.81 166.364 1216.67 166.364C1219.9 166.364 1222.85 165.909 1225.53 165C1228.22 164.091 1230.51 162.727 1232.42 160.909C1234.33 159.091 1235.78 156.864 1236.78 154.227L1263.65 156C1262.28 162.455 1259.49 168.091 1255.26 172.909C1251.08 177.682 1245.67 181.409 1239.03 184.091C1232.44 186.727 1224.83 188.045 1216.19 188.045Z" fill="white" />
                    </svg>

                </a>
            </div>
            <div className="search flex items-center ">
                <input className="px-[12]" type="text" placeholder="Pesquisar" />
                <button className="lupa px-[12]">
                    <FontAwesomeIcon icon={faSearch} width={32} height={32} color="white" />
                </button>
            </div>
            <div className="options flex items-center gap-2">
                <span>
                    <FontAwesomeIcon icon={faArrowCircleUp} width={32} height={32} color="white" />
                </span>
                <span>
                    <FontAwesomeIcon icon={faBell} width={32} height={32} color="white" />
                </span>
                <img
                    className="rounded-full"
                    src="https://avatars.githubusercontent.com/u/170823502?v=4"
                    width={32}
                    height={32}
                />
            </div>
        </header>
    );
};
export default Header;
