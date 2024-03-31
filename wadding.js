document.addEventListener('DOMContentLoaded', function() {const fadeIns = document.querySelectorAll('.fade-in');
fadeIns.forEach(element => {element.style.opacity = 0; setTimeout(() => { element.style.opacity = 1;
}, 100);});function updateDateTime() {const now = new Date();const targetDate = new Date('2024-06-19');
let timeDifference = targetDate - now; if (timeDifference < 0) {
clearInterval(timerInterval);document.getElementById('countdown').innerHTML = '<p>החתונה התקיימה.</p>';
document.getElementById('customForm').innerHTML = '<p>ההרשמה סגורה</p>';return;}
const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    document.getElementById('countdown').innerHTML = `
    <div>
        <div class="time_block">
            <p>${days}</p><p>ימים</p>   
        </div>
        <div class="time_block">
            <p>${hours}</p><p>שעות</p>
        </div>
        <div class="time_block">
            <p>${minutes}</p><p>דקות</p>
        </div>
        <div class="time_block">
            <p>${seconds}</p><p>שניות</p>
        </div>
    </div>
        `;
    }

    // Initial call to update date and time
    updateDateTime();

    // Update date and time every second
    const timerInterval = setInterval(updateDateTime, 1000);
});


document.getElementById("customForm").addEventListener("submit", function (event)
{
    event.preventDefault();
    const cn = document.getElementById('name').value;
    const l4 = '1FAIpQLSfJn0Jyq';
    const cp = document.getElementById('places').value;
    const cc = document.getElementById('comment').value;

    if (!/^[א-ת\s]{3,30}$/.test(cn))
    {
        alert('את השם מזינים בעברית עד 30 אותיות ובלי סימנים מיוחדים'); return;
    }
    if (!/^[0-9א-ת\s.,]{0,50}$/.test(cc))
    {
       alert('המבנה של ההערה לא תקין :('); return;
    }
    const i2 = '8RyTm1hMAhaSJAYqGKhNg';
    if (isNaN(cp) || parseInt(cp) < 0 || parseInt(cp) > 20)
    {
        alert('יש בעיה במקמות שביקשתם לשמור, נסו מספר אחר.'); return;
    }
    const g3 = 'QN2uyaetpibO_a6X9YdX';
    const o3 = l4 + g3;
    let spinner = document.getElementById("loading").style;
    spinner.display = "block";
    const i9 = o3 + i2;
    const url = 'https://docs.google.com/forms/d/e/' + i9 + '/formResponse';

    let queryString = 'entry.1727540850=' + encodeURIComponent(cn) + '&' + 'entry.942065381=' + encodeURIComponent(cp) + '&';
    if (encodeURIComponent(cc) !== "")
    {
        queryString += 'entry.897684979=' + encodeURIComponent(cc) + '&';
    }
    fetch(
        url, {
            method: 'POST',
            mode: 'no-cors',
            body: queryString,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
    ).then(response => {
        spinner.display = "none";
        document.getElementById('customForm').style.display = "none";
        document.getElementById("result").style.display = "block";
        if (0 === parseInt(cp))
        {
            document.getElementById("result").innerText = "זה גם בסדר, נתראה באירוע אחר.";
        }
        else
        {
            document.getElementById("result").innerText = "סגור, נשמור מקום!";
        }
    }).catch(error => {
        spinner.display = "none"; document.getElementById('customForm').style.display = "none";
        document.getElementById("result").style.display = "block";document.getElementById("result").style.color = "red";
        document.getElementById("result").innerText = "לא הצלחנו לקבל את הבקשה שלך, יש לנסות שוב מאוחר יותר.";
    });
});
