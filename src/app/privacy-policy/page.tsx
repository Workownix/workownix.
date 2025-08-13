"use client"

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          'url("image/coder15.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Neonderthaw&family=Zen+Tokyo+Zoo&display=swap');
        
        .zen-tokyo-zoo-regular {
          font-family: "Zen Tokyo Zoo", system-ui;
          font-weight: 400;
          font-style: normal;
        }
        
        .neonderthaw-regular {
          font-family: "Neonderthaw", cursive;
          font-weight: 400;
          font-style: normal;
        }
        
        .glass-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div
        className="glass-card floating-animation"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "60px",
          color: "#000",
          borderRadius: "30px",
          marginTop: "50px",
          marginBottom: "50px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "200px",
            height: "200px",
            background: "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "150px",
            height: "150px",
            background: "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1))",
            borderRadius: "50%",
            filter: "blur(30px)",
          }}
        />

        <h1
          className="zen-tokyo-zoo-regular glow-text"
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "40px",
            textAlign: "center",
            background: "linear-gradient(45deg, #1f2937, #4338ca, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "pulse 2s infinite",
          }}
        >
          Privacy Policy
        </h1>

        <p style={{ marginBottom: "30px", fontSize: "18px", lineHeight: "1.8" }}>
          At <strong style={{ color: "#4338ca" }}>Workownix</strong>, we take your privacy seriously. This policy
          outlines how we collect, use, and protect your information.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginTop: "50px",
            marginBottom: "20px",
            color: "#1f2937",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          1. Information We Collect
        </h2>
        <p style={{ marginBottom: "30px", fontSize: "16px", lineHeight: "1.7" }}>
          We may collect personal information including your name, email, contact number, and service preferences when
          you contact us or use our services.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginTop: "50px",
            marginBottom: "20px",
            color: "#1f2937",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          2. How We Use Your Information
        </h2>
        <p style={{ marginBottom: "20px", fontSize: "16px", lineHeight: "1.7" }}>We use your data to:</p>
        <ul
          style={{
            listStyleType: "disc",
            marginLeft: "40px",
            marginTop: "15px",
            marginBottom: "30px",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          <li style={{ marginBottom: "8px" }}>Provide and improve our services</li>
          <li style={{ marginBottom: "8px" }}>Respond to inquiries</li>
          <li style={{ marginBottom: "8px" }}>Send updates and promotional content (only with consent)</li>
        </ul>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginTop: "50px",
            marginBottom: "20px",
            color: "#1f2937",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          3. Data Protection
        </h2>
        <p style={{ marginBottom: "30px", fontSize: "16px", lineHeight: "1.7" }}>
          We implement appropriate security measures to protect your personal data from unauthorized access.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginTop: "50px",
            marginBottom: "20px",
            color: "#1f2937",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          4. Third-Party Services
        </h2>
        <p style={{ marginBottom: "30px", fontSize: "16px", lineHeight: "1.7" }}>
          We do not sell or share your data with third parties without your consent, except where required by law.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginTop: "50px",
            marginBottom: "20px",
            color: "#1f2937",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          5. Your Consent
        </h2>
        <p style={{ marginBottom: "30px", fontSize: "16px", lineHeight: "1.7" }}>
          By using our site or services, you consent to our privacy policy. You can request to access, update, or delete
          your data at any time.
        </p>

        {/* Contact Section */}
        <div
          style={{
            marginTop: "60px",
            padding: "40px",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
            borderRadius: "20px",
            textAlign: "center",
            border: "1px solid rgba(99, 102, 241, 0.2)",
          }}
        >
          <h3
            className="zen-tokyo-zoo-regular"
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              color: "#4338ca",
            }}
          >
            Questions About Privacy?
          </h3>
          <p style={{ fontSize: "16px", color: "#6b7280", marginBottom: "25px" }}>
            Contact us anytime for privacy-related inquiries
          </p>
         
        </div>
      </div>
    </div>
  )
}
