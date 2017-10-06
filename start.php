<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/popper.js"></script>
        <script src="js/bootstrap.min.js"></script>  
        <script src="js/script.js"></script>
        <script src="js/html_helper.js"></script>
        <script src="js/Utilities.js"></script>
        <script src="js/render.js"></script>
        <script type="text/javascript">
            $(document).ready(function(){
                    $('.btnAdd').click(function(){  

                   var select = Utilities.loadEmployee(this.id);
                   selected.push(select);

               });   
                
            });
        </script>
    </head>
    <body>
        <div class="container">
            <?php
            $content = filter_input(INPUT_GET, 'content', FILTER_SANITIZE_SPECIAL_CHARS);
            if (is_null($content)) {
                echo '	<div class="col-xs-6 col-sm-6 col-md-12 col-lg-12">
                                <button type="button" class="btn btn-primary btn-lg btn-block btnLink" id="btn-selectemployees">Include new Timesheet</button>							
                                <button type="button" class="btn btn-secondary btn-lg btn-block btnLink" id="btn-manage">Manage Timesheets</button>		
                        </div>		
                ';
            } else {
                include $content . ".php";
            }
            ?>
        </div>
    </body>
</html>
