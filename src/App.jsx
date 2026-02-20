import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh", // full screen height
        width: "100%", // full width
        backgroundImage: `url("https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?_gl=1*rdgcme*_ga*MTQyMzgzMzI1NS4xNzUxNDM1MDI1*_ga_8JE65Q40S6*czE3NzE2MDgyOTckbzEwJGcxJHQxNzcxNjA5ODU5JGoxMSRsMCRoMA..")`,
        backgroundSize: "cover", // cover whole div
        backgroundPosition: "center", // center image
        backgroundRepeat: "no-repeat", // no repeat

        padding: "0 1rem", // small padding for mobile
      }}
    >
      <h1
        className="rushi"
        style={{
          color: "red",
          fontSize: "6vw", // responsive font-size based on viewport width
          maxFontSize: "4rem", // optional max size
          lineHeight: "1.2",
        }}
      >
        Rushi Kale Hacker
      </h1>
    </div>
  );
}

export default App;
