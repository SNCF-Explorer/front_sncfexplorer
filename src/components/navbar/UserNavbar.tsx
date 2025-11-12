"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function UserNavbar() {
    return (
        <nav
            className="p-4 flex items-center justify-between shadow-md"
        >
            {/* Logo à gauche */}
            <div className="ml-4 flex items-center flex-shrink-0">
                <img
                    src="/local/logo.png"
                    alt="Logo"
                    className="h-10 w-20 mr-3"
                />
                <span className="text-white font-bold text-xl select-none">
                    JspFrr
                </span>
            </div>

            {/* Liens centrés avec fond dégradé */}
            <ul className="flex space-x-6 ml-12">
                <li>
                    <Link href="/user">
                        <div className="bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Accueil
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/user/profile">
                        <div className="bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Profil
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/user/support">
                        <div className="bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Support
                        </div>
                    </Link>
                </li>
            </ul>

            {/* Bouton déconnexion à droite */}
            <button
                onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-xl shadow-md transition mr-4"
            >
                Déconnexion
            </button>
        </nav>
    );
}
