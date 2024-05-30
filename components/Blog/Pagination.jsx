export default function Pagination() {
  return (
    <div className="join">
      <button className="join-item btn hover:bg-primary hover:text-white active">1</button>
      <button className="join-item btn hover:bg-primary hover:text-white">2</button>
      <button className="join-item btn hover:bg-primary hover:text-white">3</button>
      <button className="join-item btn btn-disabled text-2xl">...</button>
      <button className="join-item btn  hover:bg-primary hover:text-white">Next</button>
    </div>
  );
}
