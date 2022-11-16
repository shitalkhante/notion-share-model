import './App.css';
import { Share } from './components/share/share';
import { Search } from './components/search/search';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const records = [
    {name:"Wade Cooper",email:"wade@gmail.com",type:"person"},
    {name:"Arlrnr Mccoy",email:"arlrnr@gmail.com",type:"person"},
    {name:"Product",email:"",type:"group"},
    {name:"Engineering",email:"",type:"group"}
    ];
  const [state,setState] = useState(records);
  const [state1,setState1] = useState("");
  const [selected,setSelected] = useState({data:null,access:""});
  // console.log(state1.length);
  useEffect(()=>{
    if(state1.length>0){
    setState(records.filter((r)=>{
      return r.name.toLowerCase().includes(state1)
    }))
  }else{
    setState(records);
  }
  },[state1,selected])
  
  console.log(selected);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Share state={selected}/>} />
          <Route path='/search' element={<Search state={state} setState={setState1} select={selected} setSelect={setSelected}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
