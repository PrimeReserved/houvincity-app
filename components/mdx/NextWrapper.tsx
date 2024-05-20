
export default function NextWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-end justify-end md:mt-10">
            { children }
        </div>
    );
  }
  