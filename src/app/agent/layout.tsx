import AgentNavbar from "@/components/navbar/AgentNavbar";

export default function AgentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AgentNavbar />
            <main>{children}</main>
        </>
    );
}
