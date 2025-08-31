
import { FlatList } from 'react-native';
import { Avatar, Card, CardProps, Progress, Text, XStack, YStack } from 'tamagui';
import { iconMap } from '../../components/icon';
export function CardOngoing(props: CardProps & { data: any[] }) {
    return (
        <YStack space="$3" width="100%" paddingBottom={30}>
            <FlatList
                data={props.data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false} 
                renderItem={({ item }) => {
                    const Icon = iconMap[item.subject];
                    return (
                        <Card size="$2" {...props} borderRadius={20} marginBottom={10}>
                            <Card.Header >
                                <XStack alignItems="center" justifyContent="flex-start" space="$3">
                                    <XStack>
                                        <Avatar circular size="$5" backgroundColor="#e7e7e3ff">
                                            {Icon ? (
                                                <Icon size={24} color="#4e8d3bff" />
                                            ) : (
                                                <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
                                            )}
                                        </Avatar>
                                    </XStack>

                                    <XStack flexDirection='column' alignItems="flex-start" justifyContent="flex-start">
                                        <Text color={'#565756'} style={{ fontSize: 14, fontFamily: 'Poppins-Medium' }}>{item.topic}</Text>
                                        <Text color={'#565756'} style={{ fontSize: 12, fontFamily: 'Poppins-Light' }}>{item.uploader}</Text>
                                        <YStack flexDirection='row' alignItems="center" justifyContent="space-between" space="$2" width={"70%"}>
                                            <Text color={'#565756'} style={{ fontSize: 10, fontFamily: 'Poppins-Bold' }}>80 lessons</Text>
                                            <Text color={'#565756'} style={{ fontSize: 10, fontFamily: 'Poppins-light' }}>{item.progress}% completed</Text>
                                        </YStack>
                                        <Progress value={item.progress} scaleY={0.3} width={"70%"}>
                                            <Progress.Indicator animation="bouncy" style={{ backgroundColor: '#208b3a' }} />
                                        </Progress>
                                    </XStack>
                                </XStack>
                            </Card.Header>
                        </Card>
                    )
                }}
            />
        </YStack>

    )
}