document.getElementById("customForm").addEventListener("submit", function(event)
{event.preventDefault();const cn = document.getElementById('name').value;
const l4 = '1FAIpQLSfJn0Jyq';const cp = document.getElementById('places').value;if(!/^[א-ת\s]{1,20}$/.test(cn))
{alert('את השם מזינים בעברית עד 20 אותיות ובלי סימנים מיוחדים');return;}const i2 = '8RyTm1hMAhaSJAYqGKhNg';
if(isNaN(cp)||parseInt(cp)<0||parseInt(cp)>50){alert('יש בעיה במקמות שביקשתם לשמור, נסו מספר אחר.'); return;}const g3='QN2uyaetpibO_a6X9YdX';
const o3 = l4 + g3;let spinner = document.getElementById("loading").style;
spinner.display = "block";const i9 = o3 + i2;const url = 'https://docs.google.com/forms/d/e/' + i9 + '/formResponse';
let queryString='entry.1727540850='+encodeURIComponent(cn)+'&'+'entry.942065381='+encodeURIComponent(cp) +'&';
fetch(url, {method: 'POST',mode: 'no-cors',body: queryString,headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}).then(response => {spinner.display = "none";document.getElementById('customForm').style.display = "none";
document.getElementById("result").style.display = "block";if (0 === parseInt(cp)){
document.getElementById("result").innerText = "זה גם בסדר, נתראה באירוע אחר.";}else{document.getElementById("result").innerText = "סגור, נשמור לך מקום!";
}}).catch(error => {spinner.display = "none";document.getElementById('customForm').style.display = "none";
document.getElementById("result").style.display = "block";document.getElementById("result").style.color = "red";
document.getElementById("result").innerText = "לא הצלחנו לקבל את הבקשה שלך, יש לנסות שוב מאוחר יותר.";});});