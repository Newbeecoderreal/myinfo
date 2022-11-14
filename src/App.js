
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './components/Data';


function App() {

const carditem = data.map(item => {
  return (
    <Card 
      item= {item}
    />
)
})



  return (
    <div className="App">
        <Navbar />
        <section className='cards-list'>
           {carditem}
        </section>
    </div>
  );
}

export default App;
