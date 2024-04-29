import Balancer from "react-wrap-balancer";
import TabPlan from "~/app/_components/tabplan";

export default function HomePage() {
  return (
    <main className=" min-w-screen m-2 flex min-h-screen flex-col items-center justify-start space-y-6 rounded-md bg-[#F5F7F2] lg:py-28">
      <div className="container flex flex-col items-center gap-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>Save 10x time & effort with us</Balancer>
        </h1>
        <p className="leading-normal sm:text-xl sm:leading-8">
          <Balancer>
            Pay only for upload minutes. Download unlimited videos.
          </Balancer>
        </p>
      </div>
      <TabPlan />
    </main>
  );
}
