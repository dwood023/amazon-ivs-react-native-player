import * as React from 'react';
import { View } from 'react-native';
import IVSPlayer from 'amazon-ivs-react-native-player';

const URL =
  'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';

const growthRate = 10;
const growthInterval = 1000;

export default function SimpleExample() {
    const [width, setWidth] = React.useState(10);

    React.useEffect(() => {
        const interval = setInterval(() => setWidth((width) => (width + growthRate) % 100), growthInterval);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
        <View
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    aspectRatio: 1.78,
                    width: `${width}%`,
                    backgroundColor: 'orange',
                }}
            />
        </View>

        <IVSPlayer
            style={{
                width: `${width}%`,
                alignSelf: 'center'
            }}
            muted
            streamUrl={URL}
            testID="IVSPlayer"
        />
  </>
  );
}
