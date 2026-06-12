import type { Metadata } from 'next';
import PolicyLayout from '@/components/ui/PolicyLayout';
export const metadata: Metadata = { title: 'Refund Policy' };

export default function RefundPage() {
  return (
    <PolicyLayout title="Refund Policy" updated="January 1, 2025">
      <h2>1. Overview</h2>
      <p>This Refund Policy governs payments made through the Moodiii platform for Vibes with a paid entry or contribution. We aim to be fair to both Vibe Creators and Joiners.</p>

      <h2>2. Eligible Refund Scenarios</h2>
      <p>You are eligible for a full refund in the following cases:</p>
      <ul>
        <li><strong>Creator cancellation:</strong> If the Vibe Creator cancels the Vibe for any reason, all accepted Joiners will receive a 100% refund automatically within 5–7 business days.</li>
        <li><strong>Joiner cancellation (within 24 hours of payment):</strong> If you cancel your participation within 24 hours of making payment AND the Vibe is more than 48 hours away, you are eligible for a full refund.</li>
        <li><strong>Technical error:</strong> If you were charged but not successfully added to the Vibe due to a technical error on our platform, you will receive a full refund.</li>
        <li><strong>Vibe does not happen:</strong> If a Vibe is marked as not completed due to a no-show by the Creator, Joiners will be automatically refunded.</li>
      </ul>

      <h2>3. Non-Refundable Scenarios</h2>
      <ul>
        <li>Cancellations made less than 24 hours before the Vibe start time are not eligible for a refund.</li>
        <li>If you attended the Vibe (location check-in recorded), no refund will be issued.</li>
        <li>Change of mind after the 24-hour refund window has passed.</li>
        <li>Disputes about quality of experience — Moodiii is a connecting platform and does not guarantee experience quality.</li>
      </ul>

      <h2>4. How to Request a Refund</h2>
      <p>To request a refund, go to <strong>My Vibes → [Vibe Name] → Request Refund</strong> within the App. Alternatively, email <strong>refunds@moodiii.app</strong> with your registered email, Vibe ID, and reason for refund.</p>
      <p>Refund requests must be submitted within <strong>48 hours</strong> of the Vibe's scheduled end time.</p>

      <h2>5. Processing Timeline</h2>
      <ul>
        <li>Refund requests are reviewed within <strong>2 business days</strong>.</li>
        <li>Approved refunds are processed within <strong>5–10 business days</strong> depending on your payment method.</li>
        <li>UPI refunds typically reflect within 1–3 business days.</li>
        <li>Credit/debit card refunds may take up to 10 business days.</li>
      </ul>

      <h2>6. Platform Fees</h2>
      <p>Any platform service fee charged by Moodiii (if applicable) is non-refundable unless the refund is due to a technical error on our part.</p>

      <h2>7. Disputes</h2>
      <p>If you believe a refund decision is incorrect, you may escalate to <strong>disputes@moodiii.app</strong>. We will respond within 5 business days. Moodiii's decision on refund disputes is final.</p>

      <h2>8. Contact</h2>
      <p>For refund-related support: <strong>refunds@moodiii.app</strong><br />Support hours: Monday–Saturday, 10 AM – 6 PM IST</p>
    </PolicyLayout>
  );
}
