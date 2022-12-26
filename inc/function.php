<?php
include "ui-config.php";
include "ui-head.php";

function Testimonial(){
  
  function setup_testimonial($Fname, $Uname, $image, $content, $url) {
    ob_start();
    ?>
      <div class="single_testimonial">
          <div class="testimonial_person">
              <div class="testimonial_avater">
                  <img src="assets/img/testimonial/<?php echo $image;?>" alt="..." class="img-fluid">
              </div>
              <div class="testimonial_info">
                  <h5><?php echo $Fname;?></h5>
                  <a href="<?php echo $url;?>" target="_blank" rel="noopener noreferrer"><span>@<?php echo $Uname;?></span></a>
              </div>
          </div>
          <div class="testimonial_text">
              <p><?php echo $content;?></p>
          </div>
      </div>
    <?php
    return ob_flush();
  }

  $data_testimonial = array (
    array("Saidul Hussen", "saidul", "testimonial-3.jpg", "Very impressive! keep up the amazing work Ma sha Allah", "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870/"),
    array("Tasnim Juhee", "tasnim", "testimonial-2.png", "Absolutely amazing...carry on ❤", "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870/"),
    array("Md Inzamamul Haque", "inzamamul", "testimonial-4.jpg", "Wow! That's awesome!", "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870/"),
    array("Sabbir Ahmed", "sabbir", "testimonial-5.jpg", "Awesome", "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870/"),
    array("Jid AN", "jid-an", "testimonial-1.png", "Great work", "https://www.facebook.com/photo/?fbid=3445963055638002"),
    array("Emad Hussen", "emad", "testimonial-6.jpg", "Keep up the good work!", "https://www.facebook.com/photo/?fbid=3445963055638002"),
    array("Jid AN", "jid-an", "testimonial-1.png", "Keep it up", "https://www.facebook.com/groups/learnwithfreelancerlab/permalink/557122046261110/"),
    // array("Fname", "Uname", "testimonial-0.jpg", "content", "url"),
  );

  $dataLength = count($data_testimonial);
  for($x = 0; $x < $dataLength; $x++) {
    setup_testimonial($data_testimonial[$x][0], $data_testimonial[$x][1], $data_testimonial[$x][2], $data_testimonial[$x][3], $data_testimonial[$x][4]);
  }

}
// plugin
// Testimonial();