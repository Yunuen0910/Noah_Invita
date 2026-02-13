body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  background: linear-gradient(to bottom, #ffffff, #eaf6ff);
  color: #333;
}

.hero {
  padding: 100px 20px;
  background: linear-gradient(135deg, #89CFF0, #4facfe);
  color: white;
  animation: fadeIn 1.5s ease-in-out;
}

.countdown {
  padding: 60px 20px;
}

#timer {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 20px;
  background: white;
  display: inline-block;
  padding: 20px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.details {
  padding: 40px;
  font-size: 1.1rem;
}

.rsvp {
  margin: 50px 0;
}

.btn {
  display: inline-block;
  padding: 18px 40px;
  background: linear-gradient(135deg, #0077b6, #0096c7);
  color: white;
  text-decoration: none;
  border-radius: 40px;
  font-weight: bold;
  transition: 0.3s ease;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.2);
}

footer {
  padding: 30px;
  font-size: 0.9rem;
  opacity: 0.7;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
