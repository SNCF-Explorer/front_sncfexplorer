"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AdminNavbar() {
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
                    AdminBoard
                </span>
            </div>

            {/* Liens stylisés */}
            <ul className="flex space-x-5 ml-12">
                <li>
                    <Link href="/admin">
                        <div className="bg-gradient-to-r from-red-500 via-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Accueil
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/profile">
                        <div className="bg-gradient-to-r from-red-500 via-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Profil
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/map">
                        <div className="bg-gradient-to-r from-red-500 via-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Map
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/panel">
                        <div className="bg-gradient-to-r from-red-500 via-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Panel Gestion
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/support">
                        <div className="bg-gradient-to-r from-red-500 via-purple-600 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Support
                        </div>
                    </Link>
                </li>
            </ul>

            {/* Déconnexion */}
            <button
                onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-xl shadow-md transition mr-4"
            >
                Déconnexion
            </button>
        </nav>
    );
}
