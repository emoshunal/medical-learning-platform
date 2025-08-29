
import { Card, CardProps, Progress, Text, YStack } from 'tamagui'

export function CardAssessment(props: CardProps) {
    return (
        <YStack space="$3" width="100%" paddingBottom={30}>
            <Card size="$4" {...props} borderRadius={20}>
                <Card.Header padded>
                    <Text color={'#565756'} style={{ fontSize: 14, fontFamily: 'Poppins' }}>Comprehensive Assesment for Anatomy</Text>
                    <Progress value={60} scaleY={0.3}>
                        <Progress.Indicator animation="bouncy" style={{backgroundColor: '#208b3a'}}/>
                  
                    </Progress>
                </Card.Header>
            </Card>
            <Card size="$4"  {...props} borderRadius={20}>
                <Card.Header padded>
                    <Text color={'#565756'} style={{ fontSize: 14, fontFamily: 'Poppins' }}>Introduction to Anatomy</Text>
                    <Progress value={80} scaleY={0.3}>
                        <Progress.Indicator animation="bouncy" style={{backgroundColor: '#208b3a'}} />
                    </Progress>
                </Card.Header>
            </Card>
            <Card size="$4"  {...props} borderRadius={20}>
                <Card.Header padded>
                    <Text color={'#565756'} style={{ fontSize: 14, fontFamily: 'Poppins' }}>Anatomy MCQs</Text>
                    <Progress value={20} scaleY={0.3}>
                        <Progress.Indicator animation="bouncy" style={{backgroundColor: '#208b3a'}} />
                    </Progress>
                </Card.Header>
            </Card>
            <Card size="$4"  {...props} borderRadius={20}>
                <Card.Header padded>
                    <Text color={'#565756'} style={{ fontSize: 14, fontFamily: 'Poppins' }}>Anatomy True or False</Text>
                    <Progress value={40} scaleY={0.3}>
                        <Progress.Indicator animation="bouncy" style={{backgroundColor: '#208b3a'}} />
                    </Progress>
                </Card.Header>
            </Card>
        </YStack>

    )
}