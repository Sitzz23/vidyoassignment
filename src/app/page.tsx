import Landing from "./_components/landing";

export default function HomePage() {
  return (
    <main>
      <div className="min-w-screen relative m-2 flex h-[50rem] items-center justify-center bg-[#F5F7F2] bg-dot-white">
        <Landing />
      </div>
    </main>
  );
}

//  <div className="relative flex h-[50rem] w-full  items-center justify-center bg-[#F5F7F2] bg-dot-white">
//    {/* Radial gradient for the container to give a faded look */}
//    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F5F7F2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:bg-black"></div>
//  </div>;
