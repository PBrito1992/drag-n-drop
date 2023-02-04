import { Box } from "components/box";
import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const boxes = Array(4).fill(0);

function App() {
  const [selectedIndex, setSelectedIndex] = useState("0");

  const handleOnDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return;

    setSelectedIndex(destination.droppableId);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-red-600">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {boxes.map((_, index) => (
            <Box
              key={index}
              isSelected={selectedIndex === index.toString()}
              id={index.toString()}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
