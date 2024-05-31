
export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="py-5 font-bold text-4xl text-customPrimary">
            { children }
        </h2>
    );
}