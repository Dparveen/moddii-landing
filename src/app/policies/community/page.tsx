import type { Metadata } from 'next';
import PolicyLayout from '@/components/ui/PolicyLayout';
export const metadata: Metadata = { title: 'Community Guidelines' };

export default function CommunityPage() {
  return (
    <PolicyLayout title="Community Guidelines" updated="January 1, 2025">
      <h2>The Moodiii Spirit</h2>
      <p>Moodiii is built on the idea that the best experiences happen when the right people come together. These guidelines exist to make sure Moodiii remains a safe, respectful, and genuinely fun place for everyone.</p>

      <h2>✅ Do&apos;s — Be a Good Viber</h2>
      <ul>
        <li><strong>Be genuine.</strong> Use a real photo, real name, and honest profile information. Authenticity makes better connections.</li>
        <li><strong>Be respectful.</strong> Treat every person you meet through Moodiii with kindness and respect, regardless of background, gender, or beliefs.</li>
        <li><strong>Show up.</strong> If you accept a Vibe (as Creator or Joiner), honor your commitment. Cancel early if plans change — don&apos;t ghost.</li>
        <li><strong>Honor payment agreements.</strong> If a Vibe has a payment commitment, pay your share promptly and fairly.</li>
        <li><strong>Give honest ratings.</strong> Post-Vibe ratings help the community. Be honest but constructive.</li>
        <li><strong>Report problems.</strong> If something feels wrong or unsafe, report it immediately through the App. You&apos;re helping everyone by speaking up.</li>
      </ul>

      <h2>🚫 Don&apos;ts — Hard No&apos;s</h2>
      <ul>
        <li><strong>No harassment.</strong> Zero tolerance for bullying, threats, sexual harassment, or any form of intimidation — online or in person.</li>
        <li><strong>No discrimination.</strong> Do not discriminate based on religion, caste, gender, sexual orientation, disability, or any other protected characteristic.</li>
        <li><strong>No illegal activity.</strong> Vibes must be legal. No drug deals, no solicitation, no fraud — this results in immediate permanent ban plus legal action.</li>
        <li><strong>No spam or promotions.</strong> Don&apos;t use Moodiii to promote businesses, sell products, or send unsolicited messages.</li>
        <li><strong>No fake profiles.</strong> Impersonating someone else or creating a profile with false information is strictly prohibited.</li>
        <li><strong>No explicit content.</strong> Do not share sexually explicit content, violent imagery, or anything that would make others uncomfortable.</li>
        <li><strong>No ghosting.</strong> Accepting a Vibe and not showing up without notice may result in account restrictions.</li>
      </ul>

      <h2>Safety Tips</h2>
      <ul>
        <li>Meet for the first time in public places.</li>
        <li>Tell a friend where you&apos;re going and who you&apos;re meeting.</li>
        <li>Trust your instincts — if something feels off, leave.</li>
        <li>Never share financial information with other users outside of the official payment system.</li>
        <li>Block and report anyone who makes you feel unsafe.</li>
      </ul>

      <h2>Enforcement</h2>
      <p>Violations of these guidelines may result in:</p>
      <ul>
        <li>Warning and content removal</li>
        <li>Temporary account suspension</li>
        <li>Permanent account ban</li>
        <li>Reporting to law enforcement where applicable</li>
      </ul>
      <p>Moodiii moderators review all reports and aim to respond within <strong>24 hours</strong>. Decisions made by our Trust & Safety team are final, though you may appeal by emailing <strong>safety@moodiii.app</strong>.</p>

      <h2>Contact</h2>
      <p>Trust & Safety: <strong>safety@moodiii.app</strong><br />In an emergency, always contact local authorities first.</p>
    </PolicyLayout>
  );
}
