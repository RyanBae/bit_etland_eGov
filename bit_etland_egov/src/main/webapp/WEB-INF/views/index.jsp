<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/defaulte/singup.css" />
  <link rel="shortcut icon" href="<%=application.getContextPath()%>/resources/img/favicon.ico">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <style>
    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
    .row.content {height: 1500px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height: auto;} 
    }
    
    /* html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif} */
  </style>
</head>
<body>
<div id="wrapper">
<div id="container" class="container-fluid">
  <div id="full_content" class="row content">
    <div id="left_content" class="col-sm-3 sidenav">
      <h4>John's Blog</h4>
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="">Home</a></li>
        <li><a href="#">Friends</a></li>
        <li><a href="#">Family</a></li>
        <li><a href="#">Photos</a></li>
      </ul><br>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Blog..">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div> <!-- left_content -->

    <div id="right_content" class="col-sm-9">
    	<div id="posts">
    		<h4><small>RECENT POSTS</small></h4>
	      <hr>
	      <h2>I Love Food</h2>
	      <h5><span class="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
	      <h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5><br>
	      <p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	      <br><br>
	      
	      <h4><small>RECENT POSTS</small></h4>
	      <hr>
	      <h2>Officially Blogging</h2>
	      <h5><span class="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
	      <h5><span class="label label-success">Lorem</span></h5><br>
	      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	      <hr>
    	</div>
      	<div id="comments">
      		<h4>Leave a Comment:</h4>
		      <form role="form">
		        <div class="form-group">
		          <textarea class="form-control" rows="3" required></textarea>
		        </div>
		        <button type="submit" class="btn btn-success">Submit</button>
		      </form>
		      <br><br>
	      
	      <p><span class="badge">2</span> Comments:</p><br>
	      
		      <div class="row">
		        <div class="col-sm-2 text-center">
		          <img src="<%=application.getContextPath()%>/resources/img/bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar">
		        </div>
		        <div class="col-sm-10">
		          <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
		          <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		          <br>
		        </div>
		        <div class="col-sm-2 text-center">
		          <img src="<%=application.getContextPath()%>/resources/img/bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
		        </div>
		        <div class="col-sm-10">
		          <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
		          <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		          <br>
		          <p><span class="badge">1</span> Comment:</p><br>
		          <div class="row">
		            <div class="col-sm-2 text-center">
		              <img src="<%=application.getContextPath()%>/resources/img/bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
		            </div>
		            <div class="col-xs-10">
		              <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
		              <p>Me too! WOW!</p>
		              <br>
		            </div>
		          </div>
		        </div>
		      </div>
	      	</div> <!-- comments -->
    	 </div> <!-- right content -->
  	  </div> <!-- full_content -->
	</div> <!-- container -->
</div> <!-- wapper end -->
<footer class="container-fluid">
  <p>Footer Text</p>
</footer>
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/router.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/component/compo.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/employee/emp.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/customer/cust.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/common/auth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/prd/prd.js"></script>
<script>

app.init('<%=application.getContextPath()%>');
</script>
</body>
</html>
