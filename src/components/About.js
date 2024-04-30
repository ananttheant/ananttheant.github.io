import Section from "./Section";

const About = () => (
  <Section heading="background" icon="potion">
    <div className="font-light">
      <div className="mb-4">        
        I'm a <span className="font-bold">game developer</span>, currently based in <span className="font-bold">Lisbon, Portugal</span>.
        I've worked with many studios on different aspects of game development with people from various backgrounds both cultural and professional.
      </div>
      <div className="mb-4">
        On this pursuit to feed my curiosity, I've enjoyed my time with <span className="font-bold">User Interface</span>,
        complex <span className="font-bold">animation</span> state machines, <span className="font-bold">gameplay</span>,
        <span className="font-bold">multiplayer</span> experiences, <span className="font-bold">programming patterns</span> and much more.
      </div>
      <div className="mb-4">
        Apart from game dev, I also have interest in archery, gaming, <span className="font-bold">VR</span> and <span className="font-bold">shaders</span>.
      </div>
      <div>
        <span className="bg-yellow-400 font-bold">
          I'm always looking forward to challenging opportunities,
          if you think you have something interesting, feel free to reach out to me on email!
        </span>
      </div>
    </div>
  </Section>
);

export default About;
