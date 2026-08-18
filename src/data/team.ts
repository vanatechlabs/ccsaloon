import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  experience: string;
}

export const TEAM: TeamMember[] = [
  { name: "Aanya Sharma", role: "Creative Director · Hair", image: team1, experience: "12+ yrs" },
  { name: "Riya Mehra", role: "Senior Makeup Artist", image: team2, experience: "10+ yrs" },
  { name: "Sana Kapoor", role: "Lead Nail Technician", image: team3, experience: "8+ yrs" },
  { name: "Meher Singh", role: "Skin & Spa Therapist", image: team4, experience: "9+ yrs" },
];
