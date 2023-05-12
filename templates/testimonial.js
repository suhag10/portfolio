
function uiTestimonialDiv() {
  return `
    <section class="testimonials_area pt-50 pb-50 mt-50">
      <div class="container">
          <div class="section_title">
              <span>Testimonials</span>
              <h2>Sweet Comment</h2>
          </div>
          <div class="row">
              <div class="col-xl-12 fix">
                  ${Testimonial()}
              </div>
          </div>
      </div>
    </section>
  `;
}

function Testimonial() {

  var dataTestimonial  = [
      {fname:"Saidul Hussen",  uname:"saidul",  image:"testimonial-3.jpg",  content:"Very impressive! keep up the amazing work Ma sha Allah",  url:"https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870/"},
      {fname:"Tasnim Juhee", uname:"tasnim", image:"testimonial-2.png", content:"Absolutely amazing...carry on ❤", url:"https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870/"},
      {fname:"Md Inzamamul Haque", uname:"inzamamul", image:"testimonial-4.jpg", content:"Wow! That's awesome!", url:"https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870/"},
      {fname:"Sabbir Ahmed", uname:"sabbir", image:"testimonial-5.jpg", content:"Awesome", url:"https://www.facebook.com/groups/learnwithfreelancerlab/permalink/326997802606870/"},
      {fname:"Jid AN", uname:"jid-an", image:"testimonial-1.png", content:"Great work", url:"https://www.facebook.com/photo/?fbid=3445963055638002"},
      {fname:"Emad Hussen", uname:"emad", image:"testimonial-6.jpg", content:"Keep up the good work!", url:"https://www.facebook.com/photo/?fbid=3445963055638002"},
      {fname:"Jid AN", uname:"jid-an", image:"testimonial-1.png", content:"Keep it up", url:"https://www.facebook.com/groups/learnwithfreelancerlab/permalink/557122046261110/"}
      // {fname:"",  uname:"",  image:"",  content:"",  url:""},
  ]

  let dataTLength = dataTestimonial.length;

  let arrayT = '<div class="testimonial_active owl-carousel owl-theme">';
  for (let i = 0; i < dataTLength; i++) {
      
    arrayT += `
      <div class="single_testimonial">
        <div class="testimonial_person">
          <div class="testimonial_avater">
            <img src="assets/img/testimonial/${dataTestimonial[i].image}" alt="..." class="img-fluid">
          </div>
          <div class="testimonial_info">
            <h5>${dataTestimonial[i].fname}</h5>
            <a href="${dataTestimonial[i].url}" target="_blank" rel="noopener noreferrer"><span>@${dataTestimonial[i].uname}</span></a>
          </div>
        </div>
        <div class="testimonial_text">
          <p>${dataTestimonial[i].content}</p>
        </div>
      </div>
    `;
  }
  arrayT += '</div>';
  return arrayT;

}

