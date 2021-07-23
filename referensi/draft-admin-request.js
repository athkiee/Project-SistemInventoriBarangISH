//var RealtimeConfig = {
  //  apiKey: "AIzaSyBcxPfdZ8EugD2yNtDpRIMulS9gQB_4Ong",
    //authDomain: "puddle-lab-laboran.firebaseapp.com",
    //databaseURL: "https://puddle-lab-laboran.firebaseio.com",
    //projectId: "puddle-lab-laboran",
    //storageBucket: "",
    //messagingSenderId: "43911959838",
    //appId: "1:43911959838:web:5bd326fe4692768f"
  //};
  // Initialize Firebase
  //firebase.initializeApp(RealtimeConfig);
  //const realtime = firebase.database();
const db = firebase.firestore();
db.collection('Request_User').get().then(function(querySnapshot){
    var data = "";
    querySnapshot.forEach(function(doc){
        console.log(doc.id);
        db.collection('/Request_User/'+doc.id+'/TanggalPeminjaman').get().then(function(querySnapshot2){
            querySnapshot2.forEach(function(doc2){
                data += "<tr><td>"+doc2.data().TglPeminjaman.substring(0,10)+"</td>";
                data += "<td>"+doc2.data().WaktuPeminjaman+"</td>";
                data += "<td>"+doc2.data().Laboratorium+"</td>";
                data += "<td>"+doc2.data().NamaPeminjam+"</td>";
                data += "<td>"+doc2.data().NoInduk+"</td>";
                data += "<td><button type='button' class='btn btn-primary btn-sm detail' data-toggle='modal' onclick=ubah_data('"+doc.id+"','"+doc2.id+"'); data-target='#detailrequest'>Detail</button></td>";
                data += "</tr>";
                
            });
            document.getElementById("requestUser").innerHTML = data;
        });
    });
});

function ubah_data(id, data_id){
    data = "";
    db.collection('/Request_User/'+id+'/TanggalPeminjaman/').doc(data_id).get().then(doc => {
        
        data += "<div class='modal-dialog'>";
        data += "<div class='modal-content'>";
        data += "<div class='modal-header'>";
        data += "<h4 class='modal-title'>Detail Peminjaman</h4>";
        data += "<button type='button' class='close' data-dismiss='modal'>&times;</button></div>";
                            
        data += "<div class='modal-body'>";
        data += "<table>";
        data += "<tr><td>Nama : </td><td>"+doc.data().NamaPeminjam+"</td></tr>";
        data += "<tr><td>Nim : </td><td>"+doc.data().NoInduk+"</td></tr>";
        data += "<tr><td>Laboratorium : </td><td>"+doc.data().Laboratorium+"</td></tr>";
        data += "<tr><td>Kode NFC : </td><td>"+doc.data().NFCpeminjam+"</td></tr>";
        data += "<tr><td>No Hp : </td><td>"+doc.data().NoPeminjam+"</td></tr>";
        data += "<tr><td>Tanggal : </td><td>"+doc.data().TglPeminjaman+"</td></tr>";
        data += "<tr><td> Waktu Peminjaman : </td><td>"+doc.data().WaktuPeminjaman+"</td><tr>";
        data += "<tr><td>Durasi : </td><td>"+doc.data().DurasiPeminjaman+"</td></tr>";
        data += "<tr><td>Keperluan : </td><td>"+doc.data().Keperluan+"</td></tr>";
        data += "<tr><td>Acc Dosen : </td><td>"+doc.data().Status_dosen+"</td></tr>";
        data += "<tr><td><a class='btn btn-primary btn-sm mr-4 text-light' onclick=\"acc('"+id+"', '"+doc.data().TglPeminjaman+"-"+doc.data().WaktuPeminjaman+"');\">ACC</a></td>";
        data += "<td><a class='btn btn-danger btn-sm text-light' onclick=\"tolak('"+id+"', '"+doc.data().TglPeminjaman+"-"+doc.data().WaktuPeminjaman+"');\">Tolak</a></td></tr>";
        data += "</table>";
        data += "</div></div></div>";
        document.getElementById('detailrequest').innerHTML = data;
    }
    );
}

    function acc(email,tanggal){
        db.collection("Request_User").doc(email).collection("TanggalPeminjaman").doc(tanggal).update({
            Status_laboran: 'Y'
        }).then(function(){
            alert('Telah Di Acc');
        });
    /*    db.collection('Request_User').doc(email).collection("TanggalPeminjaman").doc(tanggal).get().then(function(doc){
            if(doc)
            database.ref(doc.data().NFCpeminjam).set({
                TglPeminjaman: doc.data().TglPeminjaman,
                WaktuPeminjaman: doc.data().WaktuPeminjaman,
                DurasiPeminjaman: doc.data().DurasiPeminjaman
            })
        })*/
    }
    function tolak(email,tanggal){
        db.collection("Request_User").doc(email).collection("TanggalPeminjaman").doc(tanggal).update({
            Status_laboran: 'N'
        }).then(function(){
            alert('Telah Di Tolak');
    });
    }


    