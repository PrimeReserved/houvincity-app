
export default function SubTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="py-5 font-bold text-customPrimary">
            { children }
        </h2>
    );
}