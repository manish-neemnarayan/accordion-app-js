const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

{/* <section class="faq">
        <header class="faq_header">
          <h3>Who are we?</h3>
          <button class="show_btn">+</button>
        </header>
        <p class="hidden">hsfjkj lklkjasldkfj jjlkajlsjf </p>
        
      </section> */}

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  const faq = document.querySelectorAll(".faq");
  const btnsArr = [...faq];

  btnsArr.forEach((item) => {
    let btn = item.querySelector("header > button");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      
      if(btn.textContent === "+") {
        btn.textContent = "-";
        item.querySelector("p").classList.toggle("hidden");
      } else {
        btn.textContent = "+";
        item.querySelector("p").classList.toggle("hidden");
      }
    })
  })
}

function createFaq() {

  faqData.forEach((item) => {
    const faq = document.createElement("section");
    faq.classList.add("faq");
  
    const header = document.createElement("header");
    header.classList.add("faq_header");
  
    const heading = document.createElement("h3");
    heading.textContent = item.question;
  
    const btn = document.createElement("button");
    btn.classList.add("show_btn");
    btn.textContent = "+";
  
    const para = document.createElement("p");
    para.classList.add("hidden");
    para.textContent = item.answer;
  
    // assemble the elements
    accordianBody.appendChild(faq);
    faq.appendChild(header);
    header.appendChild(heading);
    header.appendChild(btn);
    faq.appendChild(para);

  })

  showFaq();

}
createFaq();
function btnStatusUpdate() {
  
}


