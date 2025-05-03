import {
  AlarmClock,
  Banknote,
  ClipboardList,
  FileWarning,
  MessageSquareMore,
  OctagonAlert,
  SquareKanban,
} from "lucide-react";

export const NotificationMockdata = [
  {
    icon: MessageSquareMore,
    read: false,
    title: "Dispute Request",
    description:
      "A dispute has been filed for Violation #TICK78901 by John Smith. Reason: 'The traffic light was malfunctioning.' Please review and take action.",
  },
  {
    icon: SquareKanban,
    read: true,
    title: "Dispute Request",
    description:
      "A dispute has been filed for Violation #TICK78901 by John Smith. Reason: 'The traffic light was malfunctioning.' Please review and take action.",
  },
  {
    icon: ClipboardList,
    read: false,
    title: "New Violation Issued",
    description:
      "A new traffic violation has been issued by Officer John Doe. Violation ID: #TICK12345, Offense: Speeding (80 km/h in a 50 km/h zone).",
  },
  {
    icon: AlarmClock,
    read: false,
    title: "Payment Due Reminder",
    description:
      "Reminder: Payment for Violation #TICK56789 is due in 3 days. Offense: Running a red light. Amount: $150. Please follow up with the violator if needed.",
  },
  {
    icon: Banknote,
    read: false,
    title: "Payment Received",
    description:
      "Payment received for Traffic Violation #TICK12345. Amount: $100.00. The violation is now marked as resolved.",
  },
  {
    icon: OctagonAlert,
    read: true,
    title: "System Maintenance or Updates",
    description:
      "Scheduled Maintenance: The system will be down for maintenance on March 30th from 2:00 AM to 4:00 AM. Please save your work before this time.",
  },
  {
    icon: FileWarning,
    read: true,
    title: "Unresolved Violations",
    description:
      "You have 5 unresolved traffic violations that require follow-up. Please review Violation IDs: #TICK12345, #TICK67890, #TICK45678, #TICK56789, and #TICK67801.",
  },
];
