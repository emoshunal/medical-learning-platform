import { Button, ScrollView, Text, XStack } from 'tamagui'
import { HomeCard } from '../pages/home/components/Card'
import { CardAssessment } from '../pages/home/components/CardAssessment'
import Header from '../pages/layout/header'

export default function HomeScreen() {
  return (
    <ScrollView>


      <XStack
        flex={1}
        paddingTop="$10"
        paddingHorizontal={"$5"}
        flexDirection="column"
        space="$4"
        backgroundColor={"#f5f6f7"}
        height={"100%"}
      >
        <Header />

        <XStack $maxMd={{ flexDirection: 'column' }} >
          <HomeCard
            animation="bouncy"
            height={250}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            backgroundColor={"#10451d"}
          />

        </XStack>
        <XStack justifyContent="space-between" alignItems="center" >
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium' }}>My Assessments</Text>
          <Button chromeless><Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>View all</Text></Button>
        </XStack>
        <XStack $maxMd={{ flexDirection: 'column' }} >
          <CardAssessment
            backgroundColor={"#ededed"}
            animation="bouncy"
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            height={75}
          />
        </XStack>
      </XStack>
    </ScrollView>

  )
}
