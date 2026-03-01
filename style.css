* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(
      45deg,
      #ff6b6b,
      #4ecdc4,
      #45b7d1,
      #96ceb4,
      #ffd93d
    ),
    linear-gradient(-45deg, #6c5ce7, #fd79a8, #fdcb6e, #55a3ff, #00b894);
  background-size: 300% 300%, 300% 300%;
  animation: gradientShift 8s ease infinite;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%, 100% 50%; }
  50% { background-position: 100% 50%, 0% 50%; }
  100% { background-position: 0% 50%, 100% 50%; }
}

.container {
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  width: 100%;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5em;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat-box {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #e9ecef;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.text-display {
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 10px;
  padding: 25px;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  min-height: 100px;
  font-family: monospace;
}

.char.correct { background-color: #d4edda; color: #155724; }
.char.incorrect { background-color: #f8d7da; color: #721c24; }
.char.current { background-color: #007bff; color: white; }

textarea {
  width: 100%;
  min-height: 100px;
  border: 2px solid #dee2e6;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
  font-family: monospace;
  resize: vertical;
  margin-bottom: 20px;
}

textarea:focus {
  outline: none;
  border-color: #007bff;
}

.timer-bar {
  width: 100%;
  height: 20px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.timer-fill {
  height: 100%;
  background: linear-gradient(90deg, #28a745, #ffc107, #dc3545);
  transition: width 1s linear;
  border-radius: 10px;
}

.controls {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.start-btn { background: #28a745; color: white; }
.reset-btn { background: #6c757d; color: white; }
.submit-btn { background: #007bff; color: white; }

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.difficulty {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.difficulty button {
  padding: 8px 16px;
  background: #f8f9fa;
  color: #333;
  border: 2px solid #dee2e6;
  font-size: 14px;
}

.difficulty button.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.result-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.result-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.hidden {
  display: none;
}
