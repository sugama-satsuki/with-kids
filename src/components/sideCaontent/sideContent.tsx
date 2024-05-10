"use client";

import { useState } from "react";

// styles
import styles from "./sideContent.module.css";

// icons

// components
import SearchBar from "../searchbar/searchbar";


export default function SideContent() {

    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <div className={ styles.sideContents }>
            <div className={ styles.inner }>
                <SearchBar value={searchValue} setValue={setSearchValue} />
                <div className={ styles.content }></div>
            </div>
        </div>
    );
}