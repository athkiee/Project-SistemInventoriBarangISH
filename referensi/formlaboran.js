var db = firebase.firestore();
var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9');
var i;
/*firebase.auth().onAuthStateChanged(function(user){
    if(user){
      db.collection('Users').doc(firebase.auth().currentUser.uid).get().then(
        doc => {
          document.getElementById('noinduk').value = doc.data().NoInduk;
          document.getElementById('name').value = doc.data().Namalengkap;
          document.getElementById('nohp').value = doc.data().NomorHP;
          document.getElementById('nfc').value = doc.data().NFCid;
        }
      );
    }

  });*/

  function generateCaptcha()
         {
             for (i=0;i<7;i++){
               var a = alpha[Math.floor(Math.random() * alpha.length)];
               var b = alpha[Math.floor(Math.random() * alpha.length)];
               var c = alpha[Math.floor(Math.random() * alpha.length)];
               var d = alpha[Math.floor(Math.random() * alpha.length)];
               var e = alpha[Math.floor(Math.random() * alpha.length)];
               var f = alpha[Math.floor(Math.random() * alpha.length)];
               var g = alpha[Math.floor(Math.random() * alpha.length)];
              }
            var code = a + '' + b + '' + '' + c + '' + d + '' + e + '' + f + '' + g + '';
            document.getElementById("mainCaptcha").value = code
          }
          function removeSpaces(string){
            return string.split(' ').join('');
          }
function storeRequest(){
  var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    //var email = document.getElementById('email').value;
    const labPinjam = document.getElementById("laboratory").value;
    const tglPinjam = document.getElementById("tgl-peminjaman").value;
    const namePinjam = document.getElementById("name").value;
    const nimPinjam = document.getElementById("noinduk").value;
    const durPinjam = document.getElementById("durasi").value;
    const waktu = document.getElementById('waktu').value;
    const nfcUser = document.getElementById('nfc').value;
    const nohpUs = document.getElementById("nohp").value;
    const keperluanUs = document.getElementById("perlu").value;

    if (labPinjam.value === 0){
        alert("Pilih Laboratorium!");
        document.getElementById('submit'),disabled = true;
        return;
    }

    if (durPinjam.value == 0){
        alert("Pilih durasi peminjaman!");
        document.getElementById('submit'),disabled = true;
        return;
    }
    if (namePinjam.length < 4){
        alert("Mohon isi biodata dengan lengkap!");
        document.getElementById('submit'),disabled = true;
        return;
    }
    if (nimPinjam.length < 4){
      alert("Mohon isi biodata dengan lengkap!");
      document.getElementById('submit'),disabled = true;
      return;
  }
  if (nohpUs.value < 4){
    alert("Mohon isi biodata dengan lengkap!");
    document.getElementById('submit'),disabled = true;
    return;
}
if (nfcUser.length < 4){
  alert("Mohon validasi NFC pada biodata terlebih dahulu!");
  document.getElementById('submit'),disabled = true;
  return;
}
if (keperluanUs.length < 3){
  alert("Isi form peminjaman dengan lengkap!");
  document.getElementById('submit'),disabled = true;
  return;
}
if (string1 != string2){
  alert("Captcha salah!")
  document.getElementById('submit'),disabled = true;
  generateCaptcha();
         return true;
       }

    db.collection("Ruangan").doc(labPinjam).collection('TanggalPeminjaman').doc(tglPinjam).collection(waktu).get().then(function(cekExist){
    if(cekExist.size > 0){
      alert('Maaf Jam Peminjaman tidak tersedia!');
    }
    else {
           db.collection("Ruangan").doc(labPinjam).collection("TanggalPeminjaman").doc(tglPinjam).collection(waktu).doc(email).set({
               Laboratorium: labPinjam,
               TglPeminjaman: tglPinjam,
               WaktuPeminjaman: waktu,
               DurasiPeminjaman: durPinjam,
               NamaPeminjam: namePinjam,
               NFCpeminjam: nfcUser,
               NoInduk: document.getElementById("noinduk").value,
               NoPeminjam: document.getElementById("nohp").value,
               Keperluan: document.getElementById("perlu").value,
               Status_dosen: "N",
               Status_laboran: "N"
           })
           db.collection("Request_User").doc(email).set({
               status: true
           })

           db.collection("Notifikasi").doc('Dosen').collection('dosen'+labPinjam.toLowerCase()+'@gmail.com').doc(tglPinjam+'-'+waktu).set({
               Pemberitahuan: "User "+email+" Memohon Peminjaman Ruangan , Cek Table Request"
           })

           db.collection("Request_User").doc(email).collection("TanggalPeminjaman").doc(tglPinjam+"-"+waktu).set({
               Laboratorium: labPinjam,
               TglPeminjaman: tglPinjam,
               WaktuPeminjaman: waktu,
               DurasiPeminjaman: durPinjam,
               NamaPeminjam: namePinjam,
               NFCpeminjam: nfcUser,
               NoInduk: document.getElementById("noinduk").value,
               NoPeminjam: document.getElementById("nohp").value,
               Keperluan: document.getElementById("perlu").value,
               Status_dosen: "N",
               Status_laboran: "N"
           }).then(function()
               {
                   alert("Peminjaman telah diajukan!");
                   //document.location = 'draft.html';
               })
               .catch(function(error) {
                   console.error("Error writing document: ", error);
                 });
         }
    });

}



function cek_waktu(waktu){
  if(waktu.substr(0,2) > 21 || waktu.substr(0,2) < 06 ){
    alert('Waktu Hanya Di perbolehkan dari 06:30-21:30');
    document.getElementById('submit').disabled = true;
  }
  else {
    document.getElementById('submit').disabled = false;
  }
  if(waktu.substr(3,2) == '30'){
    document.getElementById('submit').disabled = false;
  }
  else {
    alert('Waktu Tidak Boleh Selain XX:30');
    document.getElementById('submit').disabled = true;
  }

}
