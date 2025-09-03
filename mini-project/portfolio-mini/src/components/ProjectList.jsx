function ProjectList(){
     const projects = [
  {
    title: "Project JX",
    description: "A responsive portfolio website showcasing personal projects and skills.",
    link: "https://github.com/yourusername/project-jx"
  },
  {
    title: "TaskMaster",
    description: "A task management app to create, update, and track daily tasks efficiently.",
    link: "https://github.com/yourusername/taskmaster"
  },
  {
    title: "ShopEasy",
    description: "An e-commerce platform with shopping cart, product search, and checkout features.",
    link: "https://github.com/yourusername/shopeasy"
  },
  {
    title: "FoodieMap",
    description: "A location-based app to discover restaurants, cafes, and food deals nearby.",
    link: "https://github.com/yourusername/foodiemap"
  },
  {
    title: "FitTrack",
    description: "A health and fitness tracker that logs workouts, calories, and progress charts.",
    link: "https://github.com/yourusername/fittrack"
  }
];
    return (
        <div>
            <section id='projects' className='project-section'>
        <h2>Projects</h2>
        <div className='project-list'>
          {projects.map((proj,index)=>(

            <div key = {index} className='project-item'>
              <h3> {proj.title} </h3>  
              <h3> {proj.description}</h3> 
              <a href={proj.link} target='_blank' rel='noopener noreferrer'>View Project</a>         
            </div>
          ))}
        </div>
      </section>
        </div>
    )
}

export default ProjectList;