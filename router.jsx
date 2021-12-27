import Users from "./components/Antartic Ocean";
import Contact from "./components/Indian Ocean";
import About from "./components/Atlantic Ocean";
import About from "./components/Pacific Ocean";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Route path="/about" component={Antartic Ocean} />
          <Route path="/users" component={Indian Ocean} />
          <Route path="/contact" component={Atlantic Ocean} />
          Route path="/contact" component={Pacific Ocean} />
        </div>
      </Router>
    </div>
  );
}