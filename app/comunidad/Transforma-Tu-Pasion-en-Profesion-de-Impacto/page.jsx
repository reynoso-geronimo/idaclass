'use client'

import React, { useEffect } from 'react'

const Page = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
      observer.observe(el);
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(a => {
          a.style.display = 'none';
        });
        
        // Toggle current answer
        answer.style.display = isOpen ? 'none' : 'block';
      });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      fadeInElements.forEach(el => observer.unobserve(el));
      faqQuestions.forEach(q => {
        q.removeEventListener('click', () => {});
      });
      anchorLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <style jsx>{`
        :root {
          --primary: #FF4E00;
          --primary-dark: #CC3E00;
          --secondary: #0A0A0A;
          --accent: #FFF500;
          --text-light: #FFFFFF;
          --text-dark: #1A1A1A;
          --gray: #8E8E8E;
          --bg-light: #F5F5F5;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Archivo', sans-serif;
          color: var(--text-dark);
          overflow-x: hidden;
          background: var(--secondary);
        }

        /* HERO SECTION */
        .hero {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #000000 0%, #1a0a00 50%, #000000 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 78, 0, 0.03) 2px, rgba(255, 78, 0, 0.03) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 78, 0, 0.03) 2px, rgba(255, 78, 0, 0.03) 4px);
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          background: var(--accent);
          color: var(--secondary);
          padding: 8px 24px;
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 30px;
          animation: fadeInDown 0.8s ease;
          border: 2px solid var(--secondary);
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 10vw, 110px);
          line-height: 1.1;
          color: var(--text-light);
          margin-bottom: 25px;
          letter-spacing: 2px;
          animation: fadeInUp 1s ease 0.2s both;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-title .highlight {
          color: var(--primary);
          text-shadow: 0 0 40px rgba(255, 78, 0, 0.6);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-subtitle {
          font-size: clamp(18px, 3vw, 28px);
          color: var(--gray);
          margin-bottom: 40px;
          font-weight: 300;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.5;
          animation: fadeInUp 1s ease 0.4s both;
        }

        .hero-date {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(24px, 4vw, 42px);
          color: var(--accent);
          margin-bottom: 50px;
          font-weight: 700;
          letter-spacing: 1px;
          animation: fadeInUp 1s ease 0.6s both;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin: 50px 0;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease 0.5s both;
        }

        .hero-stat {
          display: flex;
          align-items: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.05);
          padding: 20px 30px;
          border-radius: 0;
          border: 2px solid rgba(255, 78, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .hero-stat .stat-icon {
          font-size: 32px;
        }

        .hero-stat strong {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          color: var(--primary);
          line-height: 1;
        }

        .hero-stat span {
          display: block;
          font-size: 12px;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-free {
          margin-top: 25px;
          font-size: 16px;
          color: var(--gray);
          animation: fadeInUp 1s ease 0.9s both;
        }

        .cta-primary {
          display: inline-block;
          background: var(--primary);
          color: var(--text-light);
          padding: 22px 60px;
          font-family: 'Oswald', sans-serif;
          font-size: 20px;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          border: 3px solid var(--primary);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 1s ease 0.8s both;
        }

        .cta-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--accent);
          transition: left 0.4s ease;
          z-index: -1;
        }

        .cta-primary:hover::before {
          left: 0;
        }

        .cta-primary:hover {
          color: var(--secondary);
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 78, 0, 0.4);
        }

        /* NAVIGATION */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 40px;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 78, 0, 0.2);
        }

        nav .logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          color: var(--text-light);
          letter-spacing: 2px;
        }

        nav .logo span {
          color: var(--primary);
        }

        /* SUCCESS PROOF SECTION */
        .success-proof {
          background: var(--secondary);
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .success-proof::after {
          content: '';
          position: absolute;
          top: 0;
          right: -20%;
          width: 60%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 78, 0, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .success-content {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .success-content .section-title {
          text-align: center;
          color: var(--text-light);
          margin-bottom: 80px;
        }

        .success-content .section-label {
          text-align: center;
        }

        .success-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 50px;
        }

        .success-item {
          text-align: center;
          position: relative;
        }

        .success-icon {
          font-size: 64px;
          margin-bottom: 25px;
          display: block;
          filter: drop-shadow(0 0 20px rgba(255, 78, 0, 0.5));
        }

        .success-item h3 {
          font-family: 'Oswald', sans-serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .success-item p {
          font-size: 16px;
          color: var(--gray);
          line-height: 1.7;
        }

        /* PILLARS SECTION */
        .pillars {
          background: var(--bg-light);
          padding: 100px 20px;
        }

        .pillars-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .pillar-card {
          background: white;
          padding: 50px 40px;
          border-left: 6px solid var(--primary);
          transition: all 0.3s ease;
          position: relative;
        }

        .pillar-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 100%;
          background: var(--primary);
          transition: width 0.4s ease;
          z-index: 0;
        }

        .pillar-card:hover::after {
          width: 100%;
        }

        .pillar-card:hover {
          transform: translateX(10px);
          box-shadow: -10px 10px 40px rgba(0, 0, 0, 0.1);
        }

        .pillar-card:hover .pillar-icon,
        .pillar-card:hover .pillar-title,
        .pillar-card:hover .pillar-text {
          color: white;
          position: relative;
          z-index: 1;
        }

        .pillar-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
          transition: color 0.3s ease;
        }

        .pillar-title {
          font-family: 'Oswald', sans-serif;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .pillar-text {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text-dark);
          transition: color 0.3s ease;
        }

        /* ABOUT SECTION */
        .about {
          background: var(--secondary);
          padding: 120px 20px;
          position: relative;
        }

        .about::before {
          content: 'REVOLUCIÓN';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 200px;
          color: rgba(255, 78, 0, 0.05);
          letter-spacing: 20px;
          z-index: 0;
          white-space: nowrap;
        }

        .about-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-label {
          font-family: 'Oswald', sans-serif;
          font-size: 14px;
          color: var(--primary);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 8vw, 80px);
          color: var(--text-light);
          line-height: 1.1;
          margin-bottom: 40px;
          letter-spacing: 2px;
        }

        .section-text {
          font-size: 20px;
          line-height: 1.8;
          color: var(--gray);
          margin-bottom: 30px;
          font-weight: 300;
        }

        .section-text strong {
          color: var(--text-light);
          font-weight: 600;
        }

        .about-list {
          list-style: none;
          margin: 40px 0;
          padding: 0;
        }

        .about-list li {
          font-size: 18px;
          color: var(--gray);
          line-height: 2;
          padding-left: 35px;
          position: relative;
          margin-bottom: 15px;
        }

        .about-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-size: 24px;
          font-weight: bold;
        }

        .about-list li strong {
          color: var(--text-light);
        }

        .highlight-quote {
          background: linear-gradient(135deg, rgba(255, 78, 0, 0.1), rgba(255, 245, 0, 0.1));
          border-left: 4px solid var(--primary);
          padding: 40px;
          margin: 60px 0;
          font-size: 24px;
          font-style: italic;
          color: var(--text-light);
          line-height: 1.6;
        }

        /* SPEAKERS SECTION */
        .speakers {
          background: var(--bg-light);
          padding: 120px 20px;
        }

        .speakers-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .speakers-content .section-title {
          color: var(--text-dark);
        }

        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .speaker-category {
          background: white;
          padding: 40px 30px;
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
        }

        .speaker-category:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 50px rgba(255, 78, 0, 0.2);
        }

        .speaker-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
          text-align: center;
        }

        .speaker-category-title {
          font-family: 'Oswald', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
        }

        .speaker-category-list {
          list-style: none;
          font-size: 15px;
          color: var(--text-dark);
          line-height: 2.2;
          text-align: left;
        }

        .speaker-category-list li {
          padding-left: 25px;
          position: relative;
        }

        .speaker-category-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        /* WHAT TO EXPECT SECTION */
        .what-to-expect {
          background: var(--secondary);
          padding: 120px 20px;
        }

        .expect-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .expect-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .expect-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 50px 40px;
          border: 2px solid rgba(255, 78, 0, 0.2);
          transition: all 0.3s ease;
        }

        .expect-item:hover {
          border-color: var(--primary);
          background: rgba(255, 78, 0, 0.1);
          transform: scale(1.05);
        }

        .expect-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 80px;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 20px;
        }

        .expect-title {
          font-family: 'Oswald', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .expect-text {
          font-size: 16px;
          color: var(--gray);
          line-height: 1.6;
        }

        /* FOMO SECTION */
        .fomo-section {
          background: linear-gradient(180deg, #0A0A0A 0%, #1a0a00 100%);
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .fomo-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 78, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(255, 245, 0, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .fomo-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .fomo-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          padding: 10px 30px;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 30px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .fomo-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 7vw, 70px);
          color: var(--text-light);
          line-height: 1.1;
          margin-bottom: 60px;
          letter-spacing: 2px;
        }

        .fomo-stats {
          display: flex;
          justify-content: center;
          gap: 80px;
          margin: 60px 0;
          flex-wrap: wrap;
        }

        .fomo-stat-item {
          text-align: center;
        }

        .fomo-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 72px;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 10px;
          text-shadow: 0 0 30px rgba(255, 78, 0, 0.5);
        }

        .fomo-label {
          font-family: 'Oswald', sans-serif;
          font-size: 16px;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .fomo-text {
          font-size: 20px;
          color: var(--gray);
          line-height: 1.7;
          max-width: 900px;
          margin: 40px auto;
        }

        .fomo-highlight {
          font-size: 22px;
          color: var(--text-light);
          line-height: 1.6;
          max-width: 800px;
          margin: 40px auto;
          padding: 30px;
          background: rgba(255, 78, 0, 0.1);
          border-left: 4px solid var(--primary);
        }

        .fomo-testimonials {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 60px;
          text-align: left;
        }

        .fomo-quote {
          background: rgba(255, 255, 255, 0.03);
          padding: 30px;
          border-left: 3px solid var(--accent);
          transition: all 0.3s ease;
        }

        .fomo-quote:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }

        .fomo-quote p {
          font-size: 16px;
          color: var(--gray);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 15px;
        }

        .fomo-quote span {
          font-size: 14px;
          color: var(--accent);
          font-weight: 600;
        }

        /* CTA SECTION */
        .cta-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          padding: 100px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.05) 10px,
            rgba(255, 255, 255, 0.05) 20px
          );
          animation: diagonalMove 20s linear infinite;
        }

        @keyframes diagonalMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .cta-section-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
        }

        .cta-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 8vw, 90px);
          color: var(--text-light);
          line-height: 1.1;
          margin-bottom: 30px;
          letter-spacing: 2px;
        }

        .cta-section-text {
          font-size: 22px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 50px;
          line-height: 1.6;
        }

        .cta-secondary {
          display: inline-block;
          background: white;
          color: var(--primary);
          padding: 22px 60px;
          font-family: 'Oswald', sans-serif;
          font-size: 20px;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          border: 3px solid white;
        }

        .cta-secondary:hover {
          background: var(--accent);
          color: var(--secondary);
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* STATS SECTION */
        .stats {
          background: var(--bg-light);
          padding: 100px 20px;
        }

        .stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 60px;
          text-align: center;
        }

        .stat-item {
          position: relative;
        }

        .stat-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 80px;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 10px;
        }

        .stat-label {
          font-family: 'Oswald', sans-serif;
          font-size: 18px;
          color: var(--text-dark);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* FAQ SECTION */
        .faq {
          background: var(--secondary);
          padding: 120px 20px;
        }

        .faq-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          margin-bottom: 20px;
          border-left: 4px solid var(--primary);
          overflow: hidden;
        }

        .faq-question {
          padding: 30px 40px;
          font-family: 'Oswald', sans-serif;
          font-size: 20px;
          color: var(--text-light);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          background: rgba(255, 78, 0, 0.1);
        }

        .faq-answer {
          padding: 0 40px 30px 40px;
          color: var(--gray);
          line-height: 1.8;
          font-size: 16px;
          display: none;
        }

        /* FOOTER */
        footer {
          background: var(--secondary);
          border-top: 1px solid rgba(255, 78, 0, 0.3);
          padding: 60px 20px 30px;
          text-align: center;
        }

        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          color: var(--text-light);
          margin-bottom: 20px;
          letter-spacing: 3px;
        }

        .footer-logo span {
          color: var(--primary);
        }

        .footer-tagline {
          font-size: 18px;
          color: var(--gray);
          margin-bottom: 40px;
          font-style: italic;
        }

        .footer-info {
          font-size: 14px;
          color: var(--gray);
          line-height: 2;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          nav {
            padding: 15px 20px;
          }

          .hero-stats {
            gap: 30px;
          }

          .hero-stat {
            padding: 15px 20px;
            flex-direction: column;
            text-align: center;
          }

          .hero-stat .stat-icon {
            font-size: 28px;
          }

          .hero-stat strong {
            font-size: 28px;
          }

          .pillars, .success-proof {
            padding: 60px 20px;
          }

          .about, .speakers, .what-to-expect, .faq, .fomo-section {
            padding: 80px 20px;
          }

          .cta-section {
            padding: 60px 20px;
          }

          .about::before {
            font-size: 80px;
            letter-spacing: 5px;
          }

          .pillar-card, .expect-item {
            padding: 40px 30px;
          }

          .faq-question, .faq-answer {
            padding-left: 25px;
            padding-right: 25px;
          }

          .fomo-stats {
            gap: 40px;
          }

          .fomo-number {
            font-size: 56px;
          }

          .fomo-testimonials {
            grid-template-columns: 1fr;
          }

          .success-grid {
            gap: 40px;
          }
        }

        /* ANIMATIONS ON SCROLL */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ACCESS TAG */
        .access-tag {
          display: inline-block;
          background: var(--accent);
          color: var(--secondary);
          padding: 15px 30px;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 1px;
          margin-top: 30px;
          border: 3px solid var(--secondary);
          box-shadow: 0 5px 20px rgba(255, 245, 0, 0.3);
        }
      `}</style>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;600;700&family=Archivo:wght@300;400;600;800&display=swap" rel="stylesheet" />

      {/* NAVIGATION */}
    {/*   <nav>
        <div className="logo">
          IDACLASS <span>ACADEMY</span>
        </div>
      </nav> */}

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🔴 En Vivo · 9 de Enero 2026</div>
          <h1 className="hero-title">
            Transforma Tu Pasión en<br />
            <span className="highlight">Profesión de Impacto</span>
          </h1>
          <p className="hero-subtitle">
            Únete al movimiento que está redefiniendo los estándares educativos del fitness.<br />
            <strong>Descubre cómo convertir tu pasión en una carrera que transforma vidas.</strong>
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-icon">🎯</span>
              <div>
                <strong>2,847</strong>
                <span>Ya Registrados</span>
              </div>
            </div>
            <div className="hero-stat">
              <span className="stat-icon">🌎</span>
              <div>
                <strong>40+</strong>
                <span>Sedes Confirmadas</span>
              </div>
            </div>
            <div className="hero-stat">
              <span className="stat-icon">🏆</span>
              <div>
                <strong>12+</strong>
                <span>Empresas Aliadas</span>
              </div>
            </div>
          </div>
          <div className="hero-date">9 DE ENERO 2026 · 2 HORAS DE CONTENIDO EXCLUSIVO</div>
          <a href="#registro" className="cta-primary">Asegura tu lugar ahora</a>
          <p className="hero-free">✓ Acceso 100% Gratuito · ✓ Certificado de Participación · ✓ Becas Exclusivas</p>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="pillars">
        <div className="pillars-grid">
          <div className="pillar-card">
            <span className="pillar-icon">💼</span>
            <h3 className="pillar-title">Oportunidades Reales</h3>
            <p className="pillar-text">
              Casos de éxito reales de profesionales que transformaron su pasión en carreras rentables. Conoce las rutas probadas hacia el éxito.
            </p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">🤝</span>
            <h3 className="pillar-title">Respaldo Global</h3>
            <p className="pillar-text">
              Formación avalada por las empresas líderes del sector. Tu certificación tiene el respaldo de toda la industria unida.
            </p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">📈</span>
            <h3 className="pillar-title">Crecimiento Sin Riesgo</h3>
            <p className="pillar-text">
              Aprende de los errores de otros. Estrategias validadas que minimizan el fracaso y aceleran tu desarrollo profesional.
            </p>
          </div>
          <div className="pillar-card">
            <span className="pillar-icon">🌟</span>
            <h3 className="pillar-title">Comunidad Activa</h3>
            <p className="pillar-text">
              Más fuerte juntos. Accede a una red de 40+ gimnasios y profesionales comprometidos con tu éxito mutuo.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS PROOF SECTION */}
      <section className="success-proof">
        <div className="success-content">
          <div className="section-label">VALIDACIÓN REAL</div>
          <h2 className="section-title">Por Qué Esto Funciona</h2>
          <div className="success-grid">
            <div className="success-item">
              <div className="success-icon">🎓</div>
              <h3>Formación Avalada</h3>
              <p>Certificaciones reconocidas por las principales marcas y gimnasios de Latinoamérica. Tu título tiene peso real en el mercado.</p>
            </div>
            <div className="success-item">
              <div className="success-icon">🚀</div>
              <h3>Casos Documentados</h3>
              <p>Más de 5,000 graduados trabajando en la industria. Testimonios reales, números verificables, transformaciones medibles.</p>
            </div>
            <div className="success-item">
              <div className="success-icon">🎯</div>
              <h3>Modelo Colaborativo</h3>
              <p>No competimos, colaboramos. Un ecosistema donde gimnasios, marcas y profesionales crecen juntos elevando el estándar.</p>
            </div>
            <div className="success-item">
              <div className="success-icon">💡</div>
              <h3>Tendencias 2026</h3>
              <p>Descubre qué busca el mercado HOY. Oportunidades emergentes, nichos sin explotar, y demandas actuales del sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="sobre">
        <div className="about-content">
          <div className="section-label">EL MOVIMIENTO</div>
          <h2 className="section-title">Un Ecosistema Global Que Eleva a Todos</h2>
          <p className="section-text">
            El fitness latinoamericano está en su mejor momento: <strong>crecimiento del 10.26% anual</strong>. 
            Pero con ese crecimiento llegó la fragmentación. Promesas vacías. Certificaciones sin respaldo. 
            Profesionales que fracasan no por falta de pasión, sino por falta de guía.
          </p>
          <p className="section-text">
            <strong>IdaClass Academy</strong> lleva 25 años formando a los mejores. Pero hoy, algo cambió. 
            No basta con ser los mejores. Queremos que <strong>toda la industria sea mejor</strong>.
          </p>
          <div className="highlight-quote">
            &quot;Tu pasión te transforma. Tu formación cambia vidas.&quot;
          </div>
          <p className="section-text">
            Por eso convocamos a <strong>40+ gimnasios</strong>, <strong>empresas líderes</strong>, 
            <strong>casos de éxito reales</strong> y la <strong>nueva generación de entrenadores</strong> 
            para crear algo inédito: <strong>un movimiento donde el éxito individual alimenta el crecimiento colectivo</strong>.
          </p>
          <p className="section-text">
            El 9 de enero, descubre:
          </p>
          <ul className="about-list">
            <li><strong>Rutas probadas hacia el éxito</strong> - Qué funciona, qué no, y por qué</li>
            <li><strong>Oportunidades ocultas del mercado</strong> - Nichos rentables que nadie te cuenta</li>
            <li><strong>Certificaciones con aval real</strong> - Respaldadas por las marcas que contratan</li>
            <li><strong>Red de apoyo profesional</strong> - Mentores, pares y oportunidades laborales</li>
            <li><strong>Estrategias antifrustración</strong> - Cómo evitar los errores que hunden a 8 de cada 10</li>
          </ul>
          <p className="section-text">
            Esto no es otro webinar. Es el punto de partida de tu carrera profesional en una industria 
            que finalmente decidió <strong>crecer junta</strong>.
          </p>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section className="speakers">
        <div className="speakers-content">
          <div className="section-label">RESPALDO GLOBAL</div>
          <h2 className="section-title">Toda la Industria Unida Por Primera Vez</h2>
          <p style={{ textAlign: 'center', fontSize: '20px', color: '#666', maxWidth: '900px', margin: '0 auto 60px', lineHeight: '1.6' }}>
            40+ gimnasios, empresas líderes, casos de éxito comprobados y la nueva generación de entrenadores 
            revelando lo que funciona HOY en el mercado fitness.
          </p>
          <div className="speakers-grid">
            <div className="speaker-category">
              <div className="speaker-icon">🏋️</div>
              <h3 className="speaker-category-title">Red de Gimnasios</h3>
              <ul className="speaker-category-list">
                <li>+40 Sedes Confirmadas</li>
                <li>Presencia en Toda Latinoamérica</li>
                <li>Oportunidades de Práctica Real</li>
                <li>Inserción Laboral Garantizada</li>
              </ul>
            </div>
            <div className="speaker-category">
              <div className="speaker-icon">🏢</div>
              <h3 className="speaker-category-title">Empresas Aliadas</h3>
              <ul className="speaker-category-list">
                <li>Marcas Top del Sector</li>
                <li>Equipamiento y Tecnología</li>
                <li>Certificaciones Avaladas</li>
                <li>Beneficios Exclusivos</li>
              </ul>
            </div>
            <div className="speaker-category">
              <div className="speaker-icon">🎯</div>
              <h3 className="speaker-category-title">Casos de Éxito</h3>
              <ul className="speaker-category-list">
                <li>Emprendedores Rentables</li>
                <li>Transformaciones Reales</li>
                <li>Modelos de Negocio Validados</li>
                <li>Números y Estrategias</li>
              </ul>
            </div>
            <div className="speaker-category">
              <div className="speaker-icon">⚡</div>
              <h3 className="speaker-category-title">Nueva Generación</h3>
              <ul className="speaker-category-list">
                <li>Influencers del Fitness</li>
                <li>Tendencias Emergentes</li>
                <li>Marketing Digital Fitness</li>
                <li>Nichos en Crecimiento</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
              <strong style={{ color: '#FF4E00' }}>Esto es histórico:</strong> Por primera vez, toda la cadena de valor 
              del fitness (gimnasios, marcas, educadores, profesionales) se sienta en la misma mesa 
              para compartir conocimiento sin competencia. <strong>Solo colaboración.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT SECTION */}
      <section className="what-to-expect">
        <div className="expect-content">
          <div className="section-label">PROGRAMA DEL EVENTO</div>
          <h2 className="section-title">Lo Que Vas a Descubrir el 9 de Enero</h2>
          <div className="expect-grid">
            <div className="expect-item fade-in">
              <div className="expect-number">01</div>
              <h3 className="expect-title">Modelo Educativo 2026</h3>
              <p className="expect-text">
                Programa completo renovado con metodologías validadas. Qué se enseña, por qué funciona, y cómo te diferencia.
              </p>
            </div>
            <div className="expect-item fade-in">
              <div className="expect-number">02</div>
              <h3 className="expect-title">Casos de Éxito Reales</h3>
              <p className="expect-text">
                Graduados trabajando en gimnasios top, emprendimientos rentables, y transformaciones profesionales documentadas.
              </p>
            </div>
            <div className="expect-item fade-in">
              <div className="expect-number">03</div>
              <h3 className="expect-title">Panel de Empresas</h3>
              <p className="expect-text">
                Marcas líderes revelando qué buscan al contratar. Oportunidades laborales, requisitos reales, salarios del mercado.
              </p>
            </div>
            <div className="expect-item fade-in">
              <div className="expect-number">04</div>
              <h3 className="expect-title">Tendencias Emergentes</h3>
              <p className="expect-text">
                Nichos en crecimiento para 2026. Especialidades demandadas. Dónde está el dinero que nadie te cuenta.
              </p>
            </div>
            <div className="expect-item fade-in">
              <div className="expect-number">05</div>
              <h3 className="expect-title">Red Global Confirmada</h3>
              <p className="expect-text">
                Anuncio de nuevas sedes internacionales. Expansión geográfica. Tu certificación vale en más países.
              </p>
            </div>
            <div className="expect-item fade-in">
              <div className="expect-number">06</div>
              <h3 className="expect-title">Becas y Oportunidades</h3>
              <p className="expect-text">
                Sorteos en vivo, descuentos exclusivos, y beneficios solo para quienes asisten al streaming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOMO SECTION */}
      <section className="fomo-section">
        <div className="fomo-content">
          <div className="fomo-badge">⚡ MOMENTO DECISIVO</div>
          <h2 className="fomo-title">Miles Ya Decidieron. ¿Y Tú?</h2>
          <div className="fomo-stats">
            <div className="fomo-stat-item">
              <div className="fomo-number">2,847</div>
              <div className="fomo-label">Profesionales Registrados</div>
            </div>
            <div className="fomo-stat-item">
              <div className="fomo-number">40+</div>
              <div className="fomo-label">Gimnasios Confirmados</div>
            </div>
            <div className="fomo-stat-item">
              <div className="fomo-number">12+</div>
              <div className="fomo-label">Empresas Participantes</div>
            </div>
          </div>
          <p className="fomo-text">
            Mientras lees esto, instructores en gimnasios, entrenadores personales, y emprendedores fitness 
            están asegurando su lugar en el movimiento que definirá 2026.
          </p>
          <p className="fomo-highlight">
            <strong>No es FOMO. Es inteligencia de mercado.</strong><br />
            Quienes llegan primero a las nuevas oportunidades, las capitalizan.
          </p>
          <div className="fomo-testimonials">
            <div className="fomo-quote">
              <p>&quot;Me registré apenas vi el anuncio. 25 años de trayectoria no mienten. Si IdaClass convoca, yo asisto.&quot;</p>
              <span>— Martín R., Personal Trainer</span>
            </div>
            <div className="fomo-quote">
              <p>&quot;Nuestro gimnasio ya es sede IdaClass. Ver el respaldo de marcas top me confirmó que voy por buen camino.&quot;</p>
              <span>— Carolina M., Instructora Certificada</span>
            </div>
            <div className="fomo-quote">
              <p>&quot;Llevo 3 años entrenando gratis por pasión. Hora de convertirlo en carrera. Esto es lo que necesitaba.&quot;</p>
              <span>— Diego L., Futuro Estudiante</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">25</div>
            <div className="stat-label">Años de Trayectoria</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Gimnasios Asociados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10.26%</div>
            <div className="stat-label">Crecimiento Anual del Sector</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Gratuito y Accesible</div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section" id="registro">
        <div className="cta-section-content">
          <h2 className="cta-section-title">El 9 de Enero, Todo Cambia</h2>
          <p className="cta-section-text">
            No dejes que tu pasión se quede en el gimnasio. Conviértela en la carrera que transforma tu vida 
            y la de miles de personas. <strong>Regístrate ahora y sé parte del movimiento más grande 
            de la industria fitness.</strong>
          </p>
          <a href="#" className="cta-secondary">Asegura tu Lugar - 100% Gratis</a>
          <div className="access-tag">✓ Acceso Completo | ✓ Certificado Digital | ✓ Becas en Vivo | ✓ Q&A Exclusivo</div>
          <p style={{ marginTop: '30px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
            🔒 Tus datos están seguros. Solo usamos tu email para enviarte el link del streaming.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq">
        <div className="faq-content">
          <div className="section-label">PREGUNTAS FRECUENTES</div>
          <h2 className="section-title">Todo lo que Necesitas Saber</h2>
          
          <div className="faq-item">
            <div className="faq-question">
              ¿Para quién es este evento? <span>+</span>
            </div>
            <div className="faq-answer">
              Para cualquier persona apasionada por el fitness que quiera convertir esa pasión en una profesión de impacto. 
              Profesionales actuales, estudiantes, instructores en gimnasios, emprendedores del sector y todos aquellos 
              que buscan elevar su formación y conocer las nuevas oportunidades del mercado.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Cuál es el costo del evento? <span>+</span>
            </div>
            <div className="faq-answer">
              El streaming es 100% GRATUITO. Nuestra filosofía es &quot;educar educando&quot;: democratizar el conocimiento 
              para generar transformación real. Solo necesitas registrarte para recibir el link de acceso.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Qué incluye el acceso al streaming? <span>+</span>
            </div>
            <div className="faq-answer">
              2 horas de contenido de alto valor con presentaciones de expertos internacionales, paneles con líderes de la industria, 
              casos de éxito reales, sesiones de Q&A en tiempo real, anuncios exclusivos sobre el programa 2026, 
              acceso a sorteos de becas y beneficios únicos para participantes.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Podré hacer preguntas durante el evento? <span>+</span>
            </div>
            <div className="faq-answer">
              ¡Absolutamente! Habrá sesiones interactivas de preguntas y respuestas en tiempo real. 
              Es tu oportunidad para resolver dudas directamente con expertos y el equipo de IdaClass Academy.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Qué pasa si no puedo verlo en vivo? <span>+</span>
            </div>
            <div className="faq-answer">
              Aunque el evento en vivo tendrá interacción exclusiva y sorteos en tiempo real, las personas registradas 
              recibirán acceso a una grabación posterior. Sin embargo, te recomendamos verlo en vivo para aprovechar 
              al máximo la experiencia completa.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Cómo me registro para el evento? <span>+</span>
            </div>
            <div className="faq-answer">
              Simplemente haz clic en cualquiera de los botones &quot;Regístrate ahora&quot; en esta página. Completa el formulario 
              con tus datos y recibirás automáticamente el link de acceso al streaming junto con toda la información necesaria.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Qué es &quot;El Efecto Transformación&quot;? <span>+</span>
            </div>
            <div className="faq-answer">
              Es un movimiento que busca redefinir los estándares educativos del sector fitness a través de la colaboración 
              entre gimnasios, empresas, educadores y profesionales. La idea es pasar de la competencia fragmentada a 
              un ecosistema donde el crecimiento sostenible se logra elevando la formación de manera conjunta.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
   {/*    <footer>
        <div className="footer-logo">
          IDACLASS <span>ACADEMY</span>
        </div>
        <p className="footer-tagline">Tu pasión te transforma, tu formación cambia vidas.</p>
        <div className="footer-info">
          9 de Enero 2026 | Streaming Gratuito<br />
          25 Años Transformando la Industria Fitness<br />
          © 2026 IdaClass Academy. Todos los derechos reservados.
        </div>
      </footer> */}
    </>
  )
}

export default Page
