import { css, keyframes } from "@pandacss/react"
import  { StrictMode } from "react"
import { createRoot } from "react-dom/client"

const rotar = keyframes({
  "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
  "100%": { transform: "rotateX(359deg) rotateY(359deg)" }
})

const bodyStyle = css({
  h: "100dvh",
  w: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  bgColor: "#000",
  backgroundImage: "url('assets/texture.svg')",
  backgroundSize: "10vw",
  overflow: "hidden",
  "& *": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    WebkitTapHighlightColor: "transparent"
  }
})

const pyramidStyle = css({
  "--w": "150px",
  "--w-negative": "calc(var(--w) * -1)",
  "--w-half": "calc(var(--w) / 2)",
  "--w-half-negative": "calc(var(--w) / 2 * -1)",
  "--rotate-x": "25deg",
  "--rotate-y": "-90deg",
  "--rotate-x-negative": "calc(var(--rotate-x) * -1)",
  w: "var(--w)",
  h: "var(--w)",
  pos: "relative",
  transformStyle: "preserve-3d",
  perspective: "10000px",
  "&.pyramid-top": {
    animation: `${rotar} 8s linear infinite alternate both`
  },
  "&.pyramid-bottom": {
    pos: "absolute",
    top: "50%",
    transform: "translateZ(-100px) rotate(180deg) scaleZ(-1)"
  },
  "&.pausa": {
    animationPlayState: "paused"
  }
})

const sideStyle = css({
  w: "100%",
  h: "100%",
  pos: "absolute",
  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
  transformOrigin: "50% 100%",
  "--rotate-x-negative": "-16.5deg",
  "&.side-front": {
    bgColor: "#00f8",
    transform: "scale(1.02, 1.04) rotateX(22deg)"
  },
  "&.side-bottom": {
    bgColor: "#0f08",
    transform: "rotateX(90deg)"
  },
  "&.side-right": {
    bgColor: "#f008",
    transform:
      "translateZ(-75px) translateX(38px) rotateY(-63deg) rotateX(var(--rotate-x-negative)) scaleX(1.12)"
  },
  "&.side-left": {
    bgColor: "#ff08",
    transform:
      "translateZ(-75px) translateX(-38px) rotateY(63deg) rotateX(var(--rotate-x-negative)) scaleX(1.12)"
  }
})

function Pyramid({ className }) {
  return (
    <div className={`${pyramidStyle} ${className}`}>
      <div className={`${sideStyle} side-front`}></div>
      <div className={`${sideStyle} side-right`}></div>
      <div className={`${sideStyle} side-left`}></div>
      <div className={`${sideStyle} side-bottom`}></div>
    </div>
  )
}

function App() {
  return (
    <div className={`${bodyStyle}`}>
      <div
        className={`pyramid-top ${pyramidStyle}`}
        onClick={(e) => {
          if (e.target.classList.contains("side")) {
            e.target.closest(".pyramid").classList.toggle("pausa")
          }
        }}
      >
        <div className={`${sideStyle} side-front`}></div>
        <div className={`${sideStyle} side-right`}></div>
        <div className={`${sideStyle} side-left`}></div>
        <div className={`${sideStyle} side-bottom`}></div>
        <Pyramid className="pyramid-bottom" />
      </div>
    </div>
  )
}

const rootDiv = document.createElement("div")
document.body.appendChild(rootDiv)
createRoot(rootDiv).render(
  <StrictMode>
    <App />
  </StrictMode>
)
