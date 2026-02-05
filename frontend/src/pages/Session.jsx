import { useEffect, useRef, useState } from "react";
import {
  PoseLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";
import { Link } from "react-router-dom";

export default function Session() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [feedback, setFeedback] = useState("Stand straight");
  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {
    let poseLandmarker;
    let running = true;

    async function setupPose() {
      // Load MediaPipe vision files
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
      );

      poseLandmarker = await PoseLandmarker.createFromOptions(
        vision,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task",
          },
          runningMode: "VIDEO",
          numPoses: 1,
        }
      );

      // Start webcam
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      await videoRef.current.play();

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      async function detect() {
        if (!running) return;

        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        const results = poseLandmarker.detectForVideo(
          videoRef.current,
          performance.now()
        );

        if (results.landmarks.length > 0) {
          const landmarks = results.landmarks[0];

          // Draw landmarks manually
          landmarks.forEach((lm) => {
            ctx.beginPath();
            ctx.arc(
              lm.x * canvas.width,
              lm.y * canvas.height,
              4,
              0,
              2 * Math.PI
            );
            ctx.fillStyle = "red";
            ctx.fill();
          });

          setFeedback("Good posture detected");
          setAccuracy((prev) => Math.min(prev + 1, 100));
        }

        requestAnimationFrame(detect);
      }

      detect();
    }

    setupPose();

    return () => {
      running = false;
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-4">Live Yoga Session</h1>

      <div className="relative w-[640px] h-[480px] mb-6">
        <video ref={videoRef} className="hidden" />
        <canvas
          ref={canvasRef}
          className="rounded-lg border border-gray-600"
        />
      </div>

      <div className="bg-white text-black px-6 py-4 rounded-xl shadow mb-4 w-[640px]">
        <p><strong>Feedback:</strong> {feedback}</p>
        <p><strong>Accuracy:</strong> {accuracy}%</p>
      </div>

      <Link
        to="/feedback"
        className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
      >
        End Session
      </Link>
    </div>
  );
}
