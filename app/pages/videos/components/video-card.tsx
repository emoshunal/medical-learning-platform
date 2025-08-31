import { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Card, Image, Text, XStack, YStack } from "tamagui";
import { ThreeDotsMenu } from "../../components/threedotsmenu";
type VideoData = {
    title: string;
    description: string;
    uploadedBy: string;
    url: string;
};
export function VideoCard({ data }: { data: VideoData }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [showPlayer, setShowPlayer] = useState(false)
    const playerRef = useRef(null)

    const getVideoId = (url: string) => {
        const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)
        return match ? match[1] : null
    }
    const videoId = getVideoId(data.url)
    return (
        <Card
            size="$4"
            borderRadius={20}
            marginBottom={12}
            backgroundColor="white"
            shadowColor="rgba(0,0,0,0.1)"
            shadowRadius={8}
            shadowOffset={{ width: 0, height: 2 }}
        >
            <Card.Header>
                {showPlayer && videoId ? (
                    <YoutubePlayer ref={playerRef} height={200} videoId={videoId} play={true} />
                ) : (
                    <TouchableOpacity
                        onPress={() => setShowPlayer(true)}
                        style={{
                            width: "100%",
                            height: 150,
                            backgroundColor: "#000",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                        }}
                    >
                        <Image
                            source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 20,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                opacity: 0.7,
                            }}
                        />
                        <Image
                            source={require('@/assets/images/youtube.png')}
                            style={{ width: 80, height: 80 }}
                        />
                    </TouchableOpacity>
                )}
                <YStack width="100%" flexDirection="row" padding="$3" space="$2">
                    <XStack flexDirection="column" alignItems="flex-start" justifyContent="flex-start">
                        <Text color="#333" fontSize={16} fontFamily={'Poppins-Medium'}>
                            {data.title}
                        </Text>

                        <Text color="#777" fontSize={11} fontFamily={'Poppins-Light'}>
                            Uploaded by {data.uploadedBy}
                        </Text>
                    </XStack>

                    <ThreeDotsMenu
                        actions={[
                            { label: "Share", onPress: () => console.log("Share", data.url) },
                            { label: "Save", onPress: () => console.log("Save", data.url) },
                            { label: "Report", onPress: () => console.log("Report", data.url) },
                        ]}
                    />

                </YStack>
            </Card.Header>

        </Card>
    )

}