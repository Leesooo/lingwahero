/* ============================================================
   LINGWAHERO - ADVANCED FEATURES (Facial Recognition & Motion Detection)
   For proposal demonstration purposes
   ============================================================ */

// Simulated Facial Recognition
function checkCameraPermission() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        showToast("📷 Camera ready! Facial tracking available.", "success");
        stream.getTracks().forEach(track => track.stop());
      })
      .catch(() => {
        showToast("⚠️ Camera access needed for facial recognition.", "warning");
      });
  }
}

// Simulated Motion Detection for Baybayin
function initMotionDetection() {
  let startX, startY, endX, endY;
  let isDrawing = false;
  
  const swipeArea = document.createElement('div');
  swipeArea.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: rgba(0,0,0,0.05);
    border-top: 2px solid var(--yellow);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: var(--text-gray);
    z-index: 9999;
    cursor: pointer;
  `;
  swipeArea.innerHTML = '✍️ Swipe here to practice Baybayin writing gestures';
  document.body.appendChild(swipeArea);
  
  swipeArea.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDrawing = true;
    swipeArea.style.background = 'rgba(252,209,22,0.2)';
  });
  
  swipeArea.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    endX = e.touches[0].clientX;
    endY = e.touches[0].clientY;
  });
  
  swipeArea.addEventListener('touchend', () => {
    if (!isDrawing) return;
    isDrawing = false;
    swipeArea.style.background = 'rgba(0,0,0,0.05)';
    
    if (startX && endX && (Math.abs(endX - startX) > 50 || Math.abs(endY - startY) > 50)) {
      showToast("✍️ Baybayin gesture detected! Motion tracking active.", "info");
    }
    startX = startY = endX = endY = null;
  });
}

function showToast(message, type = "info") {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    background: ${type === 'success' ? '#2e7d32' : type === 'warning' ? '#ed6c02' : '#0038A8'};
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 13px;
    z-index: 10000;
    animation: fadeInOut 3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Auto-initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Uncomment to enable features:
   checkCameraPermission();
  initMotionDetection();
});