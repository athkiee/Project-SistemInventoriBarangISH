 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBHRTrUrl7gqHQqWCJwO-ADcNyte7RkjY8",
    authDomain: "testing-puddlelab.firebaseapp.com",
    databaseURL: "https://testing-puddlelab.firebaseio.com",
    projectId: "testing-puddlelab",
    storageBucket: "testing-puddlelab.appspot.com",
    messagingSenderId: "264031156926",
    appId: "1:264031156926:web:ab0b31e0720c8877"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


function get_jadwal(){
  /*for(var m=6;m<=21;m++){
    var f = ("0"+m.toString()).slice(-2);
    document.getElementById(f+":30").innerHTML = "";
  }*/
    var tanggal = document.getElementById('tanggal').value;
    var ruangan = document.getElementById('ruangan').value;
    for(var i=0;i<=23;i++){
      var c = i.toString();
      var x = ("0"+c).slice(-2);
     /* db.collection('Ruangan/'+ruangan+"/TanggalPeminjaman/").doc(tanggal).collection(x+':00').get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          if(doc)
            console.log(doc.data().WaktuPeminjaman); 
          }
        );
      });*/
      db.collection('Ruangan/'+ruangan+"/TanggalPeminjaman/").doc(tanggal).collection(x+':30').get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          if(doc)
          var n = doc.data().WaktuPeminjaman.substr(0,2);
          console.log(doc.data());
            for(var m=0;m<(doc.data().DurasiPeminjaman);m++){
              waktu = ("0"+(parseInt(m)+parseInt(n)).toString()).slice(-2)+":30";
              
              document.getElementById(waktu).innerHTML = "Ruangan Telah Di Pinjam";
            
            }
            
          }
        );
      });
    }
}

