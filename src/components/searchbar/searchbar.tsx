
import styles from "./searchbar.module.css";

// icons
import { BsSearch } from "react-icons/bs";

type PropsType = {
    placeholder?: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar(props: PropsType) {

    const { placeholder, value, setValue } = props;

    return (
        <div className={styles.searchbar}>
            <input 
                type="text" 
                placeholder={placeholder ?? '検索'} 
                value={value} 
                onChange={e => setValue(e.target.value)}
            />
            <BsSearch className={styles.icon}/>
        </div>
    );
}