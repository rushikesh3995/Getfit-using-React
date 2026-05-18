import React, { useState } from "react";
import "./FAQ.css";


 const faqData = [
  {
    question: "What is GETFIT, and how does it differ from other gyms?",
    answer:
      "GETFIT is an innovative fitness platform that upgrades traditional gyms into modern, customer-focused fitness hubs. Unlike regular gyms, we combine smart technology, personalized workout plans, and expert guidance to create a seamless fitness experience. Our goal is to make high-quality fitness accessible, affordable, and convenient for everyone.",
  },
  {
    question: "How do I sign up for a GETFIT membership?",
    answer:
      "Signing up for GETFIT is quick and simple. You can download the GETFIT app or visit our website, choose a membership plan that suits your goals, and complete the registration in just a few steps. Once done, you can immediately start accessing gyms and features included in your plan.",
  },
  {
    question: "Can I access multiple GETFIT gyms with my membership?",
    answer:
      "Yes, GETFIT allows access to multiple partner gyms depending on your membership plan. This flexibility lets you work out at different locations, making it convenient whether you're near home, work, or traveling within the city.",
  },
  {
    question: "How do I contact GETFIT?",
    answer:
      "You can easily reach GETFIT through the mobile app or the official website. We offer dedicated customer support to help you with memberships, technical issues, or general queries to ensure a smooth experience.",
  },
  {
    question: "What kind of facilities and equipment can I expect at a GETFIT gym?",
    answer:
      "GETFIT gyms are equipped with high-quality machines, clean workout spaces, and modern fitness environments. Most locations offer cardio zones, strength training equipment, and functional training areas designed to meet all fitness levels.",
  },
  {
    question: "Do you offer personal training at GETFIT gyms?",
    answer:
      "Yes, personal training services are available at selected GETFIT partner gyms. Certified trainers can help you with customized workout plans, proper form, and achieving your fitness goals more efficiently.",
  },
  {
    question: "What is the GETFIT Supplement Stack?",
    answer:
      "The GETFIT Supplement Stack is a curated selection of supplements designed to support your fitness journey. These may include protein, vitamins, and recovery aids, helping you improve performance, recovery, and overall health.",
  },
  {
    question: "How does the GETFIT mobile app enhance my fitness experience?",
    answer:
      "The GETFIT app acts as your personal fitness companion. It helps you track workouts, monitor progress, access personalized plans, and even use smart features like AI-based tools to improve your fitness routine.",
  },
  {
    question: "Are there any age or fitness level restrictions to join GETFIT?",
    answer:
      "GETFIT is designed for people of all fitness levels, from beginners to advanced athletes. While there may be minimum age requirements depending on gym policies, our programs are flexible and adaptable to suit everyone’s needs.",
  },
  {
    question: "Can I try a GETFIT gym before committing to a membership?",
    answer:
      "Yes, GETFIT offers trial sessions at selected partner gyms. This allows you to experience the facilities, environment, and services before choosing a membership plan that works best for you.",
  },
];


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="faq-question"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span className="icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;