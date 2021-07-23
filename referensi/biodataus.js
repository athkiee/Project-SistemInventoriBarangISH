
const db = firebase.firestore();
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    db.collection('Users').doc(firebase.auth().currentUser.uid).get().then(
      doc => {
        document.getElementById('noinduk').value = doc.data().NoInduk;
        document.getElementById('namalengkap').value = doc.data().Namalengkap;
        document.getElementById('nfc').value = doc.data().NFCid;
        document.getElementById('nohp').value = doc.data().NomorHP;
        document.getElementById('verif').value = doc.data().statusVerif;
      }
    );
  }
  
});

function storeData(){
  var db = firebase.firestore();
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      const noindukUser = document.getElementById("noinduk").value;
      var namalengkapUser = document.getElementById("namalengkap").value;
      var nfcUser = document.getElementById("nohp").value;
      //var nohpUser = document.getElementById("nfc").value;

      if(noindukUser.length < 5) {
        alert("Masukkan NIM dengan benar!")
        return;
      }

      if(nohp.length < 8) {
        alert("Masukkan Nomor HP dengan benar!")
        return;
      }
      console.log('test');

    db.collection("Users").doc(firebase.auth().currentUser.uid).set({
      NoInduk: noindukUser,
      Namalengkap: namalengkapUser,
      NomorHP: nfcUser,
      NFCid: document.getElementById("nfc").value,
      statusVerif: document.getElementById('verif').value
    })
    .then(function() {
    alert("Data berhasil disimpan!")
    document.location.reload(true);
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
    }
    
  });
  
}