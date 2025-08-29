import { Bell } from '@tamagui/lucide-icons'
import { Avatar, Button, Text, XStack } from 'tamagui'

export default function Header() {
    return (
        <XStack justifyContent="space-between" alignItems="center" paddingBottom={10}>
            <XStack alignItems="center" space={10}>
                <Avatar circular size="$4">
                    <Avatar.Image
                        accessibilityLabel="Cam"
                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                    />
                    <Avatar.Fallback backgroundColor="$blue10" />
                </Avatar>
                <Text style={{ fontFamily: 'Poppins' }}>Jojit Gupta</Text>
            </XStack>
            <Button icon={<Bell size={20} />} chromeless borderRadius={50} pressStyle={{ scale: 0.85 }} width={40} height={40}>
 
            </Button>
        </XStack>
    )
}
