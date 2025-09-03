import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

function App() {
  const name = "Sayan Shil"
  const professional = "Full Stack Java Developer"
   const phone = 8697692502;
    const email = "sayansil2000@gmail.com"
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
    <div className='App'>
      {/* Header Section */ }
     <Header/>

      {/* About Section */ }
     <About/>

      {/* Project Section */ }
      <ProjectList/>

      {/* Contact Section */ }
     <Contact/>

      {/* Footer Section */ }
      <Footer/>
    </div>
  )
}

export default App
