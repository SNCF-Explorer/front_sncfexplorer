"use client";

import { signIn, getSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(""); // reset erreur à chaque submit

        const formData = new FormData(e.currentTarget);

        const res = await signIn("credentials", {
            redirect: false,
            username: formData.get("username") as string,
            password: formData.get("password") as string,
        });

        if (res?.error) {
            setError("Nom d'utilisateur ou mot de passe incorrect");
            return;
        }

        // Connexion réussie => récupère session pour lire le rôle
        const session = await getSession();
        if (!session?.user?.role) {
            setError("Impossible de récupérer les informations utilisateur");
            return;
        }   

        // Redirection selon rôle
        switch (session.user.role) {
            case "admin":
                router.push("/admin");
                break;
            case "agent":
                router.push("/agent");
                break;
            case "user":
                router.push("/user");
                break;
            default:
                router.push("/"); // fallback
        }
    }

    return (
        <main className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md font-sans">
            <h1 className="text-2xl mb-6 text-center">Se connecter</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block mb-1 font-medium">
                        Nom d'utilisateur
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-1 font-medium">
                        Mot de passe
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Connexion
                </button>

                {error && (
                    <p className="text-red-600 mt-2 text-center">{error}</p>
                )}
            </form>
        </main>
    );
}
