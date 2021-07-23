<?php 
    include('functions.php');
    if (!isLoggedIn()) {
        $_SESSION['msg'] = "You must log in first";
		header('location: login.php');
	}
?>
<!DOCTYPE html>
<html>
<head>
	<title>.: Inventory Hardware - ISH MAF :.</title>

	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">	
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/style1.css">
  <link rel="stylesheet" href="css/draft.css">

	<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  background-color: #212121;
  color: white;
  text-align: center;
}
.act-btn{
  background:#212121;
  display: block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  font-size:30px;
  font-weight:bold;
  border-radius:50%;
  -webkit-border-radius: 50%;
  text-decoration: none;
  transition: ease all 0.3s;
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.act-btn:hover{background:#2f89fc;)}
</style>
</head>
<body>

<div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div class="custom-menu">
					<button type="button" id="sidebarCollapse" class="btn btn-primary">
	          <i class="fa fa-bars"></i>
	          <span class="sr-only">Toggle Menu</span>
	        </button>
        </div>
	  		<h1><a href="index.php" class="logo">System Inventory Hardware</a></h1>
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <a href="index.php"><span class="fa fa-home mr-3"></span> Home</a>
          </li>
          <li>
              <a href="#"><span class="fa fa-user mr-3"></span> Dashboard</a>
          </li>
          <li>
            <a href="log_gudangIT.php"><span class="fa fa-sticky-note mr-3"></span> DAFTAR KELUAR MASUK BARANG IT</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-sticky-note mr-3"></span> INVENTARIS IT</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-paper-plane mr-3"></span> CEKLIST SERVIS</a>
          </li>
          <li>
		  <button class="dropdown-btn1">Control Harian
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container1">
    <a href="control_lpcabang.php">Laptop Cabang</a>
  </div>
  <button class="dropdown-btn1">Mutasi Barang IT
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-container1">
    <a href="mutasi_lebih1jt.php">Harga > 1jt</a>
    <a href="mutasi_kurang1jt">Harga < 1jt</a>
  </div>
          </li>
		</ul>
		
		</nav>
		
		<div id="content" class="p-4 p-md-5 pt-5">
    <?php  if (isset($_SESSION['user'])) : ?>
          <h6 align="right"><strong><u><?php echo $_SESSION['user']['pic']; ?></strong></u></h6><?php endif ?>
          <h6 align="right"><a href="index.php?logout='1'" style="color: red;">Logout</a></h6>
        <h2 class="mb-4">DAFTAR KELUAR MASUK BARANG IT</h2>
		<input type="text" id="input" onkeyup="searchTable()" placeholder="Cari Barang.." required>
		<table class="table table-striped table-bordered table-hover" border="1">
			<thead align="center" class="thead-dark">
    <tr class="font-tr"><th>NO</th><th>NAMA BARANG</th><th>NOMOR REGISTER</th><th>SERIAL NUMBER</th><th>QTY</th><th>TANGGAL MASUK</th><th>TANGGAL KELUAR</th><th>CABANG/PUSAT</th><th>PIC</th><th>HISTORI BARANG</th><th>KETERANGAN</th></tr>
	<?php
	//include 'koneksi.php';
    $loggudang = mysqli_query($db, "SELECT * from db_keluarmasuk_barangit");
    $no=1;
    while($d = mysqli_fetch_array($loggudang)){
		?>
			<tr class="font-tr">
            <td><?php echo $no++ ?></td>
            <td><?php echo $d['nama_barang']; ?></td>
            <td><?php echo $d['no_regist']; ?></td>
            <td><?php echo $d['serial_no']; ?></td>
			      <td><?php echo $d['qty']; ?></td>
			      <td><?php echo $d['tgl_masuk']; ?></td>
			      <td><?php echo $d['tgl_keluar']; ?></td>
			      <td><?php echo $d['cabang']; ?></td>
			      <td><?php echo $d['pic']; ?></td>
			      <td><?php echo $d['histori_barang']; ?></td>
		      	<td><?php echo $d['keterangan']; ?></td>
			  </tr>
		<?php
    }
    ?>
</table>
<button id="myBtn" class="act-btn">+</button>

			</div>
	</div>
      </div>
		</div>
		<div class="footer">
		Copyright &copy;<script>document.write(new Date().getFullYear());</script> PT. Multindo Auto Finance | IT Infrastructure and Hardware 
		</div>
</body>
	<script>var dropdown = document.getElementsByClassName("dropdown-btn1");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
} </script>
<script>
                        function searchTable() {
                            var input;
                            var saring;
                            var status; 
                            var tbody; 
                            var tr; 
                            var td;
                            var i; 
                            var j;
                            input = document.getElementById("input");
                            saring = input.value.toUpperCase();
                            tbody = document.getElementsByTagName("tbody")[0];;
                            tr = tbody.getElementsByTagName("tr");
                            for (i = 0; i < tr.length; i++) {
                                td = tr[i].getElementsByTagName("td");
                                for (j = 0; j < td.length; j++) {
                                    if (td[j].innerHTML.toUpperCase().indexOf(saring) > -1) {
                                        status = true;
                                    }
                                }
                                if (status) {
                                    tr[i].style.display = "";
                                    status = false;
                                } else {
                                    tr[i].style.display = "none";
                                }
                            }
                        }
                        </script>

	<script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</html>;