import { Search } from '@tamagui/lucide-icons'
import { Input, InputProps, XStack } from 'tamagui'

export const SearchInput = (props: InputProps) => {
  return (
     <XStack alignItems="center" borderRadius={20} backgroundColor={"#ffffff"} borderWidth={1} borderColor={"#a4a6a4"} height={50} paddingHorizontal="$4">
      <Search size={20} color="#565756" />
      <Input
        flex={1}
        placeholder="Search..."
        borderWidth={0}       // remove inner border
        backgroundColor="transparent"
        size={"$4"}
        {...props}
      />
    </XStack>
  )
}

export default SearchInput