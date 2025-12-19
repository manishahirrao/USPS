import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'USPS Tracking Complaint Form | Report Delivery or Tracking Issues',
  description:
    'Use our USPS tracking complaint form to report issues with your USPS tracking number, package status, or delivery experience. Submit details so we can review your USPS tracking complaint and help you resolve problems.',
}

export default function ComplaintLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
