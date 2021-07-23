var db = firebase.firestore();
function storeTicket(){

  const nameTT = document.getElementById("name").value;
  const noindukTT = document.getElementById("noinduk").value;
  const labTT = document.getElementById("laboratory").value;
  const troubTT = document.getElementById("trouble").value;
  const messTT = document.getElementById("message").value;

  db.collection("TroubleTicket").db(labTT).collection(troubTT).db(nameTT).set({
    Laboratorium: labTT,
    JenisMasalah: troubTT,
    Pelapor: nameTT,
    NoInduk: noindukTT,
    Keluhan: messTT
  })
  .then(function(){
     alert("Trouble Ticket sudah dibuat! Terimakasih atas Saran Anda!");
  })
  .catch(function(error) {
    alert("Error writing document: ", error);
  });

  }
