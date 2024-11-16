// import React from "react";
// import ProjectCard from "./ProjectCard";
// import "./Projects.css";

// function Projects() {
//   const projects = [
//     {
//       title: "MedicapesLive",
//       description: "A college marketplace to find what you need.",
//       features: ["Post requirements", "Connect with classmates", "Easy payments"],
//     },
//     {
//       title: "Hidechat",
//       description: "Chat anonymously with your peers.",
//       features: ["Anonymous chats", "Create and join rooms", "Live chatting"],
//     },
//     {
//       title: "Robot JE",
//       description: "Your personal college assistant.",
//       features: ["Task management", "Motivational check-ins", "Support and motivation"],
//     },
//     {
//       title: "Clash of Code",
//       description: "Compete in coding challenges.",
//       features: ["Create clans", "Compete in challenges", "Learn and grow"],
//     },
//   ];

//   return (
//     <section id="projects" className="projects">
//       <h2>Our Projects</h2>
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;


import React from "react";

function Projects() {
  return (
    <section id="projects" style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Our Projects</h2>
      <iframe
        src="https://future-apps-powered-by-j-f2vloi4.gamma.site/"
        title="Future Apps Powered by JLSS"
        width="100%"
        height="800px"
        style={{
          border: "none",
          marginTop: "1rem",
        }}
      ></iframe>
    </section>
  );
}

export default Projects;
