import { FlatList } from "react-native";
import { VideoCard } from "./components/video-card";


const videos = [
  {
    id: "1",
    title: "Introduction to Cardiology",
    description: "Basics of heart anatomy and function.",
    url: "https://youtu.be/co-TFLbaZAE?si=GVFOdjFGj-GdSekZ",
    uploadedBy: "J. Doe",
  },
  {
    id: "2",
    title: "Understanding Hypertension",
    description: "Causes, symptoms, and treatment options.",
    url: "https://youtu.be/-bC4iak3kxg?si=yTaS8rKBzfVkOGt2",
    uploadedBy: "A. Smith",
  },{
    id: "3",
    title: "Diabetes Management",
    description: "Effective strategies for managing diabetes.",
    url: "https://youtu.be/sy4P06QmmPk?si=rhIGEvCRyH56HURi",
    uploadedBy: "M. Johnson",
  },{
    id: "4",
    title: "Respiratory System Overview",
    description: "Anatomy and physiology of the respiratory system.",
    url: "https://youtu.be/0habxsuXW4g?si=rLNWTtpLr_pIGLz8",
    uploadedBy: "L. Brown",
  },{
    id: "5",
    title: "Bone Fractures",
    description: "Types, symptoms, and treatment of bone fractures.",
    url: "https://youtu.be/BEJmP8T07JU?si=NBuzoU1zg6CoLfXt",
    uploadedBy: "K. Davis",
  },{
    id: "6",
    title: "Mental Health Awareness",
    description: "Understanding mental health and its importance.",
    url: "https://youtu.be/BEJmP8T07JU?si=8o_Lw3xoGLLWe1kv",
    uploadedBy: "S. Wilson",
  },{
    id: "7",
    title: "Nutrition and Wellness",
    description: "The role of nutrition in overall health.",
    url: "https://youtu.be/J3UjJ4wKLkg?si=9sSaVtYXD691ZrWM",
    uploadedBy: "R. Martinez",
  }
]

export default function Video() {
  return (

  <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <VideoCard data={item} />
      )}
    />
  );
}

