import Section from "./Section";

const Skills = () => (
  <Section heading="skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col">
        <div className="font-semibold uppercase">Languages</div>
        <div className="font-light">
          <div>C++</div>
          <div>C#</div>
          <div>Lua</div>
          <div>JavaScript (ES6)</div>
          <div>HTML5</div>
          <div>CSS3/Sass</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold uppercase">Engines/Frameworks</div>
        <div className="font-semibold">
          <div>Unity</div>
          <div>Unreal 4</div>
          <div>WebSockets</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold uppercase">Tools</div>
        <div className="font-semibold">
          <div>Git & Github / GitLab / BitBucket </div>
          <div>Trello / Asana / Slack</div>
          <div>Figma</div>
          <div>Postman</div>
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
        </div>
      </div>
    </div>
  </Section>
);

export default Skills;
