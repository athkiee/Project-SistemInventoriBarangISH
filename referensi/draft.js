const db = firebase.firestore();
firebase.auth().onAuthStateChanged(function(user){
    if(user){
        var data = "";
            db.collection('/Request_User/'+firebase.auth().currentUser.email+'/TanggalPeminjaman').get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    if(doc)
                    data += "<tr><td>"+doc.data().TglPeminjaman+"</td>";
                    data += "<td>"+doc.data().WaktuPeminjaman+"</td>";
                    data += "<td>"+doc.data().DurasiPeminjaman+"</td>";
                    data += "<td>"+doc.data().Laboratorium+"</td>";
                    data += "<td>"+doc.data().NamaPeminjam+"</td>";
                    data += "<td>"+doc.data().Status_dosen+"</td>";
                    data += "<td>"+doc.data().Status_laboran+"</td>";
                    data += "<td><a onclick=hapus('"+firebase.auth().currentUser.email+"','"+doc.data().TglPeminjaman+"'); class='btn btn-danger btn-sm'>Hapus</a></td>";
                    data += "</tr>";
                    
                });
                document.getElementById("datahistory").innerHTML = data;
            });

            
    }
    
});
function hapus(email, tanggal){
    db.collection('/Request_User/'+email+"/TanggalPeminjaman/").doc(tanggal).delete().then(function(){
        alert('Data Berhasil Di Hapus');
        document.location.reload();
    });
}
