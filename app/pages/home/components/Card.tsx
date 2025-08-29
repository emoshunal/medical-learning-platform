import { Button, Card, CardProps, H3, Image, Paragraph, XStack } from 'tamagui'


export function HomeCard(props: CardProps) {
    return (
        <Card elevate size="$4" borderRadius={20}  {...props}>
            <Card.Header padded>
                <H3 color={'#ffffff'} style={{fontFamily: 'Poppins-Medium'}}>MedEasyNa</H3>
                <Paragraph theme="alt2" color={'#fff0f3'} style={{fontFamily: 'Poppins-Light'}}>Your comprehensive medical learning platform</Paragraph>
            </Card.Header>
            <Card.Footer padded>
                <XStack flex={1} />
                <Button borderRadius="$10" style={{fontFamily: 'Poppins-Light'}}><Paragraph style={{fontFamily: 'Poppins'}}>Learn more</Paragraph></Button>
            </Card.Footer>
            <Card.Background>
                <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    width="100%"
                    height="100%"
                    alt="Card Background"
                    opacity={0.2}
                    borderRadius={20}
                />
            </Card.Background>
        </Card>
    )
}