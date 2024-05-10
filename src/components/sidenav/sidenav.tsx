
import styles from "./sidenav.module.css";

// icons
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsSearchHeart } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";


export default function SideNav() {
    return (
        <div className={ styles.sidenav }>
            {/* メニューアイテム */}
            <nav>
                {/* メニューの位置（左右）を切り替える */}
                <div className={ styles.item }>
                    <BsArrowLeftCircle />
                </div>
                {/* メニュー */}
                <div className={ styles.menuWrapper }>
                    <div className={ styles.item }>
                        <BsSearchHeart />
                    </div>
                    <div className={ styles.item }>
                        <BsFillPersonFill />
                    </div>
                </div>
            </nav>
            {/*  */}

        </div>
    );
}