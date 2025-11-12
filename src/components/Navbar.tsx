"use client";

import AdminNavbar from "./navbar/AdminNavbar";
import AgentNavbar from "./navbar/AgentNavbar";
import UserNavbar from "./navbar/UserNavbar";
import { useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session, status } = useSession();

    if (status === "loading") return null; // ou loader

    const role = session?.user?.role;

    switch (role) {
        case "admin":
            return <AdminNavbar />;
        case "agent":
            return <AgentNavbar />;
        case "user":
            return <UserNavbar />;
        default:
            return null; // ou une navbar publique
    }
}
