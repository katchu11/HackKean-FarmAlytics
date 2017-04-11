    <?php
        $selected_val='';
          if(isset($_GET['location'])){
            $selected_val = $_GET['location'];
        }
        echo $selected_val;
?>