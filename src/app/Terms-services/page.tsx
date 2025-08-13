"use client"

export default function TermsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/placeholder-jheqf.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Google Fonts Link */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Neonderthaw&family=Zen+Tokyo+Zoo&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "3rem",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          animation: "fadeInUp 1s ease-out",
        }}
      >
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          .zen-tokyo-zoo-regular {
            font-family: "Zen Tokyo Zoo", system-ui;
            font-weight: 400;
            font-style: normal;
          }
          .shimmer-text {
            background: linear-gradient(90deg, #1a1a1a 25%, #4a4a4a 50%, #1a1a1a 75%);
            background-size: 200% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s infinite;
          }
        `}</style>

        <h1
          className="zen-tokyo-zoo-regular shimmer-text"
          style={{
            fontSize: "3.5rem",
            fontWeight: "400",
            marginBottom: "2rem",
            textAlign: "center",
            color: "#1a1a1a",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            letterSpacing: "2px",
          }}
        >
          Terms of Service
        </h1>

        <p
          style={{
            marginBottom: "1.5rem",
            color: "#1a1a1a",
            fontSize: "1.1rem",
            lineHeight: "1.7",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Welcome to <strong style={{ color: "#2563eb", fontWeight: "600" }}>Workownix</strong>. By accessing or using
          our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our
          services.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            color: "#1a1a1a",
            borderBottom: "3px solid #2563eb",
            paddingBottom: "0.5rem",
            letterSpacing: "1px",
          }}
        >
          1. Services Overview
        </h2>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "#1a1a1a",
            fontSize: "1rem",
            lineHeight: "1.7",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Workownix provides digital solutions including Web Development (HTML, CSS, TypeScript, Next.js), Python
          Programming, WordPress, UI/UX Design, AI & Metaverse, Graphic Design, and more.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            color: "#1a1a1a",
            borderBottom: "3px solid #2563eb",
            paddingBottom: "0.5rem",
            letterSpacing: "1px",
          }}
        >
          2. User Responsibilities
        </h2>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "#1a1a1a",
            fontSize: "1rem",
            lineHeight: "1.7",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Users must provide accurate information and ensure their use of services is lawful and ethical. Any misuse or
          illegal activity may lead to termination of services.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            color: "#1a1a1a",
            borderBottom: "3px solid #2563eb",
            paddingBottom: "0.5rem",
            letterSpacing: "1px",
          }}
        >
          3. Payment & Refunds
        </h2>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "#1a1a1a",
            fontSize: "1rem",
            lineHeight: "1.7",
            fontFamily: "Inter, sans-serif",
          }}
        >
          All payments for services are due as per the agreed schedule. Refunds are not guaranteed and will be issued
          based on project status and company discretion.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            color: "#1a1a1a",
            borderBottom: "3px solid #2563eb",
            paddingBottom: "0.5rem",
            letterSpacing: "1px",
          }}
        >
          4. Intellectual Property
        </h2>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "#1a1a1a",
            fontSize: "1rem",
            lineHeight: "1.7",
            fontFamily: "Inter, sans-serif",
          }}
        >
          All code, designs, and content developed by Workownix remain the intellectual property of the client once
          payment is completed. We reserve the right to showcase non-confidential work in our portfolio.
        </p>

        <h2
          className="zen-tokyo-zoo-regular"
          style={{
            fontSize: "2rem",
            fontWeight: "400",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            color: "#1a1a1a",
            borderBottom: "3px solid #2563eb",
            paddingBottom: "0.5rem",
            letterSpacing: "1px",
          }}
        >
          5. Termination
        </h2>
        <p
          style={{
            marginBottom: "1.5rem",
            color: "#1a1a1a",
            fontSize: "1rem",
            lineHeight: "1.7",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Workownix reserves the right to terminate or suspend access to our services immediately, without prior notice,
          if you breach the Terms.
        </p>

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
            borderRadius: "16px",
            border: "2px solid #2563eb",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#1a1a1a",
              fontSize: "1rem",
              fontFamily: "Inter, sans-serif",
              margin: "0",
              fontWeight: "500",
            }}
          >
            By using Workownix services, you acknowledge that you have read and agree to these terms.
          </p>
        </div>
      </div>
    </div>
  )
}
