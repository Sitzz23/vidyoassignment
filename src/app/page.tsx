import Landing from "./_components/landing";

export default function HomePage() {
  return (
    <main>
      <div className="min-w-screen relative mx-2 mb-2 flex min-h-screen items-start justify-start rounded-lg bg-[#F5F7F2] bg-dot-white">
        <div className="fixed bottom-10 left-8 z-[999]">
          <span className=" rounded-full border-[10px] border-zinc-900 bg-white px-[5px]  text-sm">
            ?
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 top-0 flex h-1/6 items-center justify-start rounded-lg bg-[#F5F7F2] [mask-image:linear-gradient(to_top,transparent_20%,white)]"></div>
        <Landing />
      </div>
    </main>
  );
}

//  <div className="relative flex h-[50rem] w-full  items-center justify-center bg-[#F5F7F2] bg-dot-white">
//    {/* Radial gradient for the container to give a faded look */}
//    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F5F7F2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black"></div>
//  </div>;
