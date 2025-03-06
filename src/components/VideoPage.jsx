import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SERVER_SECRET } from './constant';

const VideoPage = () => {
    const { id } = useParams();
    const roomID = id;
    const meetingRef = useRef(null);

    useEffect(() => {
        if (!meetingRef.current) return;

        const appID = Number(APP_ID);
        const serverSecret = SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, serverSecret, roomID, Date.now().toString(), "soniVerma"
        );

        console.log("Generated Kit Token:", kitToken);

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        if (!zp) {
            console.error("ZegoUIKitPrebuilt.create() failed");
            return;
        }

        zp.joinRoom({
            container: meetingRef.current,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' + roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });

    }, [roomID]);

    return <div ref={meetingRef} style={{ width: '100%', height: '100vh' }} />;
};

export default VideoPage;
