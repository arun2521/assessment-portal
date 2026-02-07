import { Button, Card, Typography, Alert } from "antd";
import { useSecureTest } from "../hooks/useSecureTest";
import "./TestPage.css";

const { Title, Paragraph } = Typography;

const TestPage = () => {
  const { isStarted, startTest, submitTest } = useSecureTest();

  return (
    <div className="container-div">
      <Card className="card-container">
        <Title level={3}>Secure Test Environment</Title>

        {!isStarted ? (
          <>
            <Paragraph>
              This assessment requires fullscreen mode. Your activity will be
              monitored, including tab switches, focus changes, and copy/paste
              attempts.
            </Paragraph>

            <Alert
              type="warning"
              message="Please ensure stable internet and avoid leaving the screen."
              style={{ marginBottom: 16 }}
            />

            <Button type="primary" size="large" onClick={startTest}>
              Start Test
            </Button>
          </>
        ) : (
          <>
            <Alert
              type="success"
              message="Monitoring Active"
              description="All actions are being logged."
              style={{ marginBottom: 16 }}
            />

            <div style={{ height: 200, marginBottom: 16 }}>
              <Paragraph>Example question content...</Paragraph>
            </div>

            <Button danger size="large" block onClick={submitTest}>
              Submit Test
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default TestPage;
