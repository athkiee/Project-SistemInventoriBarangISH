//ferstore
const perstore = require('firebase-admin');

let serviceAccount = require('./key/testing-puddlelab-firebase-adminsdk-ogani-b72bfb3726.json');

perstore.initializeApp({
  credential: perstore.credential.cert(serviceAccount),
  databaseURL: "https://testing-puddlelab.firebaseio.com"
});
let riltem = perstore.database();
let db = perstore.firestore();
function penjadwalan(){
db.collection('Request_User').get().then(function(snapshot){
	snapshot.forEach(doc => {
		db.collection('Request_User').doc(doc.id).collection('TanggalPeminjaman').get().then(function(snapshot2){
			snapshot2.forEach(doc => {
				var tanggal_data = doc.data().TglPeminjaman;
				var jam_data = doc.data().WaktuPeminjaman;
				console.log("Ruangan : "+doc.data().Laboratorium)
				console.log('Tanggal : '+tanggal_data);
				console.log('Jam : '+jam_data)
				var date = new Date();
				var tanggal = date.getFullYear()+'-'+("0" + (date.getMonth() + 1)).slice(-2)+'-'+date.getDate();
				console.log('Sekarang Tanggal : '+tanggal);
				var sekarang = date.getHours()+':'+("0"+(date.getMinutes())).slice(-2);
				console.log('Jam Sekarang : '+sekarang);
				console.log('\n');
				if(tanggal_data == tanggal && jam_data == sekarang && doc.data().Status_dosen == 'Y' && doc.data().Status_laboran == 'Y'){
					var ref = riltem.ref('Aktif');
					eval("ref.update({"+doc.data().Laboratorium+": '"+doc.data().NFCpeminjam+"'}).then(function(){console.log('Data Terupdate')})");
				}
			});
		});
	});
});
}

function exit(){
	process.exit();
}

setTimeout(penjadwalan, 5000)
setTimeout(exit, 10000)
