import Section from "./Section";

const Skills = () => (
  <Section heading="skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col">
        <div className="font-semibold uppercase">Languages</div>
        <div className="font-light">
          <div>C</div>
          <div>C++</div>
          <div>C#</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold uppercase">Engines/Frameworks</div>
        <div className="font-semibold">
          <div>
            <a
              href="https://unity.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Unity
            </a>
          </div>
          <div>
            <a
              href="https://www.unrealengine.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Unreal
            </a>
          </div>
          <div>
            <a
              href="https://ephtracy.github.io/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              MagicaVoxel
            </a>
        </div>  
      </div>        
      </div>
      <div className="flex flex-col">
        <div className="font-semibold uppercase">Tools</div>
        <div className="font-semibold">
          <div>Git & Github / GitLab / BitBucket </div>
          <div>Trello / Asana</div>
          <div> <a href="https://slack.com" target="_blank" rel="noreferrer" className="hover:underline">Slack</a> </div>
          <div> <a href="https://www.figma.com" target="_blank" rel="noreferrer" className="hover:underline">Figma</a> </div>
          <div> <a href="https://www.postman.com" target="_blank" rel="noreferrer" className="hover:underline">Postman</a> </div>
          <div> <a href="https://firebase.google.com" target="_blank" rel="noreferrer" className="hover:underline">Firebase</a> </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold uppercase">Fields</div>
        <div className="font-light">
          <div>Gameplay</div>
          <div>Editor Tools</div>
          <div>User Interface</div>
          <div>Multiplayer</div>
          <div>Animation</div>
          <div>Analytics </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Skills;
