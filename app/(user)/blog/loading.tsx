export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 flex justify-center items-center">
      <div className="flex justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
}
