import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import HeartBackground from './components/HeartBackground';

const NO_PHRASES = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely sure?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#fda4af', '#fb7185', '#ffffff']
    });
  };

  return (
    <main className="flex items-center justify-center min-vh-100 p-8">
      <HeartBackground />

      <AnimatePresence mode="wait">
        {!yesPressed ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="glass-card p-8 flex flex-col items-center max-w-md w-full text-center"
          >
            <img
              src="https://media.tenor.com/vGJ3BRS1_X0AAAAi/mochi-peach.gif"
              alt="Cute cat"
              className="w-48 mb-8 rounded-2xl"
            />
            <h1 className="text-4xl mb-8 text-pink-600">Will you be my Valentine?</h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="btn-yes"
                style={{ fontSize: yesButtonSize }}
                onClick={handleYesClick}
              >
                Yes
              </button>

              <button
                className="btn-no"
                onClick={handleNoClick}
              >
                {noCount === 0 ? "No" : NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)]}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src="https://media.tenor.com/gU_69_CS978AAAAi/mochi-cat.gif"
              alt="Celebration cat"
              className="w-64 mb-8 rounded-2xl shadow-xl"
            />
            <h1 className="text-4xl mb-4 text-pink-600">Yay! Knew you'd say Yes! ❤️</h1>
            <p className="text-2xl text-pink-500 romantic-text">See you on Valentine's Day!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
