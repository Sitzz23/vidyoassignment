import Balancer from "react-wrap-balancer";
import TabPlan from "./Tabs/tabplan";

const Landing = () => {
  return (
    <div className="z-20 m-2 mx-auto flex min-h-screen w-[75%] flex-col items-center justify-start space-y-6 lg:py-28">
      <div className="container mb-2 flex flex-col items-center gap-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>Save 10x time & effort with us</Balancer>
        </h1>
        <p className="leading-normal text-secondary-foreground sm:text-xl sm:leading-8">
          <Balancer>
            Pay only for upload minutes. Download unlimited videos.
          </Balancer>
        </p>
      </div>
      <TabPlan />
    </div>
  );
};

export default Landing;
