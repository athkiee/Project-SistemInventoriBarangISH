<?php include('functions.php') ?>

<!DOCTYPE html>
<html>
    <head>
        <title>.: Inventory Hardware - ISH MAF :.</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
<div class="header">
    <h2>Register</h2>
</div>
<body>
<form method="post" action="register.php">

    <?php echo display_error(); ?>

    <div class="input-group">
        <label>Username</label>
        <input type="text" name="username" value="<?php echo $username; ?>">
    </div>
    <div class="input-group">
        <label>Email</label>
        <input type="text" name="email" value="<?php echo $email; ?>">
    </div>
    <div class="input-group">
        <label>Password</label>
        <input type="password" name="password_1">
    </div>
    <div class="input-group">
        <label>Confirm Password</label>
        <input type="password" name="password_2">
    </div>
    <div class="input-group">
        <button type="submit" class="btn" name="register_btn">Register</button>
    </div>
    <center><p>Already a member? <a href="login.php">Sign In</a></p></center>
</form>
</body>
</html>