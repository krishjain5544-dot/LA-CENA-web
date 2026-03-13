import React, { useState } from "react";
import { motion } from "motion/react";

interface SocialButtonProps {
  label: string;
  href: string;
  color: string;
  iconType: "instagram" | "whatsapp" | "phone";
}

export const SocialButton: React.FC<SocialButtonProps> = ({ label, href, color, iconType }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderIcon = () => {
    const strokeWidth = 1.2;
    const size = 20;

    switch (iconType) {
      case "instagram":
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            strokeLinejoin="miter"
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <motion.rect 
              x="2" y="2" width="20" height="20" rx="4" 
              initial={{ pathLength: 1 }}
              animate={isHovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="12" cy="12" r="4" 
              initial={{ scale: 1 }}
              animate={isHovered ? { scale: [0.5, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <rect x="17" y="6" width="1.5" height="1.5" fill="currentColor" stroke="none" />
          </motion.svg>
        );
      case "whatsapp":
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            strokeLinejoin="miter"
            animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Sharp Message Square */}
            <motion.path 
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
              initial={{ pathLength: 1 }}
              animate={isHovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {/* Inner lines to make it look rich */}
            <line x1="9" y1="9" x2="15" y2="9" />
            <line x1="9" y1="13" x2="13" y2="13" />
          </motion.svg>
        );
      case "phone":
        return (
          <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            strokeLinejoin="miter"
            animate={isHovered ? { scale: 1.1, rotate: [0, -10, 10, -10, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Sharp Phone Receiver */}
            <motion.path 
              d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72 12.05 12.05 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.81.7A2 2 0 0122 16.92z" 
              initial={{ pathLength: 1 }}
              animate={isHovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.svg>
        );
    }
  };

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: 1,
        aspectRatio: "1",
        padding: "0.5rem",
        border: `1px solid ${isHovered ? color + "90" : color + "30"}`,
        borderRadius: "12px",
        color: isHovered ? color : color + "90",
        textDecoration: "none",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.6rem",
        background: isHovered ? color + "08" : "rgba(10,10,10,0.4)",
        backdropFilter: "blur(10px)",
        boxShadow: isHovered ? `0 8px 32px ${color}15` : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      animate={{
        y: isHovered ? -4 : 0,
      }}
    >
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        height: "24px"
      }}>
        {renderIcon()}
      </div>
      <span style={{ fontWeight: 500, lineHeight: 1.2 }}>{label}</span>
    </motion.a>
  );
};
