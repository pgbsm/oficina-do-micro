import Header from "./assets/components/Header";
import Div from "./assets/components/Div";
import Aside from "./assets/components/Aside";
import Atencao from "./assets/components/Atencao";
import StnServicos from "./assets/components/StnServicos";
import Modal from "./assets/components/Modal";
import StnProcessos from "./assets/components/StnProcessos";
import StnCTA from "./assets/components/StnCTA";
import StnSobre from "./assets/components/StnSobre";
import StnFeedbaks from "./assets/components/StnFeedbacks";
import StnContato from "./assets/components/StnContato";
import Footer from "./assets/components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <main className="main">
          <Header />
          <div className="destaque">
            <Div />
            <Aside />
          </div>
        </main>
        <Atencao />
        <StnServicos />
        <Modal />
        <StnProcessos />
        <StnCTA />
        <StnSobre />
        <StnFeedbaks />
        <StnContato />
        <Footer />
      </div>
    </>
  );
}

export default App;
