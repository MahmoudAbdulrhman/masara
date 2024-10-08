import React from 'react';
import { Card, Container,Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../regTab/regTab.css'; // Ensure this path is correct

// Define an array of FAQ items
const faqData = [
  {
    title: "About MASRA Homeschooling",
    content: [
      {
        question: "What is MASRA Homeschooling?",
        answer: "MASRA Homeschooling is a one-stop-shop educational center that provides core and enrichment courses to homeschooling families."
      },
      {
        question: "What kind of classes do you offer?",
        answer: "We offer a variety of core classes, such as math, language arts, science, and social studies, as well as enrichment courses in areas like art, music, Robotics, and more."
      },
      {
        question: "Are your classes for all ages?",
        answer: "Yes, we offer classes for students of all ages, from preschool through high school."
      }
    ]
  },
  {
    title: "Enrollment",
    content: [
      {
        question: "How do I enroll my child in a class?",
        answer: "You can find more information about enrollment on our website, or you can contact us directly to speak with an advisor."
      },
      {
        question: "What is the cost of classes?",
        answer: "The cost of classes varies depending on the course, the length of the session, and other factors. Please contact us for more information."
      },
      {
        question: "Do you offer financial aid?",
        answer: "We offer a limited amount of financial aid to qualifying families. Please contact us for more information."
      }
    ]
  },
  {
    title: "Curriculum and Instruction",
    content: [
      {
        question: "What curriculum do you use?",
        answer: "We use a variety of curriculums that are aligned with California state standards. We also take into account the individual needs and learning styles of our students."
      },
      {
        question: "What is your class size?",
        answer: "Our class sizes are small, which allows us to provide our students with individualized attention."
      },
      {
        question: "Do you offer extracurricular activities?",
        answer: "We offer a variety of extracurricular activities, such as clubs, sports, and field trips."
      }
    ]
  },
  {
    title: "Teachers",
    content: [
      {
        question: "What kind of teachers do you have?",
        answer: "We have a team of passionate and qualified teachers who are experienced in homeschooling. All our teachers are credentialed or have extensive experience working with homeschooled students."
      },
      {
        question: "How do you screen your teachers?",
        answer: "We conduct a thorough screening process for all of our teachers, which includes background checks and reference checks."
      }
    ]
  },
  {
    title: "Additional Information",
    content: [
      {
        question: "Do you offer transportation?",
        answer: "We do not offer transportation at this time."
      },
      {
        question: "What are your hours of operation?",
        answer: "Our office hours are Monday-Thursday from 9:00 am to 3:00 pm."
      },
      {
        question: "How can I contact you?",
        answer: "You can contact us by email at <a href='mailto:info@masrahs.org'>info@masrahs.org</a>."
      },
      {
        question: "What safety protocols do you have in place?",
        answer: "Please contact us for information about our safety protocols."
      },
      {
        question: "Is there a dress code for students?",
        answer: "There is no specific dress code, but students are expected to dress appropriately for a learning environment."
      }
    ]
  }
];



const FAQSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="faqs m-2 text-center text-white py-5">
        <Container>
          <h1 className="display-4 animate__animated animate__fadeIn text-black">Welcome to MASRA Homeschooling</h1>
          <p className="lead animate__animated animate__fadeIn animate__delay-1s text-shadow text-background font-bold text-black">
            Explore our FAQs to learn more about our Core and Enrichment Courses
          </p>
        </Container>
      </div>

      {/* FAQ Section */}
      <Container className="mt-5">
        <h2 className="text-center mb-4 animate__animated animate__fadeIn">MASRA Homeschooling FAQs</h2>
        <Accordion defaultActiveKey="0">
          {faqData.map(({ title, content }, index) => (
            <Card key={index} className={`mb-4 animate__animated animate__fadeIn animate__delay-${index + 1}s`}>
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header className="bg-light text-black">
                  <h4>{title}</h4>
                </Accordion.Header>
                <Accordion.Body>
                  {content.map(({ question, answer }, i) => (
                    <div key={i} className="mb-3">
                      <h5>{question}</h5>
                      <p dangerouslySetInnerHTML={{ __html: answer }}></p>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};



export default FAQSection;
