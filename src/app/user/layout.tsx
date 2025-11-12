import UserNavbar from "@/components/navbar/UserNavbar";

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <UserNavbar />
            <main>{children}</main>
        </>
    );
}
