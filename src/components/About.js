import Section from "./Section";

const About = () => (
  <Section heading="background" icon="potion">
    <div className="font-light">
      <div className="mb-4">
        I'm an independent gameplay and tools engineering contractor, currently
        based in <span className="font-bold">Edinburgh, UK</span>. I work with a
        wide variety of clients, from individuals looking for someone to build
        their dream game to independent studios and startups that need a
        talented professional to help to develop their projects. I graduated
        from Birmingham City University, with First-class Honours in BSc.
        Interactive Entertainment: Game Development, and have commercial AAA
        programming experience working as an Online Tools Designer at Rockstar
        North.
      </div>
      <div className="mb-4">
        As an independent contractor, I take a lot of joy in being able to
        continually work on a variety of different projects as it forces me to
        interact with new technologies, work with new people and consistently
        allow me to keep growing and learning. There's nothing like the freedom
        of being able to always work on the most interesting up-and-coming
        opportunities that present themselves to you. My passion truly lies in
        game development. I love being able to design and develop interactive
        experiences that can be enjoyed globally by a wide-range of different
        audiences. I also love being able to create and experiment with the
        development of indie tools, as it gives me a chance to try and give back
        to the community I work in and hopefully make the lives of my fellow
        developers easier.
      </div>
      <div className="mb-4">
        If I'm not working hard with clients, I'm probably working on a personal
        project, participating in a game jam, powerlifting or exploring the
        gorgeous highlands of my local area.
      </div>
      <div>
        <span className="bg-yellow-400 font-bold">
          I'm always on the lookout for new clients with interesting projects to
          work on, so if you think that's you, send me an email!
        </span>
      </div>
    </div>
  </Section>
);

export default About;
