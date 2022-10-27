import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto"}}>
     <Header> </Header>
     <Container></Container>
     <Footer></Footer>  
    </div>
  );
}

export default App;
