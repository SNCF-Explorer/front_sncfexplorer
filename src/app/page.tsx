"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
        if (!session) {
            router.push("/auth/signin");
        } else if (session.user.role === "admin") {
            router.push("/admin");
        } else if (session.user.role === "agent") {
            router.push("/agent");
        } else {
            router.push("/user");
        }
    }, [session, status, router]);

    return <p>Redirection en cours...</p>;
}
