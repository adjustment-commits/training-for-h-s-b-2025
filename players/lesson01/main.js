body {
  font-family: 'Noto Sans JP', sans-serif;
  background: linear-gradient(#0d1117, #1a2535);
  color: #fff;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.scene {
  text-align: center;
  opacity: 0;
  transition: opacity 0.8s ease;
  max-width: 720px;
  padding: 20px;
  position: absolute;
}

.scene.active {
  opacity: 1;
  position: relative;
}

h1, h2 {
  color: #d84a4a;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
}

button {
  background: #d84a4a;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 18px;
  font-size: 1rem;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #f06161;
}

/* Diagram */
.diagram {
  margin: 30px auto;
  text-align: center;
}

.diagram h3 {
  color: #d84a4a;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.flow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.block {
  width: 110px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 6px;
  background: #1c2433;
  color: #fff;
  font-weight: bold;
}

.block span {
  display: block;
  font-size: 0.8rem;
  color: #ccc;
  margin-top: 4px;
}

.highlight {
  border-color: #d84a4a;
  background: #2a313f;
}

.arrow {
  font-size: 1.5rem;
  color: #d84a4a;
}

/* Quiz feedback */
.choices {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.choice {
  background: #1c2433;
  border: 1px solid #d84a4a;
  color: #fff;
}

.choice:hover {
  background: #d84a4a;
}

#feedback {
  margin-top: 20px;
  font-size: 1.1rem;
  color: #ffd166;
}

.end {
  margin-top: 40px;
  font-style: italic;
  color: #ccc;
}

