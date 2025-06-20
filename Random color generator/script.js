let colorcode = ""
const colorGenerator = ()=>{
const color  = Math.floor(Math.random()*16777215)
 colorcode =  "#" + color.toString(16)
document.getElementById("COLOR").innerText = colorcode

document.body.style.backgroundColor = colorcode

};




const copyText = () => {
  if (!colorcode) return alert("No color code to copy!");
  navigator.clipboard.writeText(colorcode)
    .then(() => alert("Copied!"))
    .catch(err => alert("Copy failed: " + err));
};


document.getElementById("btn").addEventListener("click" , 
    colorGenerator
);
document.getElementById("copy").addEventListener("click" , 
   copyText
);
colorGenerator()