import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section className="flex bg-gray-300 dark:bg-gray-800 justify-center  items-center justify-items-center h-[70vh]">
      <div className="space-y-6">
        <p className="text-center text-lg bg-primary/50 md:w-[400px]  rounded-full  px-2 mx-auto">
          Hassle Free Software Development Service
        </p>
        <h1 className="text-4xl text-center font-semibold ">
          Your Idea Our Service == Your Desired Software
        </h1>
        <p></p>
        <div className="text-center">
          <Button className="dark:text-white">Book An Appointment</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
