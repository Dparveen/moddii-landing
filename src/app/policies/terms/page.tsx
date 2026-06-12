import type { Metadata } from 'next';
import PolicyLayout from '@/components/ui/PolicyLayout';
export const metadata: Metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions" updated="January 1, 2025">
      <h2>1. Acceptance of Terms</h2>
      <p>By downloading, installing, or using the Moodiii application ("App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our App. Moodiii is operated by Moodiii Technologies Private Limited, registered in India.</p>

      <h2>2. Eligibility</h2>
      <p>You must be at least <strong>18 years of age</strong> to use Moodiii. By using the App, you represent and warrant that you meet this requirement. Users between 18–21 years may have certain restrictions based on the nature of the vibe (e.g., vibes involving alcohol).</p>

      <h2>3. Account Registration</h2>
      <p>To access core features, you must create an account. You agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
      <ul>
        <li>One account per person — multiple accounts are not permitted.</li>
        <li>You may not create an account on behalf of another person.</li>
        <li>Accounts with false or misleading information may be suspended or permanently banned.</li>
      </ul>

      <h2>4. Vibes — User-Generated Content</h2>
      <p>A "Vibe" is an event or activity created by a user on the platform. By creating a Vibe, you agree to:</p>
      <ul>
        <li>Provide accurate details including location, time, payment expectations, and participation requirements.</li>
        <li>Show up to the Vibe you created, or cancel with at least <strong>12 hours</strong> advance notice.</li>
        <li>Not use Vibes to solicit, advertise, or promote any commercial activity without prior written approval.</li>
        <li>Ensure the Vibe activity is lawful under applicable Indian law.</li>
      </ul>

      <h2>5. Joining Vibes</h2>
      <p>When you request to join a Vibe, you acknowledge that the Creator has the right to accept or reject your request without providing a reason, provided the rejection is not based on unlawful discrimination.</p>
      <p>Once accepted into a Vibe, you agree to honor any payment commitment specified in the Vibe details and to attend or cancel in a timely manner.</p>

      <h2>6. Payments</h2>
      <p>Moodiii may facilitate payment collection for certain Vibes. All transactions are processed through third-party payment gateways. By making a payment on the platform, you agree to their respective terms.</p>
      <p>Payment disputes must be raised within <strong>48 hours</strong> of the scheduled Vibe end time. Please refer to our Refund Policy for detailed information.</p>

      <h2>7. Prohibited Conduct</h2>
      <p>You agree NOT to:</p>
      <ul>
        <li>Use the platform for any illegal activity including drug distribution, sexual solicitation, or financial fraud.</li>
        <li>Harass, bully, threaten, or intimidate other users.</li>
        <li>Share false or misleading information on your profile or in Vibes.</li>
        <li>Attempt to access other users' accounts or data without authorization.</li>
        <li>Scrape, reverse engineer, or copy any part of the App.</li>
        <li>Post content that is hateful, discriminatory, obscene, or violates any law.</li>
      </ul>

      <h2>8. Privacy</h2>
      <p>Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>

      <h2>9. Limitation of Liability</h2>
      <p>Moodiii is a platform that facilitates connections between users. We do not organize, endorse, or guarantee the safety or quality of any Vibe. You participate in Vibes entirely at your own risk.</p>
      <p>To the maximum extent permitted by law, Moodiii's total liability to you for any claim shall not exceed ₹1,000 (Indian Rupees One Thousand).</p>

      <h2>10. Termination</h2>
      <p>We reserve the right to suspend or terminate your account at any time for violation of these Terms. You may delete your account at any time from the Profile settings within the App.</p>

      <h2>11. Governing Law</h2>
      <p>These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in <strong>Chandigarh, India</strong>.</p>

      <h2>12. Changes to Terms</h2>
      <p>We may update these Terms from time to time. We will notify you of significant changes via the App. Continued use constitutes your acceptance of the updated Terms.</p>

      <h2>13. Contact</h2>
      <p>For any questions: <strong>legal@moodiii.app</strong></p>
    </PolicyLayout>
  );
}
