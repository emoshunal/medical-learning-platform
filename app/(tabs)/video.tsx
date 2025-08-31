import { XStack } from "tamagui";
import Header from "../pages/components/header";
import SearchInput from "../pages/components/search";
import Video from "../pages/videos";


export default function VideoTab() {
  return (

      <XStack
        flex={1}
        paddingTop="$10"
        paddingHorizontal={"$5"}
        flexDirection="column"
        space="$4"
        height={"100%"}
      >
        <Header />
        <SearchInput />
        <Video />
      </XStack>
  );
}

