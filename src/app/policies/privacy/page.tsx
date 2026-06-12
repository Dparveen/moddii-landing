import type { Metadata } from 'next';
import PolicyLayout from '@/components/ui/PolicyLayout';
export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="January 1, 2025">
      <h2>1. Introduction</h2>
      <p>Moodiii Technologies Private Limited ("Moodiii", "we", "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and protect information about you when you use our App and services.</p>

      <h2>2. Information We Collect</h2>
      <p><strong>Information you provide directly:</strong></p>
      <ul>
        <li>Name, email address, phone number, date of birth, and gender at registration.</li>
        <li>Profile photo and bio.</li>
        <li>Vibe details including title, description, location, date, preferences, and payment type.</li>
        <li>Messages sent through in-app chat.</li>
        <li>Payment information (processed securely by third-party gateways — we do not store card details).</li>
      </ul>
      <p><strong>Information collected automatically:</strong></p>
      <ul>
        <li>Device information (model, OS version, unique device identifiers).</li>
        <li>Location data (approximate and precise, with your permission).</li>
        <li>App usage data, crash reports, and interaction logs.</li>
        <li>IP address and network information.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To provide and improve the Moodiii service.</li>
        <li>To show you relevant Vibes nearby based on your location and preferences.</li>
        <li>To facilitate connections between users and enable group chat functionality.</li>
        <li>To send you notifications about Vibe requests, acceptances, and messages.</li>
        <li>To ensure safety and enforce our Terms & Community Guidelines.</li>
        <li>To process payments and resolve disputes.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>4. Location Data</h2>
      <p>Moodiii uses location data to show nearby Vibes and display your approximate location on Vibe listings. Precise location is only accessed with your explicit permission. You can disable location access at any time through your device settings.</p>

      <h2>5. Profile Visibility</h2>
      <p>Your display name, profile photo, bio, and rating are visible to other Moodiii users. Your phone number and email address are <strong>never</strong> shared with other users. Your precise residential address is never collected or stored.</p>

      <h2>6. Data Sharing</h2>
      <p>We do not sell your personal data. We may share data with:</p>
      <ul>
        <li><strong>Service providers</strong> who help us operate the App (cloud hosting, payment processing, analytics).</li>
        <li><strong>Law enforcement</strong> when required by law or to protect user safety.</li>
        <li><strong>Successor entities</strong> in the event of a merger or acquisition, with notice to users.</li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>We retain your account data for as long as your account is active. If you delete your account, your personal data is deleted within <strong>30 days</strong>, except where required by law.</p>
      <p>Chat messages are retained for <strong>90 days</strong> after the Vibe date before being permanently deleted.</p>

      <h2>8. Your Rights</h2>
      <p>Under applicable Indian data protection law, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Correct inaccurate or incomplete data.</li>
        <li>Request deletion of your account and associated data.</li>
        <li>Withdraw consent for location or notification access at any time.</li>
        <li>Lodge a complaint with the relevant data protection authority.</li>
      </ul>
      <p>To exercise these rights, contact us at <strong>privacy@moodiii.app</strong>.</p>

      <h2>9. Security</h2>
      <p>We implement industry-standard security measures including encryption in transit (TLS/SSL), encrypted storage, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.</p>

      <h2>10. Children's Privacy</h2>
      <p>Moodiii is not intended for users under 18 years of age. We do not knowingly collect data from minors. If we discover that a user is under 18, their account will be immediately terminated.</p>

      <h2>11. Contact</h2>
      <p>For privacy-related queries: <strong>privacy@moodiii.app</strong><br />Moodiii Technologies Private Limited, Chandigarh, India – 160017</p>
    </PolicyLayout>
  );
}
