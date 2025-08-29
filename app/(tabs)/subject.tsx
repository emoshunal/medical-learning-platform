import { Button, ScrollView, Text, XStack } from "tamagui";
import Header from "../pages/layout/header";
import SearchInput from "../pages/layout/search";
import { CardSubject } from "../pages/subject/components/CardSubject";


export default function SubjectTab() {
  return (
    <ScrollView>
      <XStack
        flex={1}
        paddingTop="$10"
        paddingHorizontal={"$5"}
        flexDirection="column"
        space="$4"
        height={"100%"}
      >
        <Header />

        <SearchInput style={{ fontFamily: 'Poppins' }} />
        <XStack justifyContent="space-between" alignItems="center" >
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium' }}>Subjects</Text>
          <Button color="#1E90FF" chromeless><Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>See All</Text></Button>
        </XStack>
        <CardSubject backgroundColor={"#10451d"}
          animation="bouncy"
          hoverStyle={{ scale: 0.925 }}
          pressStyle={{ scale: 0.875 }}
          height={75} />
      </XStack>
    </ScrollView>
  );
}

