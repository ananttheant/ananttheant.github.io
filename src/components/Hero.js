import ant from "./ant.png";

const Hero = () => (
  <div className="p-16 my-16 container mx-auto">
    <div className="text-4xl font-light mb-16">Hello!</div>
    <div className="flex flex-col lg:flex-row-reverse align-start justify-between">
      <div className="mb-16">
        <img src={ant} alt="Anant Sharma" className="rounded-full w-56" />
      </div>
      <div>
        <div className="text-4xl font-light mb-8">
          I'm <span className="font-bold">Anant Sharma</span>, a{" "}
          <span className="font-semibold">game developer</span> <br /> that's on
          a pursuit to feed it's curiosity. <br /> I love to make games for a
          living!
        </div>
        <div className="text-2xl font-light">
          Got an interesting project? Send me a message at{" "}
          <a
            href="mailto:ananttheant4444@gmail.com"
            className="underline underline-offset-1 decoration-blue-500"
          >
            @ gmail
          </a>
          .
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
