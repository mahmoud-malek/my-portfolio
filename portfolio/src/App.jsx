
import Home from "@/pages/home"
import Projects from "@/pages/projects"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
       </Router>
    )
}
export default App
