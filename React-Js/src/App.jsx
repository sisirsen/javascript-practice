import { useState, Useeffect } from "react";
import Navbar from "./components/navbar"
import Footer  from "./components/footer";
import Props from "./components/props";
import FinalProps from "./components/finalProps";
import Usestate from "./components/usestate";
import ProjectUsestate from "./components/ProjectUsestate";
import UseEff from "./components/Useeffect";
function App() {

  

  const coders = [
  { name: "Sisir", role: "Frontend Dev" },
  { name: "Rahul", role: "Backend Dev" },
  { name: "Amit", role: "Fullstack Dev" },
  { name: "Riya", role: "UI Designer" },
  { name: "Neha", role: "Tester" },
  { name: "Arjun", role: "DevOps" },
  
];
   
 
  return (
    <>
    <div className="space-y-10">
    <Navbar />

    <UseEff />

    <ProjectUsestate/>

    <Usestate />
    
    <div className="flex gap-5">
    <FinalProps goal="fullstack" career="b.tech" location="kolkata" />
    <FinalProps goal="frontend" career="b.tech" location="mumbai" />
    <FinalProps goal="backend" career="b.tech" location="maharasthra" />
    </div>
    
    {coders.map((user,idx)=>(
    <Props 
    key={idx}
    username={user.name}
    role={user.role}
    />

    ))}
   
    <Footer  />
    </div>
    
    </>
  )
}

export default App
