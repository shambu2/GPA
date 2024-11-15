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
  

  return (
    <div className="flex flex-col">
      <div>
        <div>
          <label htmlFor="">ADA</label>
          <input
            type="text"
            onChange={(e) => {
              setAda(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">GT</label>
          <input
            type="text"
            onChange={(e) => {
              setGT(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">MC</label>
          <input
            type="text"
            onChange={(e) => {
              setMc(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">DBMS</label>
          <input
            type="text"
            onChange={(e) => {
              setDbms(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Biology</label>
          <input
            type="text"
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">ADA Lab</label>
          <input
            type="text"
            onChange={(e) => {
              setAdaLab(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Latex</label>
          <input
            type="text"
            onChange={(e) => {
              setLatex(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">UHV</label>
          <input
            type="text"
            onChange={(e) => {
              setUhv(e.target.value);
            }}
          />
        </div>
      </div>
      <button onClick={() => setCgpa(cgpaFinal)}>submit</button>
      <div>
        <p>{cgpa.toFixed(2)}</p>
      </div>
      

    </div>
  );
}

export default App;
