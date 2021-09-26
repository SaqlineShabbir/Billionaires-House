
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div >
    <Header></Header>
    <div className="about my-5">
      <h1 className="text-center">Lets Count Billionaires Money</h1>
      <h4 className="text-center">Total Budget is 10000 B$</h4>
      <p className="px-5">A billionaire is a person with a net worth of at least one billion (1,000,000,000, i.e., a thousand million) units of a given currency, usually of a major currency such as the United States dollar, euro, or pound sterling. The American business magazine Forbes produces a global list of known U.S. dollar billionaires every year and updates an Internet version of this list in real time.[1] The American oil magnate John D. Rockefeller became the world's first confirmed U.S. dollar billionaire in 1916, and still holds the title of history's second wealthiest individual.[2]

As of 2018, there are over 2,200 U.S. dollar billionaires worldwide, with a combined wealth of over US$ 9.1 trillion,[3] up from US$7.67 trillion in 2017.[4][5] According to a 2017 Oxfam report, the top eight richest billionaires own as much combined wealth as "half the human race".[6][7] As of June 2021, eight people have reached the status of USD hectobillionaires, meaning that each has had a net worth of at least $100 billion. All but one (Bernard Arnault) are United States citizens</p>
    </div>
    <Main></Main>
    </div>
  );
}

export default App;
