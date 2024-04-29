import Balancer from "react-wrap-balancer";
import TabPlan from "~/app/_components/tabplan";

export default function HomePage() {
  return (
    <main className=" min-w-screen m-2 flex min-h-screen flex-col items-center justify-start space-y-6 rounded-md bg-[#F5F7F2] lg:py-28">
      <div className="container mb-6 flex flex-col items-center gap-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>Save 10x time & effort with us</Balancer>
        </h1>
        <p className="leading-normal sm:text-xl sm:leading-8">
          <Balancer>
            Pay only for upload minutes. Download unlimited videos.
          </Balancer>
        </p>
      </div>
      <div>
        <TabPlan />
        <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex  h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            Backgrounds
          </p>
        </div>
      </div>
    </main>
  );
}
