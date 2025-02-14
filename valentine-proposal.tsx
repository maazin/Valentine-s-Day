import React, { useState } from 'react';
import { Heart, X, Check } from 'lucide-react';

const ValentineProposal = () => {
  const [step, setStep] = useState('initial');
  const [noCount, setNoCount] = useState(0);
  const [buttonSize, setButtonSize] = useState(16);

  const messages = {
    reject: [
      "Are you sure? 🥺",
      "Really really sure? 💔",
      "Think again please! 😢",
      "You're breaking my heart! 💔",
      "Last chance! 🙏",
      "Pretty please? 🥹",
      "I'm gonna cry... 😭",
      "Don't do this to me! 💔",
      "My heart can't take it! 💔",
      "Please reconsider! 🥺"
    ]
  };

  const handleNo = () => {
    setNoCount(prev => prev + 1);
    setButtonSize(prev => prev + 8);
    if (noCount >= messages.reject.length - 1) {
      setStep('final-no');
    }
  };

  const renderContent = () => {
    switch (step) {
      case 'initial':
        return (
          <div className="text-center space-y-8">
            <div className="animate-bounce">
              <Heart className="mx-auto text-red-500" size={64} strokeWidth={1.5} fill="currentColor" />
            </div>
            <h1 className="text-4xl font-bold text-pink-600 mb-8">Hey Beautiful! ❤️</h1>
            <p className="text-xl text-gray-700 mb-8">
              I know we're on a break, but I can't imagine spending Valentine's Day without you...
            </p>
            <p className="text-2xl font-semibold text-pink-500 mb-12">
              Will you be my Valentine?
            </p>
            <div className="flex justify-center items-center gap-8">
              <button
                onClick={() => setStep('yes')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110"
                style={{ fontSize: `${buttonSize}px` }}
              >
                Yes! <Check className="inline ml-2" />
              </button>
              <button
                onClick={handleNo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-full text-lg transition-all duration-300"
              >
                {noCount === 0 ? "No" : messages.reject[noCount]} <X className="inline ml-2" />
              </button>
            </div>
          </div>
        );
      
      case 'yes':
        return (
          <div className="text-center space-y-8 animate-fadeIn">
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <Heart 
                  key={i}
                  className="inline-block mx-2 text-red-500 animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  size={32}
                  fill="currentColor"
                />
              ))}
            </div>
            <h1 className="text-4xl font-bold text-pink-600 mb-4">You've Made Me The Happiest! 🥰</h1>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Every moment we've shared has been special, and even during this break,
                my feelings for you haven't changed one bit. You're the one who makes
                my heart skip a beat, who brings sunshine to my darkest days.
              </p>
              <p>
                I promise to be the best Valentine you could ask for - to make you
                smile, to listen, to care, and to love you with all my heart.
              </p>
              <p className="text-xl font-semibold text-pink-500">
                Thank you for saying yes! Let's make this Valentine's Day unforgettable! ❤️
              </p>
            </div>
            <div className="mt-8">
              {[...Array(8)].map((_, i) => (
                <Heart 
                  key={i}
                  className="inline-block mx-2 text-pink-500 animate-pulse"
                  style={{ animationDelay: `${i * 0.15}s` }}
                  size={24}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        );
      
      case 'final-no':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i}
                  className="inline-block mx-2 text-gray-400"
                  size={32}
                  fill="currentColor"
                />
              ))}
            </div>
            <h1 className="text-4xl font-bold text-gray-600">Oh... I understand 💔</h1>
            <p className="text-xl text-gray-600">
              I'll always cherish what we had... Take care of yourself ❤️
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-50 p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default ValentineProposal;
