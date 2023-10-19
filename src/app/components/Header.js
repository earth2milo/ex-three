"use client";

import styles from "./WeatherCard.module.css";
import Link from "next/link"
const Header = () => (
    <header>
        <nav>
            <Link href="/Tokyo">Tokyo</Link>
            <Link href="/Boston">Boston</Link>
            <Link href="/Beijing">Beijing</Link>
            <Link href="/Dallas">Dallas</Link>
        </nav>
    </header>
)

export default Header;