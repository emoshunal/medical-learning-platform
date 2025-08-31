
import {
  Atom,
  Baby,
  Bone,
  BrainCircuit, ClipboardPlus, Dna,
  Droplet,
  Ear,
  Eye,
  Fingerprint, FlaskRound,
  HeartPulse,
  Microscope,
  PersonStanding, Pill,
  Soup,
  Sun,
  UserRound,
  Wind
} from "@tamagui/lucide-icons";


export const iconMap: Record<string, any> = {
  Anatomy: FlaskRound,
  Physiology: HeartPulse,
  Biochemistry: Fingerprint,
  Pathology: ClipboardPlus,
  Pharmacology: Pill,
  Microbiology: Atom,
  Immunology: Dna,
  Genetics: Dna,
  Histology: FlaskRound,
  Embryology: PersonStanding,
  Neuroscience: BrainCircuit,
  Oncology: Microscope,
  Pediatrics: Baby,
  Geriatrics: UserRound,
  Dermatology: Sun,
  Ophthalmology: Eye,
  ENT: Ear,
  Pulmonology: Wind,
  Gastroenterology: Soup,
  Nephrology: Droplet,
  Rheumatology: Bone,
}
