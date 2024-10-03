import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Table from './template/table';
import Form from './template/Form';
import Icons from './template/Icons';
function App() {
  return (
    <div className="App">
      <Table/>
      <Form/>
      <Icons/>
     <h1 class="text-bg-warning p-3">Bootstrap in React</h1>
    
     <img src="https://tse4.mm.bing.net/th?id=OIP.tKRxw38xoGZJ7CZimtqDtwHaEN&pid=Api&P=0&h=220" class="rounded float-start" alt="img_not_found"></img><br/><br/>
     <button className='btn btn-success'>Submit</button> 
     <button className='btn btn-primary'>Edit</button>
    </div>
  );
}

export default App;
