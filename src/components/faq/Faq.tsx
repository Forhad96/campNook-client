import ComHeader from "../shared/ComHeader";
import Container from "../shared/Container";

const questions = [
  {
    question: "What is CampNook?",
    answer:
      "CampNook is an e-commerce website dedicated to providing all the necessary and fun items for camping enthusiasts.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes, we offer free shipping on all orders.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We have a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support 24/7 via email at support@campnook.com or call us at 1-800-123-4567.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes, all our products come with a warranty. The duration of the warranty varies by product.",
  },
];

export default function Faq() {
  return (
    <Container py="py-10">
      <header>
        <ComHeader
          head="Frequently Asked Questions"
          dic="Find answers to common questions about CampNook, our products, and services."
        />
      </header>
      {/*<!-- Component: Basic accordion --> */}
      <section className="w-full divide-y rounded divide-slate-200">
        {questions.map((item, index) => (
          <details key={index} className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden">
              {item.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby={`title-ac${index} desc-ac${index}`}
              >
                <title id={`title-ac${index}`}>Open icon</title>
                <desc id={`desc-ac${index}`}>
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">{item.answer}</p>
          </details>
        ))}
      </section>
      {/*<!-- End Basic accordion --> */}
    </Container>
  );
}
