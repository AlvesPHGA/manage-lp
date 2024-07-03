import { Home } from './ui/pages/Home';
import { Footer } from './ui/partials/global/Footer';
import { Header } from './ui/partials/global/Header';

function App() {
   return (
      <div className="bg-[url('./public/icons/bg-tablet-pattern.svg')] bg-no-repeat bg-topBs-pattern-1200plus bg-topBp-pattern-1200plus">
         <Header />
         <Home />
         <Footer />
      </div>
   );
}

export default App;
