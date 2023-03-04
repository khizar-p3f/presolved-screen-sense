import React, { useState } from 'react';
import { Button, Col, Divider, Row, Space } from 'antd';
import { PauseOutlined, AimOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import moment from 'moment-timezone';
import { Storage } from 'aws-amplify'
const ManualRecording = (props) => {
    const { display } = props
    const [MR, setMR] = useState(null);
    const [recording, setRecording] = useState(false)

    const recordScreen = async () => {
        return await navigator.mediaDevices.getDisplayMedia({
            audio: false,
            video: { mediaSource: "screen" }
        });
    }
    const createRecorder = (stream, mimeType) => {
        // the stream data is stored in this array
        let recordedChunks = [];
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = function (e) {
            if (e.data.size > 0) {
                recordedChunks.push(e.data);
            }
        }
        mediaRecorder.onstop = function () {
            saveFile(recordedChunks);
            recordedChunks = [];
        }
        mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
        return mediaRecorder;
    }
    const startRecording = async () => {
        recordScreen().then((stream) => {
            let mimeType = 'video/webm';
            let mediaRecorder = createRecorder(stream, mimeType);
            setMR(mediaRecorder)
            setRecording(true)
        });
    }
    const stopRecording = () => {
        MR.stop();
        setRecording(false)
    }
    const saveFile = (recordedChunks) => {
        const blob = new Blob(recordedChunks, {
            type: 'video/webm'
        });
        window.open(URL.createObjectURL(blob));
        saveFileToS3(recordedChunks)
    }
    const saveFileToS3 = (recordedChunks) => {
        const blob = new Blob(recordedChunks, {
            type: 'video/webm'
        });
        const file = new File([blob], 'test.webm', { type: 'video/webm' });
        const fileName = `recordings/${moment().format('x')}.webm`        
        Storage.put(fileName, file, {
            contentType: 'video/webm',
            level: 'public',
        }).then(result => console.log({ saveFileToS3: result }))
        .catch(err => console.log({ saveFileToS3: err }));

    }
    const uploadFileToS3 = (file) => {

    }
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col flex={0}>
                    <Button style={{ height: 60, fontSize: 20 }}
                        type='default' icon={<AimOutlined />} onClick={() => startRecording()}>Record Screen</Button>
                </Col>
                <Col flex={0}>
                    <Button style={{ height: 60, fontSize: 20 }}
                        type='default' icon={<PauseOutlined />} onClick={() => stopRecording()}>Reload</Button>
                </Col>
            </Row>
            <Divider />
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Space size={10} direction='vertical'>
                        <Button icon={display.authenticated ? <CheckOutlined /> : <CloseOutlined />} type={display.authenticated ? 'primary' : 'default'} size='large' block>Authenticated</Button>
                        <Button icon={display.appStarted ? <CheckOutlined /> : <CloseOutlined />} type={display.appStarted ? 'primary' : 'default'} size='large' block>Application Started</Button>
                        <Button icon={display.CCPInitiated ? <CheckOutlined /> : <CloseOutlined />} type={display.CCPInitiated ? 'primary' : 'default'} size='large' block>CCP Initated</Button>
                        <Button icon={display.IsRecording ? <CheckOutlined /> : <CloseOutlined />} type={display.IsRecording ? 'primary' : 'default'} size='large' block>Recording</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default ManualRecording