import Balancer from "react-wrap-balancer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-6 bg-[#F5F7F2]  lg:py-28">
      <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>Save 10x time & effort with us</Balancer>
        </h1>
        <p className="leading-normal sm:text-xl sm:leading-8">
          <Balancer>
            Pay only for upload minutes. Download unlimited videos.
          </Balancer>
        </p>
      </div>
    </main>
  );
}
