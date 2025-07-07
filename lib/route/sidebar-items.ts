import {
  Book,
  FileUser,
  LayoutDashboard,
  LibraryBig,
  TagIcon,
  Users,
} from "lucide-react";

export const sidebar_items = [
  {
    id: 1,
    title: "Dashboard",
    icon: LayoutDashboard,
    link: "/etcmf/dashboard",
  },
  {
    id: 2,
    title: "Records",
    icon: LibraryBig,
    link: "/etcmf/records",
  },
  {
    id: 3,
    title: "Users",
    icon: Users,
    link: "/etcmf/user-management",
  },
  {
    id: 4,
    title: "Penalty & Violation",
    icon: TagIcon,
    link: "/etcmf/penalty-violation-management",
  },
  {
    id: 5,
    title: "DTR",
    icon: FileUser,
    link: "/etcmf/dtr",
  },
  {
    id: 6,
    title: "Logbook",
    icon: Book,
    link: "/etcmf/logbook",
  },
];
