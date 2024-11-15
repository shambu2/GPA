import { useState } from "react";

import "./App.css";

function App() {
  const [cgpa,setCgpa] = useState("0") 

  const [ada, setAda] = useState("0");
  const [gt, setGT] = useState("0");
  const [mc, setMc] = useState("0");
  const [dbms, setDbms] = useState("0");
  const [bio, setBio] = useState("0");
  const [adaLab, setAdaLab] = useState("0");
  const [latex, setLatex] = useState("0");
  const [uhv, setUhv] = useState("0");

  let adaNum = parseInt(ada.slice(0, 1));
  let gtNum = parseInt(gt.slice(0, 1));
  let mcNum = parseInt(mc.slice(0, 1));
  let dbmsNum = parseInt(dbms.slice(0, 1));
  let bioNum = parseInt(bio.slice(0, 1));
  let adalabNum = parseInt(adaLab.slice(0, 1));
  let latexNum = parseInt(latex.slice(0, 1));
  let uhvNum = parseInt(uhv.slice(0, 1));

  const fourGpa = ((mcNum + 1)*4) + ((dbmsNum + 1)*4);
  const threeGpa = ((adaNum + 1)*3) + ((gtNum + 1)*3);
  const twoGpa = ((bioNum + 1)*2);
  const oneGpa = ((adalabNum + 1)*1) + ((latexNum + 1)*1) + ((uhvNum +1)*1);
  const totalGpaNum = fourGpa + threeGpa + twoGpa +oneGpa ;
  const cgpaFinal = ((totalGpaNum/190)*10)
  // parse

  return (
    <div  className="  min-h-dvh bg-indigo-200 ">
      <h1 className="text-center text-4xl text-blue-800 underline font-bold ">Check your CGPA</h1>
      <div className=" items-center top-1/3 gap-y-10 text-black font-bold  " >
        <div className="flex  flex-row justify-around pt-10">
          <label htmlFor="" className="" >ADA</label>
          <input
            type="text" 
            className="rounded  pl-6 h-8 bg-slate-400"
            onChange={(e) => {
              setAda(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row justify-around pt-10">
          <label htmlFor="">GT</label>
          <input
            type="text"
            className="rounded h-8 pl-6 bg-slate-400 "
            onChange={(e) => {
              setGT(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row justify-around pt-10">
          <label htmlFor="">MC</label>
          <input
            type="text"
            className="rounded h-8 pl-6 bg-slate-400"
            onChange={(e) => {
              setMc(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row justify-around pt-10">
          <label htmlFor="">DBMS</label>
          <input
            type="text"
            className="rounded h-8 pl-6 bg-slate-400"
            onChange={(e) => {
              setDbms(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row justify-around pt-10">
          <label htmlFor="">Biology</label>
          <input
            type="text"
            className="rounded h-8 pl-6 bg-slate-400"
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row justify-around pt-10">
          <label htmlFor="">ADA Lab</label>
          <input
            type="text"
            className="rounded h-8 pl-6 bg-slate-400"
            onChange={(e) => {
              setAdaLab(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row justify-around pt-10">
          <label htmlFor="">Latex</label>
          <input
            type="text"
            className="rounded h-8 pl-6 bg-slate-400"
            onChange={(e) => {
              setLatex(e.target.value);
            }}
          />
        </div>
        <div className="flex  flex-row justify-around pt-10">
          <label htmlFor="">UHV</label>
          <input
            type="text"
            className="rounded h-8 pl-6 bg-slate-400"
            onChange={(e) => {
              setUhv(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="text-center my-8 ">
      <button className="bg-blue-500 py-4 rounded-xl px-14" onClick={() => setCgpa(cgpaFinal)}>submit</button>
      </div>
      <div className=" ">
        <p className="text-center border-2 text-2xl font-bold  text-blue-500">YOUR CGPA = {cgpa}</p>
      </div>
      

    </div>
  );
}

export default App;
