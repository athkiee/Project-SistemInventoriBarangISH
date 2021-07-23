var db = firebase.firestore();
function storeRequest(){    
    const labPinjam = document.getElementById("laboratory").value;
    const tglPinjam = document.getElementById("tgl-peminjaman").value;
    const namePinjam = document.getElementById("name").value;
    const nimPinjam = document.getElementById("noinduk").value;
    const durPinjam = document.getElementById("durasi").value;
    
    if (labPinjam.value == 0){
        alert("Pilih Laboratorium!");
        return;
    }
    
    if (durPinjam.value == 0){
        alert("Pilih durasi peminjaman!");
        return;
    }
    if (namePinjam.length < 0){
        alert("Mohon isi form dengan lengkap!");
        return;
    }

    db.collection("RequestDosen").doc(labPinjam).collection(tglPinjam).doc(firebase.auth().currentUser.uid).collection(namePinjam).doc(nimPinjam).set({
        Laboratorium: labPinjam,
        TglPeminjaman: tglPinjam,
        DurasiPeminjaman: durPinjam,
        NamaPeminjam: namePinjam,
        NoInduk: document.getElementById("noinduk").value,
        NoPeminjam: document.getElementById("nohp").value,
        Keperluan: document.getElementById("perlu").value
    })

    db.collection("historiDosen").doc(firebase.auth().currentUser.uid).collection(tglPinjam).doc(labPinjam).collection(namePinjam).doc(nimPinjam).set({
        Laboratorium: labPinjam,
        TglPeminjaman: tglPinjam,
        DurasiPeminjaman: durPinjam,
        NamaPeminjam: namePinjam,
        NoInduk: document.getElementById("noinduk").value,
        NoPeminjam: document.getElementById("nohp").value,
        Keperluan: document.getElementById("perlu").value
    })

    .then(function()
        {
            alert("Peminjaman telah diajukan!");
            document.getElementById("reqDosen").reset();
        })
        .catch(function(error) {
            alert("Error writing document: ", error);
          });
}