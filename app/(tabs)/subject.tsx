import { XStack } from "tamagui";
import Subject from "../pages/subject";

export default function SubjectTab() {
  return (

      <XStack
        flex={1}
        paddingTop="$10"
        paddingHorizontal={"$5"}
        flexDirection="column"
        space="$4"
        height={"100%"}
      >

        <Subject />
      </XStack>
   


  );
}

