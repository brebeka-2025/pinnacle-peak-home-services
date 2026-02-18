import Accordion from '../ui/Accordion'

export default function FAQItem({ question, children }) {
  return <Accordion question={question}>{children}</Accordion>
}
