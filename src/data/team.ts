const team1 = "/assets/team-1.jpg";
const team2 = "/assets/team-2.jpg";
const team3 = "/assets/team-3.jpg";
const team4 = "/assets/team-4.jpg";

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
