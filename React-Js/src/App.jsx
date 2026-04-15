import Navbar from "./components/navbar"
import Footer  from "./components/footer";
import Props from "./components/props";
import Onclick from "./components/onclick";
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
    <Navbar />
    {coders.map((user,idx)=>(
    <Props 
    key={idx}
    username={user.name}
    role={user.role}
    />

    ))}

    <Onclick />
   
    <Footer  />
    
    </>
  )
}

export default App
