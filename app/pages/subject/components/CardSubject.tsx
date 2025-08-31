
import { Atom, ClipboardPlus, Dna, Fingerprint, FlaskRound, HeartPulse, Pill } from '@tamagui/lucide-icons'
import { FlatList } from 'react-native'
import { Card, CardProps, Image, Text, YStack } from 'tamagui'

const color = '#ffffff'

const subjects = [
    {
        id: '1',
        title: 'Anatomy',
        icon: <FlaskRound size={30} color={color} />,
        image: 'https://images.pexels.com/photos/2672630/pexels-photo-2672630.jpeg'
    },
    {
        id: '2',
        title: 'Physiology',
        icon: <HeartPulse size={30} color={color} />,
        image: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg'
    },
    {
        id: '3',
        title: 'Biochemistry',
        icon: <Fingerprint size={30} color={color} />,
        image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg'
    },
    {
        id: '4',
        title: 'Pathology',
        icon: <ClipboardPlus size={30} color={color} />,
        image: 'https://images.pexels.com/photos/7108394/pexels-photo-7108394.jpeg'
    },
    {
        id: '5',
        title: 'Pharmacology',
        icon: <Pill size={30} color={color} />,
        image: 'https://images.pexels.com/photos/2919591/pexels-photo-2919591.jpeg'
    },
    {
        id: '6',
        title: 'Microbiology',
        icon: <Atom size={30} color={color} />,
        image: 'https://images.pexels.com/photos/8917810/pexels-photo-8917810.jpeg'
    },
    {
        id: '7',
        title: 'Immunology',
        icon: <Dna size={30} color={color} />,
        image: 'https://media.istockphoto.com/id/1030755550/photo/virus-with-human-body.jpg?b=1&s=612x612&w=0&k=20&c=B34uB-aygCPUDDZlsu0G20KHoVxGLqaR1ZRWGsROqgM='
    },
]
export function CardSubject(props: CardProps) {
    return (
        <YStack space="$3" width="100%" paddingBottom={30}>
            <FlatList
                data={subjects}
                keyExtractor={(item) => item.id}
                horizontal
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Card size="$4" {...props}
                        paddingVertical={10}
                        borderRadius={20}
                        marginHorizontal={8}
                        width={120}
                        paddingHorizontal={10}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        height={120}
                        space="$2">
                        {item.icon}
                        <Text color={'#ffffff'} style={{ fontSize: 12, fontFamily: 'Poppins-Medium' }}>{item.title}</Text>
                        <Card.Background>
                            <Image
                                src={item.image}
                                width="100%"
                                height="100%"
                                alt="Card Background"
                                opacity={0.2}
                                borderRadius={20}
                            />
                        </Card.Background>
                    </Card>
                )}
            />
        </YStack>

    )
}