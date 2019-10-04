var inp = document.getElementById('inr');
document.getElementById('output').style.visibility = "hidden";
inp.addEventListener
('input' , function(e)
    {
        document.getElementById('usOutput').style.paddingLeft = "15%";
        document.getElementById('euroOutput').style.paddingLeft = "15%";
        document.getElementById('yenOutput').style.paddingLeft = "15%";        
        let get = e.target.value;
        document.getElementById('output').style.visibility = "unset";
       
        // Convert to Doller
        document.getElementById('usOutput').innerHTML = get * 0.014;

        // Convert to Euro 
        document.getElementById('euroOutput').innerHTML = get * 0.013;

        // Convert to Yen 
        document.getElementById('yenOutput').innerHTML = get * 1.49;

    }
)