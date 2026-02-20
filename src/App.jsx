import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100vh", // full viewport height
        width: "100%", // full width
        backgroundImage: `url("https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?_gl=1*rd18z*_ga*MTQyMzgzMzI1NS4xNzUxNDM1MDI1*_ga_8JE65Q40S6*czE3NzE2MDgyOTckbzEwJGcxJHQxNzcxNjA4ODIwJGo1NyRsMCRoMA..")`,
        backgroundSize: "cover", // cover whole div

        color: "purple",
        fontSize: "2rem",
      }}
    >
      <h1 className="rushi" style={{}}>
        Rushi Kale Hacker
      </h1>
    </div>
  );
}

export default App;
