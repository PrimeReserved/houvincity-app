import Link from "next/link";


export default function ViewAllButton({ href }: any){
    return (
      <div className="flex justify-center mt-10">
        <Link href={href}>
          <button className="py-3 px-[3.5rem] border-[1px] border-primary rounded-md text-xs text-primary">
            View All
          </button>
        </Link>
      </div>
    );
  };