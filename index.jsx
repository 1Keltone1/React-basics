function App() {
  return (
    <>
      <MoodBoard />
    </>
  );
}

export function MoodBoardItem({ color, image, description }) {
  return (
    <div style={{ backgroundColor: color }} className="mood-board-item">
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem 
          color="#FF6B6B" 
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" 
          description="forest" 
        />
        <MoodBoardItem 
          color="#4ECDC4" 
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" 
          description="lake" 
        />
        <MoodBoardItem 
          color="#FFE66D" 
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" 
          description="sea" 
        />
      </div>
    </div>
  );
}

export default App;