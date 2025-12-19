import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Our Free USPS Tracking Portal | Donate | USPS Tracking',
  description:
    'Support our free USPS tracking portal with a one-time or monthly donation. Help keep USPS tracking tools online and free so users can enter USPS tracking numbers and quickly check official package status and delivery updates.',
}

export default function DonationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
