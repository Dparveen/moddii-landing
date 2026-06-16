import type { Metadata } from 'next';
import PolicyLayout from '@/components/ui/PolicyLayout';

export const metadata: Metadata = {
  title: 'Child Safety Standards',
};

export default function ChildSafetyPage() {
  return (
    <PolicyLayout title="Child Safety Standards" updated="January 1, 2025">
      <p>
        Moodiii is committed to maintaining a safe environment for all users.
        We have a zero-tolerance policy toward child sexual abuse and exploitation
        (CSAE). Our platform strictly prohibits any content, behavior, or activity
        that exploits, endangers, or harms children.
      </p>

      <h2>1. Zero-Tolerance Policy</h2>
      <p>
        Moodiii does not allow any form of child sexual abuse, exploitation,
        grooming, trafficking, or harmful conduct involving minors. Any violation
        of this policy may result in immediate account suspension, permanent
        removal from the platform, and reporting to relevant law enforcement
        authorities.
      </p>

      <h2>2. Prohibited Content and Activities</h2>
      <p>Users must not:</p>
      <ul>
        <li>
          Share, upload, distribute, store, promote, or request Child Sexual
          Abuse Material (CSAM).
        </li>
        <li>
          Engage in grooming, exploitation, manipulation, or inappropriate
          communication with minors.
        </li>
        <li>
          Use the platform to facilitate, encourage, or organize activities that
          endanger children.
        </li>
        <li>
          Impersonate minors or misrepresent the age of any individual.
        </li>
        <li>
          Solicit, advertise, or participate in any illegal activity involving
          minors.
        </li>
      </ul>

      <h2>3. Reporting and Enforcement</h2>
      <p>
        We actively investigate reports related to child safety. When we become
        aware of content or behavior that may violate this policy, we may:
      </p>
      <ul>
        <li>Remove the content immediately.</li>
        <li>Restrict, suspend, or permanently terminate accounts.</li>
        <li>Preserve relevant information where legally required.</li>
        <li>
          Report illegal activity to law enforcement agencies and child
          protection organizations.
        </li>
      </ul>

      <h2>4. User Responsibilities</h2>
      <p>
        All users are expected to help maintain a safe community. If you encounter
        content, profiles, messages, or behavior that may involve child
        exploitation or abuse, please report it immediately.
      </p>

      <h2>5. Age Restrictions</h2>
      <p>
        Moodiii is intended only for users who are at least 18 years old. We do
        not knowingly permit minors to create accounts or use the platform. If we
        discover that an account belongs to a minor, we may remove the account
        and associated data.
      </p>

      <h2>6. Cooperation with Authorities</h2>
      <p>
        Moodiii cooperates with law enforcement agencies, child protection
        organizations, and regulatory authorities in investigating child safety
        concerns and complying with applicable laws.
      </p>

      <h2>7. Reporting Child Safety Concerns</h2>
      <p>
        If you believe a user, piece of content, or activity violates this Child
        Safety Policy, please report it through the in-app reporting system or
        contact us directly.
      </p>

      <p>
        <strong>Email:</strong> amitninja13@gmail.com
      </p>

      <h2>8. Policy Updates</h2>
      <p>
        We may update these Child Safety Standards from time to time to reflect
        legal requirements, industry best practices, and improvements to our
        safety measures. Continued use of Moodiii constitutes acceptance of any
        updates.
      </p>
    </PolicyLayout>
  );
}
