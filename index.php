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
		<img src="images/multindo_logo.jpg" alt="" height="100px" weight="200px" align="right" border="3">
		<br>
		<br>
        <h2 class="mb-4">Selamat Datang,</h2>
		<div class="content">
		<!-- notification message -->
		<?php if (isset($_SESSION['success'])) : ?>
			<div class="error success" >
				<h3>
					<?php 
						echo $_SESSION['success']; 
						unset($_SESSION['success']);
					?>
				</h3>
			</div>
		<?php endif ?>
		<!-- logged in user information -->
		<div class="profile_info">
			<img src="images/user_profile.png">
			<div>
				<?php  if (isset($_SESSION['user'])) : ?>
					<strong><?php echo $_SESSION['user']['username']; ?></strong>
					<small>
						<i  style="color: #888;">(<?php echo ucfirst($_SESSION['user']['user_type']); ?>)</i> 
						<br>
						<?php echo $_SESSION['user']['pic']; ?>
						<h6 align="right"><a href="index.php?logout='1'" style="color: red;">Logout</a></h6>
					</small>
				<?php endif ?>
			</div>
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
	<script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
</html>;