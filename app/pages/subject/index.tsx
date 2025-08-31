import Header from "@/app/pages/components/header";
import SearchInput from "@/app/pages/components/search";
import { CardOngoing } from "@/app/pages/subject/components/CardOngoing";
import { CardSubject } from "@/app/pages/subject/components/CardSubject";
import { FlatList } from "react-native";
import { Button, Text, XStack } from "tamagui";

const myData = [
  { id: 1, topic: "Intro to Anatomy", progress: 65, subject: "Anatomy", uploader: "J. Smith" },
  { id: 2, topic: "Heart Function Basics", progress: 40, subject: "Physiology", uploader: "K. Johnson" },
  { id: 3, topic: "Pediatric Growth Stages", progress: 20, subject: "Pediatrics", uploader: "M. Lee" },
  { id: 4, topic: "Elderly Care Principles", progress: 55, subject: "Geriatrics", uploader: "S. Brown" },
  { id: 5, topic: "Eye Disorders 101", progress: 75, subject: "Ophthalmology", uploader: "L. Davis" },
]

const SECTIONS = [
  { type: "header" },
  { type: "search" },
  { type: "subjectTitle" },
  { type: "subjects" },
  { type: "ongoingTitle" },
  { type: "ongoingList" }
]

export default function Subject() {
  return (
    <FlatList
      data={SECTIONS}
      keyExtractor={(item, index) => item.type + index}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        switch (item.type) {
          case "header":
            return <Header />;
          case "search":
            return <SearchInput style={{ fontFamily: 'Poppins' }} />;
          case "subjectTitle":
            return (
              <XStack justifyContent="space-between" alignItems="center" >
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium' }}>Subjects</Text>
                <Button color="#1E90FF" chromeless><Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>See All</Text></Button>
              </XStack>
            )
          case "subjects":
            return <CardSubject backgroundColor={"#10451d"}
              animation="bouncy"
              hoverStyle={{ scale: 0.925 }}
              pressStyle={{ scale: 0.875 }}
              height={75} />
          case "ongoingTitle":
            return (<XStack justifyContent="flex-start" alignItems="center" >
              <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium' }}>Ongoing</Text>
            </XStack>)
          case "ongoingList":
            return (
              <XStack $maxMd={{ flexDirection: 'column' }} >
                <CardOngoing
                  backgroundColor={"#ededed"}
                  animation="bouncy"
                  hoverStyle={{ scale: 0.925 }}
                  pressStyle={{ scale: 0.875 }}
                  data={myData}
                />
              </XStack>
            )
          default:
            return null;
        }
      }
      }
    >
 
    </FlatList>
  );
}

