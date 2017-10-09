<?php
$selecteds = filter_input(INPUT_GET, 'selecteds', FILTER_SANITIZE_SPECIAL_CHARS);
echo '  
 <script type="text/javascript">

$(document).ready(function(){
var selected = [];
var ids = [' . $selecteds . '];' . chr(13);

echo "

for (var i = 0; i < ids.length; i++) {
    var select = Utilities.loadEmployee(ids[i]);
    selected.push(select);
    Utilities.updateSeleteds(selected);
}
$('.btnRemove').remove();
});
</script>";

?>
<div class="row">
    <div id="employees-selected" class="col-xs-12 col-sm-12 col-lg-12 col-md-12">

    </div>
</div>

<table class="table table-responsive" id="table-form">
  <thead>
    <tr>
      <th>Day</th>
      <th>Start</th>
      <th>End</th>
      <th>Duration</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>        
<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button type="button" class="btn btn-primary btn-lg btn-block btnLink" id="btn-index">Back</button>							
</div>		
